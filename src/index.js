import { PasswordComplexity } from "./components/passwords/passwords.js";

const components = {
  PasswordComplexity,
};

export function install(app, options) {
  for (const component in components) {
    app.component(components[component].name, components[component]);
  }
}

export { PasswordComplexity } from "./components/passwords/passwords.js";
