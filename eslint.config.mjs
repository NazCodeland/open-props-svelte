// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
  vue: false,
  svelte: true,

  jsx: false,
  jsonc: false,
  yaml: false,
});
