export default h =>
  ({
    viewBox = '0,0,0,0',
    nodes = []
  }) => (h('svg', {
      attrs: {
          viewBox
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
                fill: 'Black'
            }
        }),
        h('text', node.title)
    ])))
  ));
