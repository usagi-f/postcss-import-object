'use strict'

import test from 'ava';
import postcss from 'postcss';
import importObject from '..'

function run(t, input, output, object){
    return postcss([importObject(object)])
        .process(input)
        .then(result => {
            t.true(result.css === output);
        })
}

test('single object', t => {
    const input = 'a { color: red; }';
    const object = {
        '--primary-color': 'red',
    };
    const output = ':root { --primary-color: red; }\na { color: red; }';
    return run(t, input, output, object);
});

test('multiple object', t => {
    const input = 'a { color: red; }';
    const object = {
        '--primary-color': 'red',
        '--font-family': 'Helvetica, sans',
        '--base-size': '14px'
    };
    const output = ':root { --primary-color: red; --font-family: Helvetica, sans; --base-size: 14px; }\na { color: red; }';
    return run(t, input, output, object);
});