/**
 * @file single-spa.config.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 13:12:17
 * @modify date 2020-03-27 13:12:17
 */
import {registerApplication, start} from 'single-spa';

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname.startsWith('/react')
);

registerApplication(
    'vue',
    () => import('./src/vue/main.app.js'),
    () => location.pathname.startsWith('/vue')
);

registerApplication(
    'svelte',
    () => import('./src/svelte/main.app.js'),
    () => location.pathname.startsWith('/svelte')
);

registerApplication(
    'inferno',
    () => import('./src/inferno/main.app.js'),
    () => location.pathname.startsWith('/inferno')
);

registerApplication(
    'riot',
    () => import('./src/riot/main.app.js'),
    () => location.pathname.startsWith('/riot')
);

start();
