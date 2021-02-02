import { PasswordComplexity } from "./components/passwords/passwords.js";

const components = {
  PasswordComplexity,
};

function install(app, options) {
  for (const component in components) {
    app.component(components[component].name, components[component]);
  }
}

export default { install };
export { PasswordComplexity } from "./components/passwords/passwords.js";
