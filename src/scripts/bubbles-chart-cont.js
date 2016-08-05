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
    viewBox = '0,0,0,0',
    nodes = []
  }) => {
      const BubbleChart = createBubbleChart(h);
      const props = {
          viewBox: viewBox,
          nodes: nodes.map(item =>
        ({
            r: item.r,
            x: item.x,
            y: item.y,
            title: item.data.title
        }))
      };

      return BubbleChart(props);
  };
