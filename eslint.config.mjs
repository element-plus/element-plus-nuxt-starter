import withNuxt from './.nuxt/eslint.config.mjs'

// https://eslint.nuxt.com/packages/module
export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    }
  }
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
