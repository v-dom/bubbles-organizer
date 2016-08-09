import {
  scaleLinear,
  scaleOrdinal,
  schemeCategory20b
} from 'd3-scale';

import {
  hierarchy,
  pack
} from 'd3-hierarchy';


export const getScaleLinearValues = (domain, range, data, valueKey, titleKey) => {
    const linear = scaleLinear()
    .domain(domain)
    .range(range);

    const color = scaleOrdinal(schemeCategory20b);
    return data.map(item => ({
        fill: color(linear(item[valueKey])),
        value: linear(item[valueKey]),
        title: item[titleKey]
    }));
};

export const getHierarchy = (data, key) => (hierarchy(data)
  .sum(d => d[key])
  .sort((a, b) => b[key] - a[key]));

export const createPackLayout = (w = 0, h = 0, padding = 0, data) =>
  (pack().size([h, w]).padding(padding)(data));
