import { sha256, sha512 } from 'multiformats/hashes/sha2'

/**
 * @template {number} Code
 * @param {{name?:string, code:Code, size:number, bytes: Uint8Array, digest: Uint8Array}} source
 * @returns
 */
export const toDigest = ({
  code,
  size,
  name = code === sha256.code
    ? sha256.name
    : code === sha512.code
    ? sha512.name
    : '',
  bytes,
  digest,
}) => ({
  name,
  code,
  size,
  bytes,
  digest,
})
