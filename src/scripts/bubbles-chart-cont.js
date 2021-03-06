import createBubbleChart from 'scripts/bubbles-chart-comp';

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
            title: item.data.title,
            fill: item.data.fill,
            innerCircle: item.data.inner
        }))
      };

      return BubbleChart(props);
  };
