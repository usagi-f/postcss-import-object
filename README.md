# postcss-import-object

A [PostCSS](https://github.com/postcss/postcss) plugin that injects a JavaScript object as CSS custom properties into the `:root` selector.

This makes it possible to manage variables with JavaScript when using CSS Variables.

## Installation

```bash
npm install postcss-import-object --save-dev
```

## Usage

```typescript
import postcss from 'postcss'
import importObject from 'postcss-import-object'

postcss([importObject({
    '--foo': 'bar',
    '--baz': 'foobar'
})])
    .process(input, { from: undefined })
    .then(result => {
        // The argument object is injected into :root.
        // :root {
        //     --foo: bar;
        //     --baz: foobar;
        // }
    })
```

## License

MIT
