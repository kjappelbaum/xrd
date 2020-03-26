import { fromJSON } from 'convert-to-jcamp';

export default function toJcamp(spectrum) {
  let jcamps = [];
  let twotheta = spectrum.get('twotheta');
  if (twotheta) {
    jcamps.push(getJcamp(twotheta));
  }
  return jcamps.join('\n');
}

function getJcamp(spectrum) {
  let options = {
    xUnit: spectrum.metadata.xLabel,
    yUnit: spectrum.metadata.yLabel,
    title: spectrum.metadata.title,
    type: 'XRD',
    info: spectrum.metadata.info,
  };
  return fromJSON({ x: spectrum.x, y: spectrum.y }, options);
}
