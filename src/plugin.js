import * as Vueless from "./index.js";

export function install(app, options) {
  for (const component in Vueless) {
    app.component(Vueless[component].name, Vueless[component]);
  }
}

export default { install };
