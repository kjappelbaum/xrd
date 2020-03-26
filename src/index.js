import { fromJSON } from 'convert-to-jcamp';

import { readBRML } from './from/fromBRML';

export { Spectrum } from './Spectrum';
export { fromBRML } from './from/fromBRML';

/**
 * @param {ArrayBuffer} binary data readed of zipf ile
 * @param {object} [options={}]
 */
export async function xrdConverter(binary, options = {}) {
  const result = await readBRML(binary, options);

  // write to jcamp
  const jcamp = fromJSON(result.data, result.metadata);

  return jcamp;
}
