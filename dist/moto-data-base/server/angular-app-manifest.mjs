
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
    'index.csr.html': {size: 719, hash: '706ce934abb8b09348be3a0c44d01714e5fa4a45db6323d1f767ed6310bebe5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '9bd2814b9aac04bdf2c35aa48b2a0bcaec281f00a3b9a83a85cab91209635448', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6061, hash: '21161d9b510d1a5bc8e30522bf9ec892326a843bccc0443676d9c89daad6934b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'moto2/index.html': {size: 6092, hash: '192aa8b2340e14384de6dcc63ff2a06a960371608d2184040b5eb6d99f069454', text: () => import('./assets-chunks/moto2_index_html.mjs').then(m => m.default)},
    'moto3/index.html': {size: 6099, hash: 'fc678e356484f41f3d32559ab2a175cfa295520272a945dfd10f1020be14b3e0', text: () => import('./assets-chunks/moto3_index_html.mjs').then(m => m.default)},
    'styles-HADAENN7.css': {size: 102, hash: 'mDZC83XjiM8', text: () => import('./assets-chunks/styles-HADAENN7_css.mjs').then(m => m.default)}
  },
};
