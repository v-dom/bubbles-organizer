import test from 'tape';
import h from 'snabbdom/h';
import mock from 'mock';
import model from 'tests/fixtures/model';

const createBubbleChartCont = mock('scripts/bubbles-chart-cont', {
    'scripts/bubbles-chart-comp': () => () => (h('div')),
    'scripts/helpers': {
        getViewBox: () => ''
    }
}, require).default;

const before = test;
const after = test;

const bubbleChartCont = createBubbleChartCont(h);

const props = {
    data: model.data,
    key: 'year'
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
