# eslint-config-goodparts
An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript the Good Parts](https://github.com/dwyl/goodparts)

## *Why?*

Using JavaScript "The Good Parts" (abbreviated to "goodparts") is the best way we know 
how to write simple, consistent, predictable and 100% cross-browser-compatible JavaScript code.

## *What?*

Shareable Config with which you can extend in current ESLint to follow goodparts.

## *How?*

After this is published to public `npm`.

you will need to first:

```
$ npm install eslint-config-goodparts --save
```

you can then extend `.eslintrc` file with `goodparts` to use it, like:

```
{
  "extends": [
    "goodparts"
  ]
}
```
