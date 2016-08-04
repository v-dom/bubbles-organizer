import {
  scaleLinear
} from 'd3-scale';

export const getScaleLinearValues = (domain, range, data) => {
    const linear = scaleLinear()
    .domain(domain)
    .range(range);

    return data.map(item => linear(item.year));
};
