/* eslint-env node */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { useBabelRc, override } = require('customize-cra')

// CSS loading order should be ignored, as we are using css modules.
// @doc https://github.com/facebook/create-react-app/issues/5372
const suppressCssOrderWarnings = () => (config) => {
  for (let i = 0; i < config.plugins.length; i++) {
    const p = config.plugins[i]
    if (p.constructor && p.constructor.name === MiniCssExtractPlugin.name) {
      config.plugins[i] = new MiniCssExtractPlugin({
        ignoreOrder: true,
        filename: "styles/[name].css"
      })
    }
  }
  return config
}

module.exports = override(
  // @doc http/material-ui.com/guides/minimizing-bundle-size/#option-2
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),
  suppressCssOrderWarnings(),
)
