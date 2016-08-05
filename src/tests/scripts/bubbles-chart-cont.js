import test from 'tape';
import h from 'snabbdom/h';
import mock from 'mock';
import model from 'tests/fixtures/model';

const createBubbleChartCont = mock('scripts/bubbles-chart-cont', {
    'scripts/bubbles-chart-comp': () => () => (h('div')),
    'scripts/helpers': {
        getContainerBoundingClientRect: () => ({
            w: 100,
            h: 100
        })
    }
}, require).default;

const before = test;
const after = test;

const bubbleChartCont = createBubbleChartCont(h);

const props = {
    nodes: [{
        r: 12,
        x: 20,
        y: 40,
        data: {
            title: 'A'
        }
    }],
    viewBox: '0,0,100,200'
};

before('desc: bubble chart container', t => {
    t.end();
});

test('should render correctly', t => {
    const actual = bubbleChartCont(props).sel,
        expect = 'div';
    t.equal(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
