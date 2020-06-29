import { fromJSON } from 'convert-to-jcamp';

import { readBRML } from './reader/reader';
import { parseXY } from './parser/parser';

/**
 * @param {ArrayBuffer} binary data read of zip file
 * @param {string} filetype
 * @param {object} [options={}]
 */
async function xrdConverter(binary, filetype = 'brml', options = {}) {
  if (filetype.match('brml')) {
    const result = await readBRML(binary, options);
    const jcamp = fromJSON(result.data, {
      meta: result.meta,
      info: result.info,
    });
    return jcamp;
  } else if (filetype.match('xy')) {
    const result = parseXY(binary, options);
    const jcamp = fromJSON(result.data, {
      meta: result.meta,
      info: result.info,
    });
    return jcamp;
  }
}

export { xrdConverter, readBRML, parseXY };
