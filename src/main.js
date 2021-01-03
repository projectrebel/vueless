// import { createApp } from 'vue';
import * as components from "./components";

const Vueless = {
  install(app, options = {}) {
    Object.keys(components).forEach((component) => {
      app.component(component.name, component);
    });

    app.provide("vueless", options);
  },
};

export default Vueless;
