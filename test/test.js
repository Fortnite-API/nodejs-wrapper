const FortniteAPI = require("../index.js");
const config = {
  apikey: "API-Key",
  language: "en",
  debug: true
};

var Fortnite = new FortniteAPI(config);

Fortnite.AES()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});


/*

Fortnite.FortniteAPI()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.Parameters()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.AES()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.Language()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.Banners("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.BannersColors()
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.BRStats({name: "TFue", accountType: "epic", timeWindow:"lifetime", image: "none"})
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});


Fortnite.BRStatsID("b9afb91df9964891bd49bfe200ae35c7", {accountType: "epic", timeWindow:"lifetime", image: "none"})
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});


Fortnite.BRShop("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.BRShopCombined("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CreatorCode("TFue")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CreatorCodeSearch("TFue")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CreatorCodeSearchAll("TFue")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CosmeticsNew("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CosmeticsList("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}

Fortnite.CosmeticsSearch({name: "John", matchMethod: "contains", language: "en"})
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CosmeticsSearchAll({name: "Gui", matchMethod: "contains", language: "en"})
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CosmeticsSearchByID("CID_416_Athena_Commando_M_AssassinSuit", "en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.CosmeticsSearchByIDs(["CID_416_Athena_Commando_M_AssassinSuit", "CID_398_Athena_Commando_M_TreasureHunterFashion"], "en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.News("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.NewsBR("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.NewsSTW("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

Fortnite.NewsCreative("en")
.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

*/