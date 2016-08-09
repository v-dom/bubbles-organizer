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
                fill: node.fill
            }
        }),
        h('circle', {
            attrs: {
                cx: 0,
                cy: 0,
                r: node.r / 2,
                fill: 'none',
                'stroke-width': 5,
                stroke: 'Black'
            }
        }),
        h('text', {
            attrs: {
                dx: '-0.25em',
                dy: '0.2em'
            }
        }, node.title)
    ])))
  )]));
