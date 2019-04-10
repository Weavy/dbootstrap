# dbootstrap
dbootstrap (document with bootstrap) is an output template for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into html API documentation with bootstrap components.

For more documentation see the [jsdoc2md wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki).

## Synopsis

To give the most basic example, this input data:
```js
const templateData = [
  {
    id: "fatUse",
    name: "fatUse",
    kind: "member",
    description: "I am a global variable",
    scope: "global"
  }
]
```

run through this command:
```js
const dbootstrap = require('dbootstrap')
dbootstrap(templateData)
```

~~produces this html output:~~
```
<a name="fatUse"></a>
## fatUse
I am a global variable

**Kind**: global variable
```
