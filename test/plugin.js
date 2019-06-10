const Tom = require('test-runner').Tom
const dbootstrap = require('../')
const path = require('path')
const a = require('assert')

const tom = module.exports = new Tom('plugin')

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

tom.test('plugin: simple', function () {
  const result = dbootstrap(fixture, { plugin: 'dmd-plugin-example' })
  a.ok(/documentation generated on/.test(result))
})

tom.test('plugin: absolute path', function () {
  const result = dbootstrap(fixture, { plugin: path.resolve(__dirname, 'fixture', 'dmd-plugin-example', 'lib', 'dmd-plugin-example.js') })
  a.ok(/documentation generated on/.test(result))
})

tom.test('plugin: none-existent path', function () {
  a.throws(function () {
    dbootstrap(fixture, { plugin: 'forejfirweuhnvkljne' })
  })
})
