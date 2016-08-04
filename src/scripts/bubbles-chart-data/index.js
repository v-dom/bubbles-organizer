import {
  scaleLinear
} from 'd3-scale';

export const getScaleLinearValues = (domain, range, data, key) => {
    const linear = scaleLinear()
    .domain(domain)
    .range(range);

    return {
        children: data.map(item => ({
            value: linear(item[key])
        }))
    };
};
