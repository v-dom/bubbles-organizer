import test from 'tape';
import {
  getScaleLinearValues,
  createPackLayout,
  getHierarchy
} from 'scripts/bubbles-chart-data';
import model from 'tests/fixtures/model';

const before = test;
const after = test;


before('desc: data for bubble chart', t => {
    t.end();
});

test('getScaleValues', t => {
    const domain = [1997, 2017],
        range = [0, 900],

        actual = getScaleLinearValues(domain, range, model.data.children, 'year'),
        expect = model.scaledValues;
    t.deepEqual(actual, expect);
    t.end();
});

test('getHierarchy', t => {
    const values = getHierarchy(model.data, 'year')
    .children
    .map(item => item.value),

        actual = values,
        expect = model.hierarchyChildrenResp;
    t.deepEqual(actual, expect);
    t.end();
});

test('createPackLayout', t => {
    const aux = Object.assign({}, {
        children: model.scaledValues
    });

    const radiuses = createPackLayout(100, 200, 1.5, getHierarchy(aux, 'value'))
    .children
    .map(item => item.r);

    const actual = radiuses,
        expect = model.packLayoutRadiuses;

    t.deepEqual(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
