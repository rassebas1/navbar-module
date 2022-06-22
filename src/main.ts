import './set-public-path';
import { h, createApp } from 'vue';
import singleSpaVue from"single-spa-vue";
import router from './router/index';
import App from './App.vue';
import  store  from './store/index';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App,{
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          
        },
      });
    },
  },
  handleInstance: (app) => {
    app.use(router);
    app.use(store);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;