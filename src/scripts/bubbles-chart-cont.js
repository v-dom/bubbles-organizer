import createBubbleChart from 'scripts/bubbles-chart-comp';
import {
  getContainerBoundingClientRect,
  getMinMaxValues,
  getViewBox
} from 'scripts/helpers';
import {
  getScaleLinearValues,
  createPackLayout,
  getHierarchy
} from 'scripts/bubbles-chart-data';

export default h =>
  ({
    data,
    key,
    oldVnode,
    patch
  }) => {
      const BubbleChart = createBubbleChart(h);

      const insertElmListener = () => {

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
              packLayout = createPackLayout(dimensions, dimensions, padding, hierarchy),

              newVnode = BubbleChart({
                  viewBox: getViewBox(),
                  nodes: packLayout
              });

          patch(oldVnode, newVnode);
      };

      return BubbleChart({
          viewBox: getViewBox(),
          elmWasInserted: insertElmListener
      });
  };
