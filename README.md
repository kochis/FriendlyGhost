# FriendlyGhost

A customized version of the default theme for [Ghost](http://github.com/tryghost/ghost/).

> To download, visit the [releases](https://github.com/kochis/FriendlyGhost/releases) page.

## Installation

Place the contents of this repo in the `content/themes` directory of your ghost blog. 

You can do this either by cloning the repository directly

From your ghost root folder:

    cd content/themes
    git clone git@github.com:kochis/FriendlyGhost.git


Or by downloading and extracting the contents from [releases](https://github.com/kochis/FriendlyGhost/releases)


## Setup

### About Page
This theme expects there to be an `about` static page. Create a new post with the title `about`, and check `Turn this post into a static page` in the post settings before publishing.

### Snytax Highlighting
This theme makes use of the [prismjs](http://prismjs.com/) library for syntax highlighting. If you want highlighting for a specific language, add that langauge (all lowercase) as tag for that post. As of right now, only once language can be used per post. (Ghost default styling will be used for code blocks if no tag is given)


## Copyright & License

Copyright (c) 2014 Craig Kochis - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
