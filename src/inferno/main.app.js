/**
 * @file main.app.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 13:01:10
 * @modify date 2020-03-27 13:01:10
 */
import {render} from 'inferno';
import singleSpaInferno from 'single-spa-inferno';
import {createElement} from 'inferno-create-element';

import rootComponent from './root.component.js';

const infernoLifecycles = singleSpaInferno({
    Inferno: {
        render
    },
    createElement,
    rootComponent,
    domElementGetter: () => document.getElementById('inferno')
});

export const bootstrap = infernoLifecycles.bootstrap;
export const mount = infernoLifecycles.mount;
export const unmount = infernoLifecycles.unmount;
