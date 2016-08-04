export default h =>
  ({
    viewBox,
    elmWasInserted,
    nodes = []
  }) => (h('svg', {
      hook: {
          insert: elmWasInserted
      },
      props: {
          viewBox: viewBox
      }
  },
    nodes.map((node, idx) => (h('g', {
        key: `node_${idx}`,
        props: {
            transform: `translate(${node.x}, ${node.y})`
        }
    }, [
        h('circle', {
            props: {
                cx: 0,
                cy: 0,
                r: node.r,
                fill: 'Black'
            }
        }),
        h('text', node.title)
    ])))
  ));
