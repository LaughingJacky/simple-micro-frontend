/**
 * @file main.app.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 15:47:13
 * @modify date 2020-03-27 15:47:13
 */
import singleSpaSvelte from 'single-spa-svelte';
import myRootSvelteComponent from './root.svelte';

const svelteLifecycles = singleSpaSvelte({
    component: myRootSvelteComponent,
    domElementGetter: () => document.getElementById('svelte'),
    props: {
        name: 'svelte'
    }
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
