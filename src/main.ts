import { createApp } from 'vue';
import App from './App.vue';
import { setupAssets } from './plugins';
import { setupStore } from './store';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  // Config store
  setupStore(app);

  // mount app
  app.mount('#app');
}

setupApp();
