import createBubbleChart from 'scripts/bubbles-chart-comp';
import {
  getContainerBoundingClientRect,
  getMinMaxValues
} from 'scripts/helpers';
import {
  getScaleLinearValues,
  createPackLayout,
  getHierarchy
} from 'scripts/bubbles-chart-data';

export default h =>
  ({
    data = {
        children: []
    },
    key = '',
    update = () => {}
  }) => {
      const BubbleChart = createBubbleChart(h);

      const insertElmListener = () => {

          if (data.children.length === 0) {
              throw new Error('no data');
          }

          const values = data.children.map(item => item[key]),

              domain = getMinMaxValues(values).map(item => {
                  let sum = -1;
                  item += sum;
                  sum = 1;
                  return item;
              }),

              containerDimensions = getContainerBoundingClientRect(),
              dimensions = Math.min(containerDimensions.w, containerDimensions.h),
              range = [0, dimensions],

              hierarchy = getHierarchy({
                  children: getScaleLinearValues(domain, range, data.children, key)
              }, 'value'),

              padding = 1.5,
              packLayout = createPackLayout(dimensions, dimensions, padding, hierarchy);

          update(BubbleChart({
              viewBox: `0, 0, ${containerDimensions.w},  ${containerDimensions.h}`,
              nodes: packLayout
          }));
      };

      return BubbleChart({
          viewBox: '0, 0, 0, 0',
          elmWasInserted: insertElmListener,
          data: data
      });
  };
