# Satelize

<!-- [![NPM version](https://badge.fury.io/js/geno.png)](http://badge.fury.io/js/geno) -->
<!-- [![Dependency Status](https://gemnasium.com/gummesson/geno.png)](https://gemnasium.com/gummesson/geno)
[![Build Status](https://travis-ci.org/gummesson/geno.png?branch=master)](https://travis-ci.org/gummesson/geno) -->

**Geno** is a small and opinionated static site generator for easily generating a simple site for your [NPM](https://npmjs.org/) projects based on the project's `package.json` file.

## Why?

Because hand crafting a new site for each project can be quite tedious.

## Installation

~~~
npm install satelize
~~~

## Usage

Run the following in the root directory of your project:

~~~
geno
~~~

**BOOM!** Your project site has been generated.

### geno.json

Adding a `geno.json` in your project's root directory will enable you to add some additional information to your site:

~~~ json
{
  "title": "...",
  "introduction": "<p>...</p>",
  "installation": "<p>...</p>",
  "usage": "<p>...</p>",
  "output": "path/to/ouput",
  "template": "path/to/custom/template",
  "stylesheet": "path/to/custom/stylesheet",
  "javascript": "path/to/javascript/file",
  "docco": "path/to/docs",
  "endorse": true
}
~~~

- `title` is used for naming your module. For example, if you have a module registered as `node-my-module` but you want to call it `My Module` you can add your own value and easily change that. It'll otherwise default to the `name` in specified in the `package.json` file.
- `introduction` is a longer description field that can be used in favor of the `description` in the `package.json` file.
- `installation` is used for adding some additional installation instructions.
- `usage` is for adding notes about the basic usage.
- `output` is where the site will be generated. The default directory is `site`.
- `template` is used for using your own custom template file.
- `stylesheet` is used for using your own custom stylesheet file.
- `javascript` is for adding a JavaScript file to your site.
- `docco` is for simply linking to your [Docco](https://github.com/jashkenas/docco)-generated documentation.
- `endorse` adds a link to this repository in site's footer. It's turned off by default.

### Custom templates

[Nunjucks](https://github.com/jlongster/nunjucks) is used as the default templating engine.

## License

The MIT License (MIT)

Copyright (c) 2013 Ellen Gummesson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.