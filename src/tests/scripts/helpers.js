import test from 'tape';
import benv from 'benv';
import model from 'tests/fixtures/model';
import {
  getMinMaxValues,
  getContainerBoundingClientRect,
  getBubblesGroupPosX
} from 'scripts/helpers';

const before = test;
const after = test;

before('desc: helpers', t => {
    benv.setup(() => {
        window.document
      .querySelector('body')
      .innerHTML = `<div class="container">
                      <svg id="bubbles-chart">
                        <g id="bubbles-group-container"></g>
                      </svg>
                    </div>`;
        t.end();
    });
});

test('getMinMaxValues', t => {
    const data = model.data.children.map(item => item.year);
    const actual = getMinMaxValues(data),
        expect = [1998, 2016];
    t.deepEqual(actual, expect);
    t.end();
});

test('getContainerBoundingClientRect', t => {
    const actual = getContainerBoundingClientRect(),
        expect = {
            w: 0,
            h: 0
        };
    t.deepEqual(actual, expect);
    t.end();
});

test('getBubblesGroupPosX', t => {
    const actual = getBubblesGroupPosX(),
        expect = 0;
    t.equal(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    benv.teardown();
    t.end();
});
