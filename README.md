Twitter Bootstrap Fancy File Plugin
============

Browsers do not let you style file inputs. Fancy File Plugin fixes this problem. It is written using JavaScript and jQuery.

How to Use
----------

Trigger the fancyfile via JavaScript
```javascript
    $('input.fancyfile').fancyfile(options);
```

Markup
-----------------

```
    &lt;input name=&quot;uploadfile&quot; type=&quot;file&quot; data-toggle=&quot;fancyfile&quot; data-text=&quot;false&quot; class=&quot;input-xlarge btn-primary&quot;&gt;
```

Options
-----------------

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-text=""</code>.


                <table class="table table-bordered table-striped">
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
* [Download the latest release](https://github.com/biggora/bootstrap-ajax-typeahead/zipball/master)
* [Clone in Windows](github-windows://openRepo/https://github.com/biggora/bootstrap-ajax-typeahead)
* Clone the repo: `git clone git://github.com/biggora/bootstrap-ajax-typeahead.git`

#### Include files in your HTML. The minimum required for this plugin are:

    <link href="/path/to/bootstrap.css" rel="stylesheet">
    <script src="/path/to/jquery.js" type="text/javascript"></script>
    <script src="/path/to/bootstrap-typeahead.js" type="text/javascript"></script>

#### Execute the plugin:
```javascript
    $('input.typeahead').typeahead(options);
```


