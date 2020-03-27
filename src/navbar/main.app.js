/**
 * @file index.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 22:50:30
 * @modify date 2020-03-27 22:50:30
 */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './root.component.js';

console.log(rootComponent);

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

function domElementGetter() {
    return document.getElementById('navbar');
}
