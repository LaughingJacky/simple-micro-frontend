/**
 * @file main.app.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 21:09:10
 * @modify date 2020-03-27 21:09:10
 */
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './root.vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue',
        render: r => r(Hello)
    }
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
