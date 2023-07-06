import * as Lib from 'sync-multihash-sha2'
import * as sha512 from 'sync-multihash-sha2/sha512'
import * as SHA2 from 'multiformats/hashes/sha2'
import { toDigest } from './util.js'

/** @type {import('entail').Suite} */
export const testSHA512 = {
  'sha512 api': (assert) => {
    assert.equal(sha512.name, SHA2.sha512.name)
    assert.equal(sha512.code, SHA2.sha512.code)
    assert.equal(sha512.size, 64)
    assert.equal(typeof sha512.digest, 'function')
    assert.deepEqual(Lib.sha512, sha512)
  },

  'sha512 of empty payload': async (assert) => {
    assert.deepEqual(
      toDigest(sha512.digest(new Uint8Array([]))),
      toDigest(await SHA2.sha512.digest(new Uint8Array([])))
    )
  },

  'sha512 of "hello world"': async (assert) => {
    const payload = new TextEncoder().encode('hello world')
    assert.deepEqual(
      toDigest(sha512.digest(payload)),
      toDigest(await SHA2.sha512.digest(payload))
    )
  },
}
