import * as Lib from 'sync-multihash-sha2'
import * as sha256 from 'sync-multihash-sha2/sha256'
import * as SHA2 from 'multiformats/hashes/sha2'
import { toDigest } from './util.js'

/** @type {import('entail').Suite} */
export const testSHA256 = {
  'sha256 api': (assert) => {
    assert.equal(sha256.name, SHA2.sha256.name)
    assert.equal(sha256.code, SHA2.sha256.code)
    assert.equal(sha256.size, 32)
    assert.equal(typeof sha256.digest, 'function')
    assert.deepEqual(Lib.sha256, sha256)
  },

  'sha256 of empty payload': async (assert) => {
    assert.deepEqual(
      toDigest(sha256.digest(new Uint8Array([]))),
      toDigest(await SHA2.sha256.digest(new Uint8Array([])))
    )
  },

  'sha256 of "hello world"': async (assert) => {
    const payload = new TextEncoder().encode('hello world')
    assert.deepEqual(
      toDigest(sha256.digest(payload)),
      toDigest(await SHA2.sha256.digest(payload))
    )
  },
}
