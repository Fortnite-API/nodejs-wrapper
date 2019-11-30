const FortniteAPI = require("../index.js");


var config = {
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