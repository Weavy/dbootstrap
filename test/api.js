'use strict'
const TestRunner = require('test-runner')
const dbs = require('../')
const a = require('assert')

const runner = new TestRunner()

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

runner.test('dbs() returns correct data', function () {
  const result = dbs(fixture)
  a.ok(/is a class/.test(result))
})

runner.test('dbs({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  const result = dbs(fixture, options)
  a.ok(/is a class/.test(result))
})

runner.test('dbs.async() returns correct data', function () {
  return dbs.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

runner.test('dbs.async({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  return dbs.async(fixture, options).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})
