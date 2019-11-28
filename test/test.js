
const FortniteAPI = require('../index.js');

var config = {
  apikey: "API-Key",
  language: "en"
}

var fortnite = new FortniteAPI(config);

fortnite.Shop("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/shop/br?language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});


/*
fortnite.Shop("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br?language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});



fortnite.CreatorCode("TFUE") // "TFUE"-> Required parameter : Creator Code
.then(res => {
  let result = "https://fortnite-api.com/creatorcode?slug=TFUE";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.CreatorCodeSearch("TFUE") // "TFUE"-> Required parameter : Creator Code
.then(res => {
  let result = "https://fortnite-api.com/creatorcode/search?slug=TFUE";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.CreatorCodeSearchAll("TFUE") // "TFUE"-> Required parameter : Creator Code
.then(res => {
  let result = "https://fortnite-api.com/creatorcode/search/all?slug=TFUE";

	console.log(res);
}).catch(err => {
  console.log(err);
});



fortnite.Cosmetics("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br?language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.CosmeticsId("CID_398_Athena_Commando_M_TreasureHunterFashion","en") // "CID_398_Athena_Commando_M_TreasureHunterFashion" -> Required parameter : Id / "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br/CID_398_Athena_Commando_M_TreasureHunterFashion?language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});



---------------------
var query = { // All query -> https://fortnite-api.com/documentation
  matchMethod: "contains",
  name: "Guild",
  language:"en"
};

fortnite.CosmeticsSearch(query,"en") // query -> Required parameter : Query / "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br/search?matchMethod=contains&name=Guild&language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});
---------------------

---------------------
var query = { // All query -> https://fortnite-api.com/documentation
  matchMethod: "contains",
  name: "Dab",
  language:"en"
};

fortnite.CosmeticsSearchAll(query,"en") // query -> Required parameter : Query / "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br/search/all?matchMethod=contains&name=Dab&language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});
---------------------

---------------------
var ids = [
  "eid_dab",
  "eid_goatdance"
];

fortnite.CosmeticsSearchIds(ids,"en") // ids -> Required parameter : Ids / "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/cosmetics/br/search/ids?id=eid_dab&id=eid_goatdance&language=en";

	console.log(res);
}).catch(err => {
  console.log(err);
});
---------------------



fortnite.News("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/news";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.NewsBr("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/news/br";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.NewsStw("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/news/stw";

	console.log(res);
}).catch(err => {
  console.log(err);
});

fortnite.NewsCreative("en") // "en" -> Optional parameter : Language
.then(res => {
  let result = "https://fortnite-api.com/news/creative";

	console.log(res);
}).catch(err => {
  console.log(err);
});



fortnite.API()
.then(res => {
  let result = "https://fortnite-api.com";

	console.log(res);
}).catch(err => {
  console.log(err);
});



fortnite.Language()
.then(res => {
  let result = [
    'ar', 'de',     'en',
    'es', 'es-419', 'fr',
    'it', 'ja',     'ko',
    'pl', 'pt-BR',  'ru',
    'tr', 'zh-CN',  'zh-Hant'
  ];

	console.log(res);
}).catch(err => {
  console.log(err);
});
*/
