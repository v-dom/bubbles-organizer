import createBubbleChart from 'scripts/bubbles-chart-comp';

export default h =>
  ({
    viewBox = '0,0,0,0',
    nodes = [],
    nodesContXPos
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
        })),
          nodesContXPos
      };

      return BubbleChart(props);
  };
