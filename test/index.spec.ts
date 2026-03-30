import { describe, it, expect } from 'vitest'
import postcss from 'postcss'
import importObject from '../src/index'

async function run(input: string, output: string, opts: Record<string, string>) {
  const result = await postcss([importObject(opts)]).process(input, { from: undefined })
  return result.css === output
}

describe('postcss-import-object', () => {
  it('single object', async () => {
    expect(await run(
      'a { color: red; }',
      ':root { --primary-color: red; }\na { color: red; }',
      { '--primary-color': 'red' }
    )).toBe(true)
  })

  it('multiple object', async () => {
    expect(await run(
      'a { color: red; }',
      ':root { --primary-color: red; --font-family: sans-serif; --base-size: 14px; }\na { color: red; }',
      {
        '--primary-color': 'red',
        '--font-family': 'sans-serif',
        '--base-size': '14px',
      }
    )).toBe(true)
  })
})
