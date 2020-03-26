import addJcamp from './addJcamp';
import toJcamp from './to/toJcamp';

/**
 * Class allowing manipulate a Pattern
 * @class Pattern
 * @param {object} [data={}] - object containing a pattern
 * @param {Array} [data.x=[]] - 2 theta
 * @param {Array} [data.y=[]] - counts
 */
export class Pattern {
  constructor() {
    this.flavors = {};
  }

  add(x, y, flavor = 'twotheta', options = {}) {
    if (!flavor) {
      throw new Error('You need to specify the flavor of analysis');
    }
    this.flavors[flavor.toLowerCase()] = normalizeData(x, y, options);
  }

  addJcamp(jcamp) {
    addJcamp(this.flavors, jcamp);
  }

  get(flavor = 'twotheta') {
    if (!flavor) {
      throw new Error('You need to specify the flavor of analysis');
    }
    flavor = flavor.toLowerCase();
    if (!this.flavors[flavor]) {
      throw new Error(`No spectrum for the flavor: ${flavor}`);
    }
    return this.flavors[flavor];
  }

  getXLabel(flavor = 'twotheta') {
    return this.get(flavor).metadata.xLabel;
  }

  getYLabel(flavor = 'twotheta') {
    return this.get(flavor).metadata.yLabel;
  }
}

Pattern.prototype.getData = function() {
  return { x: this.x, y: this.y };
};

Pattern.prototype.toJcamp = function() {
  return toJcamp(this);
};

function normalizeData(x, y, options = {}) {
  const { metadata } = options;
  if (x && x.length > 1 && x[0] > x[1]) {
    x = x.reverse();
    y = y.reverse();
  } else {
    x = x || [];
    y = y || [];
  }
  return {
    x,
    y,
    metadata,
  };
}
