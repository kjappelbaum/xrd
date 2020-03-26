import { Pattern } from '../Pattern';

describe('toJCamp', () => {
  it('test conversion to JCamp', () => {
    let pattern = new Pattern();
    pattern.add([1, 2, 3], [1, 2, 3], 'twotheta', {
      title: 'test',
      metadata: { xLabel: '2 theta / degree', yLabel: 'counts' },
    });
    const result = pattern.get();
    expect(result.x).toStrictEqual([1, 2, 3]);
    expect(result.y).toStrictEqual([1, 2, 3]);
    expect(pattern.getXLabel()).toStrictEqual('2 theta / degree');
    expect(pattern.getYLabel()).toStrictEqual('counts');
  });
});
