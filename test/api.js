const Tom = require('test-runner').Tom
const dbootstrap = require('../')
const a = require('assert')

const tom = module.exports = new Tom('api')

const fixture = [{
  id: 'someclass',
  longname: 'someclass',
  name: 'someclass',
  kind: 'class',
  description: 'is a class'
}]

tom.test('dbootstrap() returns correct data', function () {
  const result = dbootstrap(fixture)
  a.ok(/is a class/.test(result))
})

tom.test('dbootstrap() again to exercise the cache', function () {
  const result = dbootstrap(fixture)
  a.ok(/is a class/.test(result))
})

tom.test('dbootstrap({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  const result = dbootstrap(fixture, options)
  a.ok(/is a class/.test(result))
})

tom.test('dbootstrap.async() returns correct data', function () {
  return dbootstrap.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

tom.test('dbootstrap.async() again to exercise the cache', function () {
  return dbootstrap.async(fixture).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})

tom.test('dbootstrap.async({ noCache }) returns correct data', function () {
  const options = { noCache: true }
  return dbootstrap.async(fixture, options).then(function (result) {
    a.ok(/is a class/.test(result))
  })
})
