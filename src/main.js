import * as components from "./components/index.js";

const install = (instance) => {
  for (let componentKey in components) {
      instance.use((components)[componentKey])
  }
}

export default install

export * from './components'
