'use strict'

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-import-object', function(obj) {
    return function(root) {
        root.prepend({ selector: ':root' });
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var value = obj[prop];
                root.nodes[0].append({ prop, value });
            }
        }
        return root;
    }
})