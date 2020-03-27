/**
 * @file main.app.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 21:22:22
 * @modify date 2020-03-27 21:22:22
 */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

function domElementGetter() {
    return document.getElementById('react');
}

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
