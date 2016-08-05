import test from 'tape';
import h from 'snabbdom/h';
import createBubbleChart from 'scripts/bubbles-chart-comp';

const before = test;
const after = test;

const BubbleChart = createBubbleChart(h);

const props = {
    viewBox: '0, 0, 300, 500',
    nodes: [{
        title: 'A',
        r: 9.580866083659831,
        x: 75.11046409135821,
        y: 64.63213029570262
    }]
};

before('desc: bubble chart component', t => {
    t.end();
});

test('should render correctly', t => {
    const actual = BubbleChart({}).sel,
        expect = 'svg#bubbles-chart';
    t.equal(actual, expect);
    t.end();
});

test('should have one <g> container for nodes', t => {
    const actual = BubbleChart(props).children.length,
        expect = 1;

    t.equal(actual, expect);
    t.end();
});


test('<g> container should have one children', t => {
    const actual = BubbleChart(props).children[0].children.length,
        expect = 1;

    t.equal(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
