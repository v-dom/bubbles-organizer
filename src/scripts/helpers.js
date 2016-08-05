export const getMinMaxValues = data => [
  (data.reduce((acc, val) => Math.min(acc, val))),
  (data.reduce((acc, val) => Math.max(acc, val)))
];

export const getContainerBoundingClientRect = () => {
    const clientRec = window.document.querySelector('.container')
    .getBoundingClientRect();
    return {
        w: clientRec.width,
        h: clientRec.height
    };
};
