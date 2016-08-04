import test from 'tape';
import {
  getScaleLinearValues
} from 'scripts/bubbles-chart-data';
import model from 'tests/fixtures/model';

const before = test;
const after = test;


before('desc: data for bubble chart', t => {
    t.end();
});

test('getScaleValues', t => {

    const domain = [1997, 2017],
        range = [0, 900];

    const actual = getScaleLinearValues(domain, range, model.data.children, 'year'),
        expect = model.scaledValues;
    t.deepEqual(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
