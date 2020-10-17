const babel = require('@rollup/plugin-babel')
const uglify = require('rollup-plugin-uglify')

module.exports = (config) => {
  return {
    input: {
      input: 'src/index.js'
    },
    output: {
      file: 'dayjs-dynamic-locale.min.js'
    },
    plugins: [
      babel.babel(),
      uglify.uglify()
    ]
  }
}
