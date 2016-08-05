export default h =>
  ({
    viewBox = '0,0,0,0',
    nodes = [],
    nodesContXPos = 0
  }) => (h('svg#bubbles-chart', {
      attrs: {
          viewBox
      }
  }, [h('g#bubbles-group-container', {
      attrs: {
          transform: `translate(${nodesContXPos}, 0)`
      }
  },
    nodes.map((node, idx) => (h('g', {
        key: `node_${idx}`,
        attrs: {
            transform: `translate(${node.x}, ${node.y})`
        }
    }, [
        h('circle', {
            attrs: {
                cx: 0,
                cy: 0,
                r: node.r,
                fill: 'antiquewhite'
            }
        }),
        h('text', node.title)
    ])))
  )]));
