
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
    'index.csr.html': {size: 719, hash: '0f8349e6e9b0d4a4d61a28819429bf2acd2e5af37ff753363c3f33896249ddd6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: 'bf5281db9c495ab5c2393e9e3152fbbbfc1eaaf04b8150e502dc06ee9d772ba4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'moto2/index.html': {size: 6092, hash: '96150e46f97fe2bf58f91f50a4eda4b40db86f655cfadf003268d80430d905a0', text: () => import('./assets-chunks/moto2_index_html.mjs').then(m => m.default)},
    'moto3/index.html': {size: 6099, hash: 'bb78e767a0eb49969f81f5065d6728f4dc363f220ada767671c5dfb70a5ba403', text: () => import('./assets-chunks/moto3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6061, hash: 'c81cef7e6749e4654144fc438e77926b8dce589802afd1d1ed7f7e09bfaf8b1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HADAENN7.css': {size: 102, hash: 'mDZC83XjiM8', text: () => import('./assets-chunks/styles-HADAENN7_css.mjs').then(m => m.default)}
  },
};
