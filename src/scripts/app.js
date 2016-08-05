import createBubbleChartContainer from 'scripts/bubbles-chart-cont';

export default h => {

    const BubbleChartCont = createBubbleChartContainer(h);

    return props => {
        return (h('div.container', [
            BubbleChartCont(props)
        ]));
    };
};
