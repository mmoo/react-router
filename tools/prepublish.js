const fs = require('fs')
const path = require('path')
const config = require('../package.json')
let version = config.version.split('.')

if (process.env.TRAVIS_BUILD_NUMBER) {
  version[version.length - 1] = process.env.TRAVIS_BUILD_NUMBER
}

config.version = version.join('.')
fs.writeFileSync(path.join(__dirname, '..', 'package.json'), JSON.stringify(config, false, '  '))

process.stdout.write(`v${version.join('.')}`)
