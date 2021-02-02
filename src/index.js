import { TagInput } from "./components/tags/tags.js";
import { PasswordComplexity } from "./components/passwords/passwords.js";

const components = {
  TagInput,
  PasswordComplexity,
};

function install(app, options) {
  for (const component in components) {
    app.component(components[component].name, components[component]);
  }
}

export default { install };
export { TagInput } from "./components/tags/tags.js";
export { PasswordComplexity } from "./components/passwords/passwords.js";
