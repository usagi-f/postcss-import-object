'use strict'

import test from 'ava';
import postcss from 'postcss';
import importObject from '..'

function run(t, input, output){
    return postcss([importObject({
            '--primary-color': 'red',
            '--font-family': 'Helvetica, sans'
        })])
        .process(input)
        .then(result => {
            t.true(result.css === output);
        })
}

test('postcss-import-object', t => {
    return run(t, 'a { color: red; }', ':root { --primary-color: red; --font-family: Helvetica, sans; }\na { color: red; }');
});