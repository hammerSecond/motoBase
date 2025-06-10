
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/moto2"
  },
  {
    "renderMode": 2,
    "route": "/moto3"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 719, hash: '1fc7b8b3f65da527d04999f36687e69e246533c1116bd98d518fada817189980', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '20087d1edcd79ef2b6c7537ff88b11295fce11b3f1f91cf781b9f03a0c7b0df2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'moto2/index.html': {size: 6092, hash: '4391f2a091b30bf42643b9bc79524d595d3f211bafa74136697b6dfe549007f9', text: () => import('./assets-chunks/moto2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6061, hash: '8d908882fb9f2b27275f0620ac665824a1b745e0209ebfb483cede589d269f3e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'moto3/index.html': {size: 6099, hash: '136d5fe72056323f3de9fa7e825b06bf70da791ed34d90c60364c639e6adeaad', text: () => import('./assets-chunks/moto3_index_html.mjs').then(m => m.default)},
    'styles-HADAENN7.css': {size: 102, hash: 'mDZC83XjiM8', text: () => import('./assets-chunks/styles-HADAENN7_css.mjs').then(m => m.default)}
  },
};
