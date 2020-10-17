const rollup = require('rollup')
const configFactory = require('./config')
const fs = require('fs')
const util = require('util')
const path = require('path')

const {
  ncp
} = require('ncp')

const {
  promisify
} = util

const promisifyReadDir = promisify(fs.readdir)
const promisifyReadFile = promisify(fs.readFile)
const promisifyWriteFile = promisify(fs.writeFile)

async function build(option) {
  const bundle = await rollup.rollup({...option.input})
  await bundle.write({...option.output})
}

(async () => {
  try {
    build(configFactory())

    await promisify(ncp)('./types/', './')
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
  }
})()
