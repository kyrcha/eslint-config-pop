module.exports = {
    "extends": ["eslint:recommended", "standard", "airbnb", "prettier"],
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "plugins": ["prettier", "flowtype", "import"],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "parser": ["babel-eslint"],
    "rules": {
        "no-underscore-dangle": 0,
        "no-console": "off",
        "no-trailing-spaces": "error",
        "no-caller": "error",
        "eol-last": 2,
        "no-undef": 2,
        "no-unreachable": 2,
        "no-eval": 2,
        "no-dupe-keys": 2,
        "no-extend-native": 2,
        "no-plusplus": 0,
        "no-with": 2,
        "no-new-func": 2,
        "no-extra-bind": 2,
        "no-self-compare": 2,
        "no-octal-escape": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "space-infix-ops": 2,
        "no-fallthrough": 2,
        "no-shadow-restricted-names": 2,
        "no-proto": 2,
        "no-new-wrappers": 2,
        "no-multi-str": 2,
        "no-loop-func": 2,
        "no-sequences": 2,
        "no-ex-assign": 2,
        "valid-typeof": 2,
        "no-irregular-whitespace": 2,
        "no-new": 2,
        "no-octal": 2,
        "no-use-before-define": 0,
        "radix": 2,
        "no-redeclare": 2,
        "no-native-reassign": 2,
        "no-invalid-regexp": 2,
        "no-func-assign": 2,
        "no-duplicate-case": 2,
        "strict": 0,
        "no-lone-blocks": 2,
        "no-obj-calls": 2,
        "guard-for-in": 2,
        "no-throw-literal": 2,
        "no-spaced-func": 2,
        "no-iterator": 2,
        "use-isnan": 2,
        "no-dupe-args": 2,
        "eqeqeq": 2,
        "comma-dangle": 0,
        "no-extra-semi": 2,
        "no-sparse-arrays": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-shadow": 0,
        "no-new-object": 2,
        "new-parens": 2,
        "no-unused-expressions": 0,
        "no-script-url": 2,
        "no-return-assign": 2,
        "no-undef-init": 2,
        "func-names": 0,
        "no-label-var": 2,
        "new-cap": 0,
        "no-const-assign": 2,
        "no-var": 2,
        "no-negated-in-lhs": 2,
        "camelcase": 0
    }

}