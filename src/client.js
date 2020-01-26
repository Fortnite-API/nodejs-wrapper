const axios = require("axios");
const endpoints = require("./endpoints.js");

module.exports = class FortniteAPI {
  constructor(config) {
    if (!config) {
      console.log("[FortniteAPI] Please define your configuration .");
    } else if (!config.apikey) {
      console.log("[FortniteAPI] Please define your Api-Key .");
    } else if (!config.language) {
      console.log("[FortniteAPI] Please define your default language .");
    }

    this.apikey = config.apikey;
    this.language = config.language;
  }

  Request(url) {
    return axios({ url: url, headers: { "x-api-key": this.apikey } });
  }

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

    var resource = uri + params;
    return this.Request(resource);
  }

  async Shop(language = null) {
    if (language === null) {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.shop, {
      language: language
    });
    return response.data;
  }

  async AES() {
    const response = await this.PreRequest(endpoints.aes);
    return response.data;
  }

  async CreatorCode(slug = null) {
    if (slug == null || slug == "") {
      return "{ error: \"missing parameter 'Creator Code'\" }";
    }
    const response = await this.PreRequest(endpoints.creatorcode, {
      slug: slug
    });
    return response.data;
  }

  async CreatorCodeSearch(slug = null) {
    if (slug == null || slug == "") {
      return "{ error: \"missing parameter 'Creator Code'\" }";
    }
    const response = await this.PreRequest(endpoints.creatorcode_search, {
      slug: slug
    });
    return response.data;
  }

  async CreatorCodeSearchAll(slug = null) {
    if (slug == null || slug == "") {
      return "{ error: \"missing parameter 'Creator Code'\" }";
    }
    const response = await this.PreRequest(endpoints.creatorcode_search_all, {
      slug: slug
    });
    return response.data;
  }

  async Cosmetics(language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.cosmetics, {
      language: language
    });
    return response.data;
  }

  async CosmeticsId(id = null, language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    if (id == null || id == "") {
      return "{ error: \"missing parameter 'id'\" }";
    }
    const response = await this.PreRequest(endpoints.cosmetics_id + id, {
      language: language
    });
    return response.data;
  }

  async CosmeticsSearch(query) {
    if (query == null || query == "") {
      return "{ error: \"missing parameter 'query'\" }";
    }
    const response = await this.PreRequest(endpoints.cosmetics_search, query);
    return response.data;
  }

  async CosmeticsSearchAll(query) {
    if (query == null || query == "") {
      return "{ error: \"missing parameter 'query'\" }";
    }
    const response = await this.PreRequest(
      endpoints.cosmetics_search_all,
      query
    );
    return response.data;
  }

  async CosmeticsSearchIds(ids, language = null) {
    if (ids == null || ids == "") {
      return "{ error: \"missing parameter 'ids'\" }";
    }
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.cosmetics_search_ids, {
      id: ids,
      language: language
    });
    return response.data;
  }

  async News(language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.news, {
      language: language
    });
    return response.data;
  }

  async NewsBr(language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.news_br, {
      language: language
    });
    return response.data;
  }

  async NewsStw(language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.news_stw, {
      language: language
    });
    return response.data;
  }

  async NewsCreative(language = null) {
    if (language === null || language == "") {
      language = this.language;
    }
    const response = await this.PreRequest(endpoints.news_creative, {
      language: language
    });
    return response.data;
  }

  async Language() {
    const languages = [
      "ar",
      "de",
      "en",
      "es",
      "es-419",
      "fr",
      "it",
      "ja",
      "ko",
      "pl",
      "pt-BR",
      "ru",
      "tr",
      "zh-CN",
      "zh-Hant"
    ];

    return languages;
  }

  async API() {
    const api = {
      url: endpoints.base
    }
    return api;
  }
};
