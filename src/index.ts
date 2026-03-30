import { Plugin, Rule } from 'postcss'

export type PluginOptions = Record<string, string>

function postcssImportObject(opts: PluginOptions = {}): Plugin {
  return {
    postcssPlugin: 'postcss-import-object',
    Once(root) {
      const rule = new Rule({ selector: ':root' })
      for (const [prop, value] of Object.entries(opts)) {
        rule.append({ prop, value })
      }
      root.prepend(rule)
    }
  }
}

postcssImportObject.postcss = true

export default postcssImportObject
