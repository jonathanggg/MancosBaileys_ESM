import { hkdfSync } from 'crypto'

/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */
class LTHash {
    constructor(salt) {
        this.salt = salt
    }

    add(hash, items) {
        for (const item of items) {
            hash = this._addSingle(hash, item)
        }
        return hash
    }

    subtract(hash, items) {
        for (const item of items) {
            hash = this._subtractSingle(hash, item)
        }
        return hash
    }

    subtractThenAdd(hash, addList, subList) {
        const subtracted = this.subtract(hash, subList)
        return this.add(subtracted, addList)
    }

    _derive(item) {
        return new Uint8Array(
            hkdfSync('sha256', Buffer.from(item), Buffer.alloc(0), this.salt, 128)
        )
    }

    _addSingle(hash, item) {
        return this._pointwise(hash, this._derive(item), (a, b) => a + b)
    }

    _subtractSingle(hash, item) {
        return this._pointwise(hash, this._derive(item), (a, b) => a - b)
    }

    _pointwise(a, b, op) {
        const x = new DataView(a.buffer, a.byteOffset, a.byteLength)
        const y = new DataView(b.buffer, b.byteOffset, b.byteLength)
        const out = new Uint8Array(a.byteLength)
        const z = new DataView(out.buffer)
        for (let i = 0; i < a.byteLength; i += 2) {
            z.setUint16(i, op(x.getUint16(i, true), y.getUint16(i, true)), true)
        }
        return out
    }
}

export const LT_HASH_ANTI_TAMPERING = new LTHash('WhatsApp Patch Integrity')
//# sourceMappingURL=lt-hash.js.map