/* import './lib/app.css'; */
// import App from './lib/App.svelte';
import App from './lib/imports_App.svelte'; /* <=: DEV_NOTE # test as a lib */

const app = new App({

  target: document.getElementById('app'),

})

export default app
