/**
 * @file main.app.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 21:13:57
 * @modify date 2020-03-27 21:13:57
 */
import * as Riot from 'riot';
import singleSpaRiot from 'single-spa-riot';
import App from './root.riot';

const riotLifecycles = singleSpaRiot({
    rootComponent: Riot.component(App),
    domElementGetter: () => document.getElementById('riot')
});
export const bootstrap = riotLifecycles.bootstrap;
export const mount = riotLifecycles.mount;
export const unmount = riotLifecycles.unmount;
