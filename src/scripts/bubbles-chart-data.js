import {
  scaleLinear
} from 'd3-scale';

import {
  hierarchy,
  pack
} from 'd3-hierarchy';

// @returns object with the values
export const getScaleLinearValues = (domain, range, data, valueKey, titleKey) => {
    const linear = scaleLinear()
    .domain(domain)
    .range(range);

    return data.map(item => ({
        value: linear(item[valueKey]),
        title: item[titleKey]
    }));
};

export const getHierarchy = (data, key) => (hierarchy(data).sum(d => d[key]));

export const createPackLayout = (w = 0, h = 0, padding = 0, data) =>
  (pack().size([h, w]).padding(padding)(data));
