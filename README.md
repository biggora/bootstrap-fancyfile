[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[Twitter Bootstrap Fancy File Plugin](http://plugins.upbootstrap.com/bootstrap-fancyfile/) 
============

Browsers do not let you style file inputs. Fancy File Plugin fixes this problem. It is written using JavaScript and jQuery. See [Fancy File Plugin demo](http://plugins.upbootstrap.com/bootstrap-fancyfile/).

How to Use
----------

Trigger the fancyfile via JavaScript
```javascript
    $('input.fancyfile').fancyfile(options);
```

Markup
-----------------

```html
    <input name="upload" type="file" data-toggle="fancyfile" data-style="btn-primary">
```

Options
-----------------

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-text=""</code>.


<table class="table table-bordered table-striped" style="width:100%">
<thead>
<tr>
<th style="width: 100px;">Name</th>
<th style="width: 100px;">type</th>
<th style="width: 50px;">default</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>boolean | string</td>
<td>Select File</td>
<td>insert text into the fancyfile button.</td>
</tr>
<tr>
<td>icon</td>
<td>boolean | string</td>
<td>icon-file</td>
<td>insert icon into the fancyfile button.</td>
</tr>
<tr>
<td>style</td>
<td>string</td>
<td></td>
<td>apply button style to the fancyfile button.</td>
</tr>
<tr>
<td>placeholder</td>
<td>boolean | string</td>
<td>Select File…</td>
<td>apply placeholder to the fancyfile fake input.</td>
</tr>
</tbody>
</table>

Required
-----------------
* Twitter Bootstrap 2.0+
* jQuery 1.7+

Installation
-----------------
#### Download [jQuery](http://docs.jquery.com/Downloading_jQuery)
* [Download the latest release](http://docs.jquery.com/Downloading_jQuery)
* [Clone in Windows](github-windows://openRepo/https://github.com/jquery/jquery)
* Clone the repo: `git clone git://github.com/jquery/jquery.git`.

#### Download [Bootstrap](https://github.com/twitter/bootstrap)
* [Download the latest release](https://github.com/twitter/bootstrap/zipball/master).
* [Clone in Windows](github-windows://openRepo/https://github.com/twitter/bootstrap)
* Clone the repo: `git clone git://github.com/twitter/bootstrap.git`.
* Install with Twitter's [Bower](http://twitter.github.com/bower): `bower install bootstrap`.

#### Download this plugin.
* [Download the latest release](https://github.com/biggora/bootstrap-fancyfile/zipball/master)
* [Clone in Windows](github-windows://openRepo/https://github.com/biggora/bootstrap-fancyfile)
* Clone the repo: `git clone git://github.com/biggora/bootstrap-fancyfile.git`
* Install with Bower: `bower install bs-fancyfile`

#### Include files in your HTML. The minimum required for this plugin are:

    <link href="/path/to/bootstrap.css" rel="stylesheet">
    <link href="/path/to/bootstrap-fancyfile.css" rel="stylesheet">
    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/bootstrap-fancyfile.js" type="text/javascript"></script>

### Recommend extensions

- [Bootstrap Ajax Typeahead Plugin](https://github.com/biggora/bootstrap-ajax-typeahead)
- [Bootstrap Select Plugin](https://github.com/biggora/bootstrap-select/)
- [TrinteJS - Javascrpt MVC Framework for Node.JS](http://www.trintejs.com/)
- [CaminteJS - Cross-db ORM for NodeJS](http://www.camintejs.com/)
- [MongoDB Session Storage for ExpressJS](https://github.com/biggora/express-mongodb)
- [Middleware exposing user-agent for NodeJS](https://github.com/biggora/express-useragent)
- [2CO NodeJS adapter for 2checkout API payment gateway](https://github.com/biggora/2co)


### Startups & Apps

- [TViMama](http://tvimama.com/)
- [GorkaTV](https://gorkatv.com/)


## Author

Aleksej Gordejev (aleksej@gordejev.lv).


## License

(The MIT License)

Copyright (c) 2012 Aleksej Gordejev <aleksej@gordejev.lv>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Resources

- Visit the [author website](http://www.gordejev.lv).
- Follow [@biggora](https://twitter.com/#!/biggora) on Twitter for updates.
- Report issues on the [github issues](https://github.com/biggora/bootstrap-fancyfile/issues) page.
