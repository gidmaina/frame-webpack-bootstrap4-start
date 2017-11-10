// import all images
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./images/', true));

import './js/main.js';
import './sass/app.scss';