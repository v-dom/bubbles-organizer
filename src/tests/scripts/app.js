import test from 'tape';
import h from 'snabbdom/h';
import mock from 'mock';

const createApp = mock('scripts/app', {
    'scripts/bubbles-chart-cont': () => () => (h('div'))
}, require).default;

const before = test;
const after = test;

const App = createApp(h);

before('desc: App', t => {
    t.end();
});

test('should render correctly', t => {
    const actual = App().sel,
        expect = 'div.container';
    t.equal(actual, expect);
    t.end();
});

test('should have 1 children', t => {
    const actual = App().children.length,
        expect = 1;
    t.equal(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
