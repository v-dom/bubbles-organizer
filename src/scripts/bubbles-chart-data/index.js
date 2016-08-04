import {
  scaleLinear
} from 'd3-scale';

// @returns object with the values
export const getScaleLinearValues = (domain, range, data, key) => {
    const linear = scaleLinear()
    .domain(domain)
    .range(range);

    return data.map(item => ({
        value: linear(item[key])
    }));

};
