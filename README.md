# Lang validator

The module `lang-validate` is a small module to check all iso languagecodes and regions.

## Installation

To install this package run:

```
npm i --save --save-exact lang-validate
```

## Implementate in your Project

To use it in your project:

```
'use strict';

const language = require('lang-validate');

.
.
.
```

### validate

```
language.validate('en-US'); // Returns true when it's valid - false when it's invalid
```

### getAll

```
language.getAll(); // Returns an array with all famous languagecodes and his names;
```

### getLanguage

```
language.getLanguage('de-DE'); // Returns the object of the named language. ex { code: 'de-DE', name: 'German (German)' }
```

## Default language

You can define a default language with this module. The default of the default language is `en`. You can change it with:

```
language.setDefault('de'); // The default Language is now `de`
```

```
language.getDefault(); // Returns `de`
```

## License

The MIT License (MIT)
Copyright (c) 2015 Werbasinnotec.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
