export default h =>
  ({
    viewBox = '0,0,0,0',
    nodes = []
  }) => (h('svg#bubbles-chart', {
      attrs: {
          viewBox
      }
  }, [h('g#bubbles-group-container',
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
                r: node.r / 2.5,
                fill: node.innerCircle,
                'stroke-width': 2.5,
                stroke: 'White'
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
