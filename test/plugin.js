'use strict'
const TestRunner = require('test-runner')
const dbs = require('../')
const path = require('path')
const a = require('assert')

const runner = new TestRunner()

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

runner.test('plugin', function () {
  const result = dbs(fixture, { plugin: 'dmd-plugin-example' })
  a.ok(/documentation generated on/.test(result))
})

runner.test('plugin: absolute path', function () {
  const result = dbs(fixture, { plugin: path.resolve(__dirname, 'fixture', 'dmd-plugin-example', 'lib', 'dmd-plugin-example.js') })
  a.ok(/documentation generated on/.test(result))
})

runner.test('plugin: none-existent path', function () {
  a.throws(function () {
    dbs(fixture, { plugin: 'forejfirweuhnvkljne' })
  })
})
