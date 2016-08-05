import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

import {
  getContainerBoundingClientRect,
  getMinMaxValues
} from 'scripts/helpers';

import {
  getScaleLinearValues,
  createPackLayout,
  getHierarchy
} from 'scripts/bubbles-chart-data';

import createApp from 'scripts/app';

const patch = snabbdom.init([
    require('snabbdom/modules/props'),
    require('snabbdom/modules/attributes')
]);

const App = createApp(h);

const data = {
    children: [{
        label: 'B',
        year: 2005
    }, {
        label: 'E',
        year: 2013
    }, {
        label: 'A',
        year: 2002
    }, {
        label: 'D',
        year: 1999
    }, {
        label: 'F',
        year: 2007
    }, {
        label: 'C',
        year: 2016
    }, {
        label: 'G',
        year: 2010
    }, {
        label: 'I',
        year: 1998
    }, {
        label: 'J',
        year: 2003
    }]
};

let oldVnode = document.querySelector('#root');

const bubblesData = () => {

    const values = data.children.map(item => item.year),

        domain = getMinMaxValues(values).map((item, idx) => idx === 0 ? item - 1 : item + 1),

        containerDimensions = getContainerBoundingClientRect(),

        dimensions = Math.min(containerDimensions.w, containerDimensions.h),

        range = [0, dimensions],

        hierarchy = getHierarchy({
            children: getScaleLinearValues(domain, range, data.children, 'year', 'label')
        }, 'value'),

        padding = 1.5,

        packLayout = createPackLayout(dimensions, dimensions, padding, hierarchy);

    return packLayout;
};

const render = () => {
    const containerDimensions = getContainerBoundingClientRect(),
        newVnode = App({
            viewBox: `0, 0, ${containerDimensions.w},  ${containerDimensions.h}`,
            nodes: bubblesData(data).children
        });

    oldVnode = patch(oldVnode, newVnode);
};

window.addEventListener('DOMContentLoaded', () => {
    oldVnode = patch(oldVnode, App({}));
    render();
});
