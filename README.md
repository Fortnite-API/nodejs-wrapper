<a href="https://github.com/Fortnite-API/nodejs-wrapper"><img align="left" src="https://fortnite-api.com/assets/img/logo.png" height=128 width=128 /></a>

[![CI Status](https://github.com/Fortnite-API/nodejs-wrapper/actions/workflows/ci.yml/badge.svg)](https://github.com/Fortnite-API/nodejs-wrapper/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/fnapicom.svg)](https://npmjs.com/package/fnapicom)
[![NPM Downloads](https://img.shields.io/npm/dm/fnapicom.svg)](https://npmjs.com/package/fnapicom)
[![MIT License](https://img.shields.io/npm/l/fnapicom.svg)](https://github.com/Fortnite-API/nodejs-wrapper/blob/master/LICENSE)
[![Discord Server](https://discord.com/api/guilds/621452110558527502/widget.png)](https://discord.gg/hGzW8gSMCa)

A JavaScript / TypeScript wrapper for [Fortnite-API.com](https://fortnite-api.com/)

Note: This is the NodeJS version. You can find the browser version [here](https://github.com/Fortnite-API/nodejs-wrapper/tree/web)

<br />
<hr />

<h2>Installation</h2>

```
npm install fnapicom
```

<h2>Usage example</h2>
 
```javascript
const { Client, Language } = require('fnapicom');

const client = new Client({
  language: Language.English,
  apiKey: 'your-api-key',
});

client.aesKeys()
  .then(console.log);
```

<h2>Links</h2>

- [NPM](https://npmjs.com/package/fnapicom)
- [Docs](https://dash.fortnite-api.com/)
- [Discord](https://discord.gg/hGzW8gSMCa)

<h2>License</h2>
MIT License

Copyright (c) 2022 Nils S.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
