import createBubbleChartContainer from 'scripts/bubbles-chart-cont';

export default h => {

    const BubbleChartCont = createBubbleChartContainer(h);

  //  update


    return props => {
        return (h('div.container', [BubbleChartCont({})]));
    };
};
//  , [
//     BubbleChartCont(props)
// ]
