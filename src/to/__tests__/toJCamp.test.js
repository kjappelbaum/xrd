import { convert } from 'jcampconverter';

import { Pattern } from '../../Pattern';

describe('toJcamp', () => {
  it('test conversion to JCamp', () => {
    const pattern = new Pattern();
    pattern.add([1, 2, 3], [1, 2, 3], 'twotheta', {
      title: 'test',
      metadata: { xLabel: '2 theta / degree', yLabel: 'counts' },
    });
    const jcamp = pattern.toJcamp();
    const result = convert(jcamp).spectra[0];
    expect(result.data[0]).toHaveLength(6);
    expect(result.xUnit).toStrictEqual('2 theta / degree');
    expect(result.yUnit).toStrictEqual('counts');
  });
});
