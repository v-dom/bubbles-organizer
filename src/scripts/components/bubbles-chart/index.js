export default h =>
  ({
    viewBox,
    elmWasInserted
  }) => h('svg', {
      hook: {
          insert: elmWasInserted
      },
      props: {
          viewBox: viewBox
      }
  });
