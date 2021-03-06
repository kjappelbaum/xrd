import JSZip from 'jszip/dist/jszip.min.js';

import { parseDiffractogram, parseXY } from '../parser/parser';

/**
 * @param  {} binary
 * @param  {} options={}
 */
// eslint-disable-next-line no-unused-vars
export async function readBRML(binary, options = {}) {
  let zip = new JSZip();
  const txt = await zip.loadAsync(binary).then(function (zipFiles) {
    return zipFiles.file('Experiment0/RawData0.xml').async('text');
  });

  const diffractogram = parseDiffractogram(txt);

  return diffractogram;
}

export function readXY(file) {
  const diffractogram = parseXY(file);
  return diffractogram;
}
