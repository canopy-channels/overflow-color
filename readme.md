# Overflow color

Javascript script that automatically switch css html background color on smartphones.

Try it on your smartphone : [git.io/overflow](https://dimitrinicolas.github.io/overflow-color/) ([https://dimitrinicolas.github.io/overflow-color/](https://dimitrinicolas.github.io/overflow-color/))

![Demo](gif.gif)

This package is on npm
```console
$ npm install --save overflow-color
```

## Usage

You simply must add the script and two attributes to your body tag

```html
<body data-oc-top="red" data-oc-bottom="blue">
    <!-- ... -->
    <script src="overflow-color.min.js"></script>
</body>
```

## CSS tricks
#### Behind the Scenes

This library will wrap all the body content inside a `<div data-oc-wrap>`.
Then it set to the wrapper the same background as the body, and set body's background to `transparent`.

when the document is loaded:
```html
<head>
    <!-- ... -->
    <style>
        body {
            background: lightgrey;
        }
    </style>
</head>
<body data-oc-top="red" data-oc-bottom="blue" style="background: transparent;">
    <div data-oc-wrap style="background: lightgrey;">
        <!-- ... -->
        <script src="overflow-color.min.js"></script>
    </div>
</body>
```

## Build

Minify script
```console
$ npm run build
```

## [License](LICENSE.txt)
