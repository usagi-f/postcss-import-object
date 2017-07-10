# postcss-import-object

If you pass an object as an argument, a new ROOT selector will be created and injected into it.

This makes it possible to manage variables with JavaScript when using CSS Variables.

For example Immutable.js makes it easier to inject external objects into the CSS.

## Installation

```bash
npm install postcss-import-object --save-dev
```

```bash
yarn add postcss-import-object --dev
```

## Usage

```javascript
var importObject = require('postcss-import-object')

postcss([importObject({
        '--foo': 'bar',
        '--baz': 'foobar'
    })])
    .process(input)
    .then(result => {
        // argument object is injected into a :root.
        // :root {
        //     --foo: bar;
        //     --baz: foobar;
        // }
    })
```

## License

MIT