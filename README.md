<div align="center">
<a href="https://npmjs.com/package/fortnite-api-com"><img src="https://img.shields.io/npm/v/fortnite-api-com.svg?style=flat-square"/></a>
<a href="https://discord.gg/AqzEcMm" target="_blank"><img src="https://img.shields.io/badge/dynamic/json.svg?style=flat-square&label=Join%20Fortnite-API&colorB=7289DA&url=https://discordapp.com/api/servers/445203868624748555/embed.json&query=$.members.length&suffix=%20Members%20online&logo=discord" alt="Join Fortnite-API"></a>
<a href="https://github.com/Fortnite-API/nodejs-wrapper/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Fortnite-API/nodejs-wrapper.svg?style=flat-square" alt="License"/></a>

# NodeJS Wrapper for [Fortnite-API.com](https://fortnite-api.com)
<img src="https://i.imgur.com/38Vs4w5.png" style="max-width:100%;">

## Installation
`
npm i fortnite-api-com --save
`

## Example

</div>

```javascript
const FortniteAPI = require("fortnite-api-com");
const config = {
  apikey: "API-Key",
  language: "en"
};

var Fortnite = new FortniteAPI(config);

Fortnite.Shop()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
```
<div align="center">
  
## Wiki

<a href="https://github.com/Fortnite-API/nodejs-wrapper/wiki">Read the docs</a>

## Contribute

if you can provide any help, may it only be spell checking please contribute!

We are open for any contribution.

## License

Fortnite-API (MIT) [License](https://github.com/Fortnite-API/nodejs-wrapper/blob/master/LICENSE "MIT License")

API developed by [Fortnite-API.com](https://fortnite-api.com/about).
</div>
