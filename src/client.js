const fetch = require('node-fetch');
const Endpoints = require("./endpoints.js");

module.exports = class FortniteAPI {
    constructor(config) {
        if (!config) {
            console.log("[FortniteAPI.js] Please define your configuration.");
        };
        if (config.debug == true || config.debug == false) {
            this.debug = config.debug;
        } else {
            this.debug = true
        };
        if (config.language) {
            this.language = config.language;
        } else {
            console.log("[FortniteAPI.js] Please define your default language. (Default language selected 'English').");
            this.language = "en";
        };
        if (config.apikey) {
            this.apikey = config.apikey;
            this.headers = {
                headers: {
                    'x-api-key': this.apikey
                }
            };
        } else {
            console.log("[FortniteAPI.js] Please define your Api-Key (https://dash.fortnite-api.com/account).");
            this.headers = {};
        };
    };

    PreRequest(uri, query = null) {
        var params = "";
        if (query != null) {
            for (var prop in query) {
                if (Array.isArray(query[prop])) {
                    for (var item of query[prop]) {
                        params += prop + "=" + item + "&";
                    }
                } else {
                    params += prop + "=" + query[prop] + "&";
                }
            }
            if (params.length > 0) {
                params = "?" + params.substr(0, params.length - 1);
            }
        }
        let url = uri + params;
        return url;
    };

    CheckLanguage(params){
        let Kik = Endpoints.Language;
        let Kik_Exist = Kik.indexOf(params) > -1;
        if (Kik_Exist) {
            return params;
        } else if (!Kik_Exist) {
            if (this.debug) { console.log("[FortniteAPI.js] 'Language' parameter is invalid (Default language selected 'English')."); };
            return this.language; 
        } else if (params == "") {
            if (this.debug) { console.log("[FortniteAPI.js] 'Language' parameter is empty (Default language selected 'English')."); };
            return this.language; 
        } else if (!params) { 
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'Language' parameter (Default language selected 'English')."); };
            return this.language; 
        };
    };


    async FortniteAPI(language) {
        return Endpoints.Base;
    };

    async Parameters(language) {
        return Endpoints.Parameters;
    };

    async AES() {
        const res = await this.PreRequest(Endpoints.AES);
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data;
    };

    async Language() {
        return Endpoints.Language;
    };

    async BRMap(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.BR_Map, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data;
        
    };

    async Playlists(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.Playlists, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data;
        
    };

    async PlaylistsID(ID, language) {
        language = this.CheckLanguage(language);
        if (!ID) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'ID' parameter."); };
            return false;
        } else if (ID == "") {
            if (this.debug) { console.log("[FortniteAPI.js] 'ID' parameter is empty."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Playlists_ID + ID, { language: language });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async Banners(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.Banners, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data;
        
    };

    async BannersColors() {
        const res = await this.PreRequest(Endpoints.Banners_Colors);
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data;
        
    };

    async BRStats(params) {
        if (params == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] 'Name' parameter is empty."); };
            return false;
        } else if (!params) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'Name' parameter."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.BR_Stats, params);
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async BRStatsID(ID, params) {
        if (params == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] 'ID' parameter is empty."); };
            return false;
        } else if (!params) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'ID' parameter."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.BR_StatsID + ID, params);
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async BRShop(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.BR_Shop, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async BRShopCombined(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.BR_ShopCombined, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async CreatorCode(name) {
        if (name == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] 'Name' parameter is empty."); };
            return false;
        } else if (!name) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'Name' parameter."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Creator_Code, { name: name });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CreatorCodeSearch(name) {
        if (name == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] 'Name' parameter is empty."); };
            return false;
        } else if (!name) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'Name' parameter."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Creator_CodeSearch, { name: name });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CreatorCodeSearchAll(name) {
        if (name == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] 'Name' parameter is empty."); };
            return false;
        } else if (!name) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'Name' parameter."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Creator_CodeSearchAll, { name: name });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CosmeticsNew(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.Cosmetics_New, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async CosmeticsList(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.Cosmetics_List, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async CosmeticsSearch(params) {
        if (params == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] The Parameters are empty."); };
            return false;
        } else if (!params) {
            if (this.debug) { console.log("[FortniteAPI.js] Please set the Parameters."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Cosmetics_Search, params);
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CosmeticsSearchAll(params) {
        if (params == {}) {
            if (this.debug) { console.log("[FortniteAPI.js] The Parameters are empty."); };
            return false;
        } else if (!params) {
            if (this.debug) { console.log("[FortniteAPI.js] Please set the Parameters."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Cosmetics_SearchAll, params);
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CosmeticsSearchByID(ID, language) {
        language = this.CheckLanguage(language);
        if (!ID) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'ID' parameter."); };
            return false;
        } else if (ID == "") {
            if (this.debug) { console.log("[FortniteAPI.js] 'ID' parameter is empty."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Cosmetics_SearchByID + ID, { language: language });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async CosmeticsSearchByIDs(ID, language) {
        language = this.CheckLanguage(language);
        if (!ID) {
            if (this.debug) { console.log("[FortniteAPI.js] Missing 'IDs' parameter."); };
            return false;
        } else if (ID == []) {
            if (this.debug) { console.log("[FortniteAPI.js] 'IDs' parameter is empty."); };
            return false;
        } else {
            const res = await this.PreRequest(Endpoints.Cosmetics_SearchByIDs, { id: ID, language: language });
            const result = await fetch(res, this.headers);
            const data = await result.json();
            return data;
        };
    };

    async News(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.News, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async NewsBR(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.News_BR, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async NewsSTW(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.News_STW, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };

    async NewsCreative(language) {
        language = this.CheckLanguage(language);
        const res = await this.PreRequest(Endpoints.News_Creative, { language: language });
        const result = await fetch(res, this.headers);
        const data = await result.json();
        return data; 
    };
};