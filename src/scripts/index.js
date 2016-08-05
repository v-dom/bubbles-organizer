import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

import App from 'scripts/app';

const patch = snabbdom.init([
    require('snabbdom/modules/props'),
    require('snabbdom/modules/eventlisteners')
]);

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

const render = () => {

    let oldVnode = document.querySelector('#root'),
        newVnode = App(h)({
            oldVnode,
            patch,
            data
        });

    oldVnode = patch(oldVnode, newVnode);
};

render();
