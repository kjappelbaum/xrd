import JSZip from 'jszip';

import { Pattern } from '../Pattern';
import { parseDiffractogram } from '../parser/parser';

/**
 * @param  {} binary  - binary of the BRML file
 * @param  {} options={}
 */
// eslint-disable-next-line no-unused-vars
export function readBRML(binary, options = {}) {
  let zip = new JSZip();
  const diffractogram = zip
    .loadAsync(binary)
    .then(function(zipFiles) {
      return zipFiles.file('Experiment0/RawData0.xml').async('text');
    })
    .then((txt) => {
      return parseDiffractogram(txt);
    });
  return diffractogram;
}

/**
 * Creates a new XRD element based on a BRML
 * @param {binary} binary - binary
 * @return {Pattern} - New class element with the given data
 */
export async function fromBRML(text) {
  let pattern = new Pattern();
  let result = await readBRML(text);

  result.metadata.xLabel = '2 theta / degree';
  result.metadata.yLabel = 'counts';

  pattern.add(result.data.x, result.data.y, 'twotheta', {
    metadata: result.metadata,
  });

  return pattern;
}
