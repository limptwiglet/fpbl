const sveltePreprocess = require("svelte-preprocess")

module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        require('postcss-nested'),
        require('postcss-easy-import'),
        require('postcss-custom-selectors'),
        require('postcss-custom-media'),
      ]
    }
  })
}
