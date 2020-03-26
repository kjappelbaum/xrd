import JSZip from 'jszip';
import { Spectrum } from '../Spectrum';
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
 * Creates a new XRD selement based on a BRML
 * @param {binary} binary - binary
 * @return {Spectrum} - New class element with the given data
 */
export async function fromBRML(text) {
  let spectrum = new Spectrum();
  let result = readBRML(text);

  spectrum.add(result.data.x, result.data.y, 'twotheta', {
    xLabel: '2 theta / degree',
    yLabel: 'counts',
    title: result.meta['Sample ID'],
    meta: result.meta,
  });

  return spectrum;
}
