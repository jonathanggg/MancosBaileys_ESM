import { createCipheriv, createDecipheriv, createHash, createHmac, hkdfSync, randomBytes, webcrypto } from 'crypto';
import * as curve from 'libsignal/src/curve.js';
import { KEY_BUNDLE_TYPE } from '../Defaults/index.js';
// insure browser & node compatibility
const subtle = (globalThis.crypto && globalThis.crypto.subtle) || webcrypto.subtle;
/**
 * Reemplazo de md5 de whatsapp-rust-bridge (JS puro, devuelve Buffer)
 */
export const md5 = (buffer) => createHash('md5').update(buffer).digest();
/**
 * Reemplazo de hkdf de whatsapp-rust-bridge (SHA-256)
 * Firma: hkdf(buffer, expandedLength, { salt?, info? })
 * salt/info pueden ser string, Buffer o Uint8Array. Devuelve Buffer.
 */
export const hkdf = (buffer, expandedLength, info = {}) => {
    const toBuf = (v) => (v === undefined || v === null ? Buffer.alloc(0) : typeof v === 'string' ? Buffer.from(v) : Buffer.from(v));
    const salt = toBuf(info.salt);
    const infoBuf = toBuf(info.info);
    // salt vacio => Node usa HashLen ceros (igual que RFC 5869)
    return Buffer.from(hkdfSync('sha256', Buffer.from(buffer), salt, infoBuf, expandedLength));
};
/** prefix version byte to the pub keys, required for some curve crypto functions */
export const generateSignalPubKey = (pubKey) => pubKey.length === 33 ? pubKey : Buffer.concat([KEY_BUNDLE_TYPE, pubKey]);
export const Curve = {
    generateKeyPair: () => {
        const { pubKey, privKey } = curve.generateKeyPair();
        return {
            private: Buffer.from(privKey),
            // remove version byte
            public: Buffer.from(pubKey.slice(1))
        };
    },
    sharedKey: (privateKey, publicKey) => {
        const shared = curve.calculateAgreement(generateSignalPubKey(publicKey), privateKey);
        return Buffer.from(shared);
    },
    sign: (privateKey, buf) => curve.calculateSignature(privateKey, buf),
    verify: (pubKey, message, signature) => {
        try {
            curve.verifySignature(generateSignalPubKey(pubKey), message, signature);
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
export const signedKeyPair = (identityKeyPair, keyId) => {
    const preKey = Curve.generateKeyPair();
    const pubKey = generateSignalPubKey(preKey.public);
    const signature = Curve.sign(identityKeyPair.private, pubKey);
    return { keyPair: preKey, signature, keyId };
};
const GCM_TAG_LENGTH = 128 >> 3;
/**
 * encrypt AES 256 GCM;
 * where the tag tag is suffixed to the ciphertext
 * */
export function aesEncryptGCM(plaintext, key, iv, additionalData) {
    const cipher = createCipheriv('aes-256-gcm', key, iv);
    cipher.setAAD(additionalData);
    return Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()]);
}
/**
 * decrypt AES 256 GCM;
 * where the auth tag is suffixed to the ciphertext
 * */
export function aesDecryptGCM(ciphertext, key, iv, additionalData) {
    const decipher = createDecipheriv('aes-256-gcm', key, iv);
    // decrypt additional adata
    const enc = ciphertext.slice(0, ciphertext.length - GCM_TAG_LENGTH);
    const tag = ciphertext.slice(ciphertext.length - GCM_TAG_LENGTH);
    // set additional data
    decipher.setAAD(additionalData);
    decipher.setAuthTag(tag);
    return Buffer.concat([decipher.update(enc), decipher.final()]);
}
export function aesEncryptCTR(plaintext, key, iv) {
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    return Buffer.concat([cipher.update(plaintext), cipher.final()]);
}
export function aesDecryptCTR(ciphertext, key, iv) {
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}
/** decrypt AES 256 CBC; where the IV is prefixed to the buffer */
export function aesDecrypt(buffer, key) {
    return aesDecryptWithIV(buffer.subarray(16), key, buffer.subarray(0, 16));
}
/** decrypt AES 256 CBC */
export function aesDecryptWithIV(buffer, key, IV) {
    const aes = createDecipheriv('aes-256-cbc', key, IV);
    return Buffer.concat([aes.update(buffer), aes.final()]);
}
// encrypt AES 256 CBC; where a random IV is prefixed to the buffer
export function aesEncrypt(buffer, key) {
    const IV = randomBytes(16);
    const aes = createCipheriv('aes-256-cbc', key, IV);
    return Buffer.concat([IV, aes.update(buffer), aes.final()]); // prefix IV to the buffer
}
// encrypt AES 256 CBC with a given IV
export function aesEncrypWithIV(buffer, key, IV) {
    const aes = createCipheriv('aes-256-cbc', key, IV);
    return Buffer.concat([aes.update(buffer), aes.final()]); // prefix IV to the buffer
}
// sign HMAC using SHA 256
export function hmacSign(buffer, key, variant = 'sha256') {
    return createHmac(variant, key).update(buffer).digest();
}
export function sha256(buffer) {
    return createHash('sha256').update(buffer).digest();
}
export async function derivePairingCodeKey(pairingCode, salt) {
    // Convert inputs to formats Web Crypto API can work with
    const encoder = new TextEncoder();
    const pairingCodeBuffer = encoder.encode(pairingCode);
    const saltBuffer = new Uint8Array(salt instanceof Uint8Array ? salt : new Uint8Array(salt));
    // Import the pairing code as key material
    const keyMaterial = await subtle.importKey('raw', pairingCodeBuffer, { name: 'PBKDF2' }, false, [
        'deriveBits'
    ]);
    // Derive bits using PBKDF2 with the same parameters
    // 2 << 16 = 131,072 iterations
    const derivedBits = await subtle.deriveBits({
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: 2 << 16,
        hash: 'SHA-256'
    }, keyMaterial, 32 * 8 // 32 bytes * 8 = 256 bits
    );
    return Buffer.from(derivedBits);
}
