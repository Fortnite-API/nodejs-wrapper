/* eslint-disable no-unused-vars, no-shadow */
import { FortniteAPIResponseData } from './httpStructs';

// Auto-generated at 2024-11-01T16:41:06.158Z

/* -----------------------------------------------------
AES Keys
GET https://fortnite-api.com/v2/aes
----------------------------------------------------- */

export interface AESKeysResponseData extends FortniteAPIResponseData {
  data: {
    build: string;
    mainKey: string;
    dynamicKeys: {
      pakFilename: string;
      pakGuid: string;
      key: string;
    }[];
    updated: string;
  };
}

export interface AESKeysRequestParams {
  /**
   * Sets the aes key format. Defaults to `hex`
   */
  keyFormat?: 'hex' | 'base64';
}

/* -----------------------------------------------------
Banners
GET https://fortnite-api.com/v1/banners
----------------------------------------------------- */

export interface BannersResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    devName: string;
    name: string;
    description: string;
    category: string;
    fullUsageRights: boolean;
    images: {
      smallIcon: string;
      icon: string;
    };
  };
}

export interface BannersRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Banner Colors
GET https://fortnite-api.com/v1/banners/colors
----------------------------------------------------- */

export interface BannerColorsResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    color: string;
    category: string;
    subCategoryGroup: number;
  };
}

export interface BannerColorsRequestParams {}

/* -----------------------------------------------------
All Cosmetics
GET https://fortnite-api.com/v2/cosmetics
----------------------------------------------------- */

export interface AllCosmeticsResponseData extends FortniteAPIResponseData {
  data: {
    br: {
      id: string;
      name: string;
      description: string;
      exclusiveDescription: string;
      unlockRequirements: string;
      customExclusiveCallout: string;
      type: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      rarity: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      series: {
        value: string;
        image: string;
        colors: string[];
        backendValue: string;
      };
      set: {
        value: string;
        text: string;
        backendValue: string;
      };
      introduction: {
        chapter: string;
        season: string;
        text: string;
        backendValue: number;
      };
      images: {
        smallIcon: string;
        icon: string;
        featured: string;
        lego: {
          small: string;
          large: string;
          wide: string;
        };
        bean: {
          small: string;
          large: string;
        };
        Other: any;
      };
      variants: {
        channel: string;
        type: string;
        options: {
          tag: string;
          name: string;
          unlockRequirements: string;
          image: string;
        }[];
      }[];
      builtInEmoteIds: string[];
      searchTags: string[];
      gameplayTags: string[];
      metaTags: string[];
      showcaseVideo: string;
      dynamicPakId: string;
      itemPreviewHeroPath: string;
      displayAssetPath: string;
      definitionPath: string;
      path: string;
      added: string;
      shopHistory: string[];
    }[];
    tracks: {
      id: string;
      devName: string;
      title: string;
      artist: string;
      album: string;
      releaseYear: number;
      bpm: number;
      duration: number;
      difficulty: {
        vocals: number;
        guitar: number;
        bass: number;
        plasticBass: number;
        drums: number;
        plasticDrums: number;
      };
      gameplayTags: string[];
      genres: string[];
      albumArt: string;
      added: string;
      shopHistory: string[];
    }[];
    instruments: {
      id: string;
      name: string;
      description: string;
      type: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      rarity: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      images: {
        small: string;
        large: string;
      };
      series: {
        value: string;
        image: string;
        colors: string[];
        backendValue: string;
      };
      gameplayTags: string[];
      path: string;
      showcaseVideo: string;
      added: string;
      shopHistory: string[];
    }[];
    cars: {
      id: string;
      vehicleId: string;
      name: string;
      description: string;
      type: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      rarity: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      images: {
        small: string;
        large: string;
      };
      series: {
        value: string;
        image: string;
        colors: string[];
        backendValue: string;
      };
      gameplayTags: string[];
      path: string;
      showcaseVideo: string;
      added: string;
      shopHistory: string[];
    }[];
    lego: {
      id: string;
      cosmeticId: string;
      soundLibraryTags: string[];
      images: {
        small: string;
        large: string;
        wide: string;
      };
      path: string;
      added: string;
    }[];
    legoKits: {
      id: string;
      name: string;
      type: {
        value: string;
        displayValue: string;
        backendValue: string;
      };
      series: {
        value: string;
        image: string;
        colors: string[];
        backendValue: string;
      };
      gameplayTags: string[];
      images: {
        small: string;
        large: string;
        wide: string;
      };
      path: string;
      added: string;
      shopHistory: string[];
    }[];
    beans: {
      id: string;
      cosmeticId: string;
      name: string;
      gender: string;
      gameplayTags: string[];
      images: {
        small: string;
        large: string;
      };
      path: string;
      added: string;
    }[];
  };
}

export interface AllCosmeticsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
New Cosmetics
GET https://fortnite-api.com/v2/cosmetics/new
----------------------------------------------------- */

export interface NewCosmeticsResponseData extends FortniteAPIResponseData {
  data: {
    date: string;
    build: string;
    previousBuild: string;
    hashes: {
      all: string;
      br: string;
      tracks: string;
      instruments: string;
      cars: string;
      lego: string;
      legoKits: string;
      beans: string;
    };
    lastAdditions: {
      all: string;
      br: string;
      tracks: string;
      instruments: string;
      cars: string;
      lego: string;
      legoKits: string;
      beans: string;
    };
    items: {
      br: {
        id: string;
        name: string;
        description: string;
        exclusiveDescription: string;
        unlockRequirements: string;
        customExclusiveCallout: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        set: {
          value: string;
          text: string;
          backendValue: string;
        };
        introduction: {
          chapter: string;
          season: string;
          text: string;
          backendValue: number;
        };
        images: {
          smallIcon: string;
          icon: string;
          featured: string;
          lego: {
            small: string;
            large: string;
            wide: string;
          };
          bean: {
            small: string;
            large: string;
          };
          Other: any;
        };
        variants: {
          channel: string;
          type: string;
          options: {
            tag: string;
            name: string;
            unlockRequirements: string;
            image: string;
          }[];
        }[];
        builtInEmoteIds: string[];
        searchTags: string[];
        gameplayTags: string[];
        metaTags: string[];
        showcaseVideo: string;
        dynamicPakId: string;
        itemPreviewHeroPath: string;
        displayAssetPath: string;
        definitionPath: string;
        path: string;
        added: string;
        shopHistory: string[];
      }[];
      tracks: {
        id: string;
        devName: string;
        title: string;
        artist: string;
        album: string;
        releaseYear: number;
        bpm: number;
        duration: number;
        difficulty: {
          vocals: number;
          guitar: number;
          bass: number;
          plasticBass: number;
          drums: number;
          plasticDrums: number;
        };
        gameplayTags: string[];
        genres: string[];
        albumArt: string;
        added: string;
        shopHistory: string[];
      }[];
      instruments: {
        id: string;
        name: string;
        description: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        images: {
          small: string;
          large: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        path: string;
        showcaseVideo: string;
        added: string;
        shopHistory: string[];
      }[];
      cars: {
        id: string;
        vehicleId: string;
        name: string;
        description: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        images: {
          small: string;
          large: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        path: string;
        showcaseVideo: string;
        added: string;
        shopHistory: string[];
      }[];
      lego: {
        id: string;
        cosmeticId: string;
        soundLibraryTags: string[];
        images: {
          small: string;
          large: string;
          wide: string;
        };
        path: string;
        added: string;
      }[];
      legoKits: {
        id: string;
        name: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        images: {
          small: string;
          large: string;
          wide: string;
        };
        path: string;
        added: string;
        shopHistory: string[];
      }[];
      beans: {
        id: string;
        cosmeticId: string;
        name: string;
        gender: string;
        gameplayTags: string[];
        images: {
          small: string;
          large: string;
        };
        path: string;
        added: string;
      }[];
    };
  };
}

export interface NewCosmeticsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
BR Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/br
----------------------------------------------------- */

export interface BRCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    exclusiveDescription: string;
    unlockRequirements: string;
    customExclusiveCallout: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    set: {
      value: string;
      text: string;
      backendValue: string;
    };
    introduction: {
      chapter: string;
      season: string;
      text: string;
      backendValue: number;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
      lego: {
        small: string;
        large: string;
        wide: string;
      };
      bean: {
        small: string;
        large: string;
      };
      Other: any;
    };
    variants: {
      channel: string;
      type: string;
      options: {
        tag: string;
        name: string;
        unlockRequirements: string;
        image: string;
      }[];
    }[];
    builtInEmoteIds: string[];
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    itemPreviewHeroPath: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface BRCosmeticsListRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Track Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/tracks
----------------------------------------------------- */

export interface TrackCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    devName: string;
    title: string;
    artist: string;
    album: string;
    releaseYear: number;
    bpm: number;
    duration: number;
    difficulty: {
      vocals: number;
      guitar: number;
      bass: number;
      plasticBass: number;
      drums: number;
      plasticDrums: number;
    };
    gameplayTags: string[];
    genres: string[];
    albumArt: string;
    added: string;
    shopHistory: string[];
  };
}

export interface TrackCosmeticsListRequestParams {}

/* -----------------------------------------------------
Instrument Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/instruments
----------------------------------------------------- */

export interface InstrumentCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    images: {
      small: string;
      large: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    gameplayTags: string[];
    path: string;
    showcaseVideo: string;
    added: string;
    shopHistory: string[];
  };
}

export interface InstrumentCosmeticsListRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Car Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/cars
----------------------------------------------------- */

export interface CarCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    vehicleId: string;
    name: string;
    description: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    images: {
      small: string;
      large: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    gameplayTags: string[];
    path: string;
    showcaseVideo: string;
    added: string;
    shopHistory: string[];
  };
}

export interface CarCosmeticsListRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Lego Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/lego
----------------------------------------------------- */

export interface LegoCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    cosmeticId: string;
    soundLibraryTags: string[];
    images: {
      small: string;
      large: string;
      wide: string;
    };
    path: string;
    added: string;
  };
}

export interface LegoCosmeticsListRequestParams {}

/* -----------------------------------------------------
Lego Kit Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/lego/kits
----------------------------------------------------- */

export interface LegoKitCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    gameplayTags: string[];
    images: {
      small: string;
      large: string;
      wide: string;
    };
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface LegoKitCosmeticsListRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Bean Cosmetics List
GET https://fortnite-api.com/v2/cosmetics/beans
----------------------------------------------------- */

export interface BeanCosmeticsListResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    cosmeticId: string;
    name: string;
    gender: string;
    gameplayTags: string[];
    images: {
      small: string;
      large: string;
    };
    path: string;
    added: string;
  };
}

export interface BeanCosmeticsListRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
BR Cosmetic by ID
GET https://fortnite-api.com/v2/cosmetics/br/{cosmetic-id}
----------------------------------------------------- */

export interface BRCosmeticByIDResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    exclusiveDescription: string;
    unlockRequirements: string;
    customExclusiveCallout: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    set: {
      value: string;
      text: string;
      backendValue: string;
    };
    introduction: {
      chapter: string;
      season: string;
      text: string;
      backendValue: number;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
      lego: {
        small: string;
        large: string;
        wide: string;
      };
      bean: {
        small: string;
        large: string;
      };
      Other: any;
    };
    variants: {
      channel: string;
      type: string;
      options: {
        tag: string;
        name: string;
        unlockRequirements: string;
        image: string;
      }[];
    }[];
    builtInEmoteIds: string[];
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    itemPreviewHeroPath: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface BRCosmeticByIDRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
BR Cosmetic Search
GET https://fortnite-api.com/v2/cosmetics/br/search
----------------------------------------------------- */

export interface BRCosmeticSearchResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    exclusiveDescription: string;
    unlockRequirements: string;
    customExclusiveCallout: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    set: {
      value: string;
      text: string;
      backendValue: string;
    };
    introduction: {
      chapter: string;
      season: string;
      text: string;
      backendValue: number;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
      lego: {
        small: string;
        large: string;
        wide: string;
      };
      bean: {
        small: string;
        large: string;
      };
      Other: any;
    };
    variants: {
      channel: string;
      type: string;
      options: {
        tag: string;
        name: string;
        unlockRequirements: string;
        image: string;
      }[];
    }[];
    builtInEmoteIds: string[];
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    itemPreviewHeroPath: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface BRCosmeticSearchRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
  /**
   * Sets the search language. Defaults to `en`
   */
  searchLanguage?: string;
  /**
   * Sets the match method for strings. Defaults to `full`
   */
  matchMethod?: 'full' | 'contains' | 'starts' | 'ends';
  /**
   * Sets the id. Defaults to `none`
   */
  id: string;
  /**
   * Sets the name. Defaults to `none`
   */
  name: string;
  /**
   * Sets the description. Defaults to `none`
   */
  description: string;
  /**
   * Sets the type. Defaults to `none`
   */
  type: string;
  /**
   * Sets the display type. Defaults to `none`
   */
  displayType: string;
  /**
   * Sets the backend type. Defaults to `none`
   */
  backendType: string;
  /**
   * Sets the rarity. Defaults to `none`
   */
  rarity: string;
  /**
   * Sets the display rarity. Defaults to `none`
   */
  displayRarity: string;
  /**
   * Sets the backend rarity. Defaults to `none`
   */
  backendRarity: string;
  /**
   * Sets whether there is a series. Defaults to `none`
   */
  hasSeries: boolean;
  /**
   * Sets the series. Defaults to `none`
   */
  series: string;
  /**
   * Sets the backend series. Defaults to `none`
   */
  backendSeries: string;
  /**
   * Sets whether there is a set. Defaults to `none`
   */
  hasSet: boolean;
  /**
   * Sets the set. Defaults to `none`
   */
  set: string;
  /**
   * Sets the set text. Defaults to `none`
   */
  setText: string;
  /**
   * Sets the backend set. Defaults to `none`
   */
  backendSet: string;
  /**
   * Sets whether there is an introduction. Defaults to `none`
   */
  hasIntroduction: boolean;
  /**
   * Sets the introduction backend value. Defaults to `none`
   */
  backendIntroduction: number;
  /**
   * Sets the introduction chapter. Defaults to `none`
   */
  introductionChapter: string;
  /**
   * Sets the introduction season. Defaults to `none`
   */
  introductionSeason: string;
  /**
   * Sets whether there is a featuredImage. Defaults to `none`
   */
  hasFeaturedImage: boolean;
  /**
   * Sets whether there are variants. Defaults to `none`
   */
  hasVariants: boolean;
  /**
   * Sets whether there are gameplay tags. Defaults to `none`
   */
  hasGameplayTags: boolean;
  /**
   * Sets the gameplay tag. Defaults to `none`
   */
  gameplayTag: string;
  /**
   * Sets whether there are meta tags. Defaults to `none`
   */
  hasMetaTags: boolean;
  /**
   * Sets the meta tag. Defaults to `none`
   */
  metaTag: string;
  /**
   * Sets whether a dynamic pak id is set. Defaults to `none`
   */
  hasDynamicPakId: boolean;
  /**
   * Sets the dynamic pak id. Defaults to `none`
   */
  dynamicPakId: string;
  /**
   * Sets the added date. Defaults to `none`
   */
  added: number;
  /**
   * Sets the date since it was added. Defaults to `none`
   */
  addedSince: number;
  /**
   * Sets for how long its unseen. Defaults to `none`
   */
  unseenFor: number;
  /**
   * Sets the last appearance date. Defaults to `none`
   */
  lastAppearance: number;
}

/* -----------------------------------------------------
BR Cosmetics Search
GET https://fortnite-api.com/v2/cosmetics/br/search/all
----------------------------------------------------- */

export interface BRCosmeticsSearchResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    exclusiveDescription: string;
    unlockRequirements: string;
    customExclusiveCallout: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    set: {
      value: string;
      text: string;
      backendValue: string;
    };
    introduction: {
      chapter: string;
      season: string;
      text: string;
      backendValue: number;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
      lego: {
        small: string;
        large: string;
        wide: string;
      };
      bean: {
        small: string;
        large: string;
      };
      Other: any;
    };
    variants: {
      channel: string;
      type: string;
      options: {
        tag: string;
        name: string;
        unlockRequirements: string;
        image: string;
      }[];
    }[];
    builtInEmoteIds: string[];
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    itemPreviewHeroPath: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface BRCosmeticsSearchRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
  /**
   * Sets the search language. Defaults to `en`
   */
  searchLanguage?: string;
  /**
   * Sets the match method for strings. Defaults to `full`
   */
  matchMethod?: 'full' | 'contains' | 'starts' | 'ends';
  /**
   * Sets the id. Defaults to `none`
   */
  id: string;
  /**
   * Sets the name. Defaults to `none`
   */
  name: string;
  /**
   * Sets the description. Defaults to `none`
   */
  description: string;
  /**
   * Sets the type. Defaults to `none`
   */
  type: string;
  /**
   * Sets the display type. Defaults to `none`
   */
  displayType: string;
  /**
   * Sets the backend type. Defaults to `none`
   */
  backendType: string;
  /**
   * Sets the rarity. Defaults to `none`
   */
  rarity: string;
  /**
   * Sets the display rarity. Defaults to `none`
   */
  displayRarity: string;
  /**
   * Sets the backend rarity. Defaults to `none`
   */
  backendRarity: string;
  /**
   * Sets whether there is a series. Defaults to `none`
   */
  hasSeries: boolean;
  /**
   * Sets the series. Defaults to `none`
   */
  series: string;
  /**
   * Sets the backend series. Defaults to `none`
   */
  backendSeries: string;
  /**
   * Sets whether there is a set. Defaults to `none`
   */
  hasSet: boolean;
  /**
   * Sets the set. Defaults to `none`
   */
  set: string;
  /**
   * Sets the set text. Defaults to `none`
   */
  setText: string;
  /**
   * Sets the backend set. Defaults to `none`
   */
  backendSet: string;
  /**
   * Sets whether there is an introduction. Defaults to `none`
   */
  hasIntroduction: boolean;
  /**
   * Sets the introduction backend value. Defaults to `none`
   */
  backendIntroduction: number;
  /**
   * Sets the introduction chapter. Defaults to `none`
   */
  introductionChapter: string;
  /**
   * Sets the introduction season. Defaults to `none`
   */
  introductionSeason: string;
  /**
   * Sets whether there is a featuredImage. Defaults to `none`
   */
  hasFeaturedImage: boolean;
  /**
   * Sets whether there are variants. Defaults to `none`
   */
  hasVariants: boolean;
  /**
   * Sets whether there are gameplay tags. Defaults to `none`
   */
  hasGameplayTags: boolean;
  /**
   * Sets the gameplay tag. Defaults to `none`
   */
  gameplayTag: string;
  /**
   * Sets whether there are meta tags. Defaults to `none`
   */
  hasMetaTags: boolean;
  /**
   * Sets the meta tag. Defaults to `none`
   */
  metaTag: string;
  /**
   * Sets whether a dynamic pak id is set. Defaults to `none`
   */
  hasDynamicPakId: boolean;
  /**
   * Sets the dynamic pak id. Defaults to `none`
   */
  dynamicPakId: string;
  /**
   * Sets the added date. Defaults to `none`
   */
  added: number;
  /**
   * Sets the date since it was added. Defaults to `none`
   */
  addedSince: number;
  /**
   * Sets for how long its unseen. Defaults to `none`
   */
  unseenFor: number;
  /**
   * Sets the last appearance date. Defaults to `none`
   */
  lastAppearance: number;
}

/* -----------------------------------------------------
BR Cosmetics Search by IDs
GET https://fortnite-api.com/v2/cosmetics/br/search/ids
----------------------------------------------------- */

export interface BRCosmeticsSearchByIDsResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    description: string;
    exclusiveDescription: string;
    unlockRequirements: string;
    customExclusiveCallout: string;
    type: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    rarity: {
      value: string;
      displayValue: string;
      backendValue: string;
    };
    series: {
      value: string;
      image: string;
      colors: string[];
      backendValue: string;
    };
    set: {
      value: string;
      text: string;
      backendValue: string;
    };
    introduction: {
      chapter: string;
      season: string;
      text: string;
      backendValue: number;
    };
    images: {
      smallIcon: string;
      icon: string;
      featured: string;
      lego: {
        small: string;
        large: string;
        wide: string;
      };
      bean: {
        small: string;
        large: string;
      };
      Other: any;
    };
    variants: {
      channel: string;
      type: string;
      options: {
        tag: string;
        name: string;
        unlockRequirements: string;
        image: string;
      }[];
    }[];
    builtInEmoteIds: string[];
    searchTags: string[];
    gameplayTags: string[];
    metaTags: string[];
    showcaseVideo: string;
    dynamicPakId: string;
    itemPreviewHeroPath: string;
    displayAssetPath: string;
    definitionPath: string;
    path: string;
    added: string;
    shopHistory: string[];
  };
}

export interface BRCosmeticsSearchByIDsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
  /**
   * Sets the cosmetic id
(can be multiple). Defaults to `none`
   */
  id: string;
}

/* -----------------------------------------------------
Creator Code
GET https://fortnite-api.com/v2/creatorcode
----------------------------------------------------- */

export interface CreatorCodeResponseData extends FortniteAPIResponseData {
  data: {
    code: string;
    account: {
      id: string;
      name: string;
    };
    status: string;
    verified: boolean;
  };
}

export interface CreatorCodeRequestParams {
  /**
   * Sets the creator code. Defaults to `none`
   */
  name: string;
}

/* -----------------------------------------------------
BR Map
GET https://fortnite-api.com/v1/map
----------------------------------------------------- */

export interface BRMapResponseData extends FortniteAPIResponseData {
  data: {
    images: {
      blank: string;
      pois: string;
    };
    pois: {
      id: string;
      name: string;
      location: {
        x: number;
        y: number;
        z: number;
      };
    }[];
  };
}

export interface BRMapRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
News
GET https://fortnite-api.com/v2/news
----------------------------------------------------- */

export interface NewsResponseData extends FortniteAPIResponseData {
  data: {
    br: {
      hash: string;
      date: string;
      image: string;
      motds: {
        id: string;
        title: string;
        tabTitle: string;
        body: string;
        image: string;
        tileImage: string;
        sortingPriority: number;
        hidden: boolean;
        websiteUrl: string;
        videoString: string;
        videoId: string;
      }[];
      messages: {
        title: string;
        body: string;
        image: string;
        adspace: string;
      }[];
    };
    stw: {
      hash: string;
      date: string;
      image: string;
      motds: {
        id: string;
        title: string;
        tabTitle: string;
        body: string;
        image: string;
        tileImage: string;
        sortingPriority: number;
        hidden: boolean;
        websiteUrl: string;
        videoString: string;
        videoId: string;
      }[];
      messages: {
        title: string;
        body: string;
        image: string;
        adspace: string;
      }[];
    };
    creative: {
      hash: string;
      date: string;
      image: string;
      motds: {
        id: string;
        title: string;
        tabTitle: string;
        body: string;
        image: string;
        tileImage: string;
        sortingPriority: number;
        hidden: boolean;
        websiteUrl: string;
        videoString: string;
        videoId: string;
      }[];
      messages: {
        title: string;
        body: string;
        image: string;
        adspace: string;
      }[];
    };
  };
}

export interface NewsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
BR News
GET https://fortnite-api.com/v2/news/br
----------------------------------------------------- */

export interface BRNewsResponseData extends FortniteAPIResponseData {
  data: {
    hash: string;
    date: string;
    image: string;
    motds: {
      id: string;
      title: string;
      tabTitle: string;
      body: string;
      image: string;
      tileImage: string;
      sortingPriority: number;
      hidden: boolean;
      websiteUrl: string;
      videoString: string;
      videoId: string;
    }[];
    messages: {
      title: string;
      body: string;
      image: string;
      adspace: string;
    }[];
  };
}

export interface BRNewsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
STW News
GET https://fortnite-api.com/v2/news/stw
----------------------------------------------------- */

export interface STWNewsResponseData extends FortniteAPIResponseData {
  data: {
    hash: string;
    date: string;
    image: string;
    motds: {
      id: string;
      title: string;
      tabTitle: string;
      body: string;
      image: string;
      tileImage: string;
      sortingPriority: number;
      hidden: boolean;
      websiteUrl: string;
      videoString: string;
      videoId: string;
    }[];
    messages: {
      title: string;
      body: string;
      image: string;
      adspace: string;
    }[];
  };
}

export interface STWNewsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Creative News
GET https://fortnite-api.com/v2/news/creative
----------------------------------------------------- */

export interface CreativeNewsResponseData extends FortniteAPIResponseData {
  data: {
    hash: string;
    date: string;
    image: string;
    motds: {
      id: string;
      title: string;
      tabTitle: string;
      body: string;
      image: string;
      tileImage: string;
      sortingPriority: number;
      hidden: boolean;
      websiteUrl: string;
      videoString: string;
      videoId: string;
    }[];
    messages: {
      title: string;
      body: string;
      image: string;
      adspace: string;
    }[];
  };
}

export interface CreativeNewsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Playlists
GET https://fortnite-api.com/v1/playlists
----------------------------------------------------- */

export interface PlaylistsResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    subName: string;
    description: string;
    gameType: string;
    ratingType: string;
    minPlayers: number;
    maxPlayers: number;
    maxTeams: number;
    maxTeamSize: number;
    maxSquads: number;
    maxSquadSize: number;
    isDefault: boolean;
    isTournament: boolean;
    isLimitedTimeMode: boolean;
    isLargeTeamGame: boolean;
    accumulateToProfileStats: boolean;
    images: {
      showcase: string;
      missionIcon: string;
    };
    gameplayTags: string[];
    path: string;
    added: string;
  };
}

export interface PlaylistsRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Playlist by ID
GET https://fortnite-api.com/v1/playlists/{playlist-id}
----------------------------------------------------- */

export interface PlaylistByIDResponseData extends FortniteAPIResponseData {
  data: {
    id: string;
    name: string;
    subName: string;
    description: string;
    gameType: string;
    ratingType: string;
    minPlayers: number;
    maxPlayers: number;
    maxTeams: number;
    maxTeamSize: number;
    maxSquads: number;
    maxSquadSize: number;
    isDefault: boolean;
    isTournament: boolean;
    isLimitedTimeMode: boolean;
    isLargeTeamGame: boolean;
    accumulateToProfileStats: boolean;
    images: {
      showcase: string;
      missionIcon: string;
    };
    gameplayTags: string[];
    path: string;
    added: string;
  };
}

export interface PlaylistByIDRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
Shop
GET https://fortnite-api.com/v2/shop
----------------------------------------------------- */

export interface ShopResponseData extends FortniteAPIResponseData {
  data: {
    hash: string;
    date: string;
    vbuckIcon: string;
    entries: {
      regularPrice: number;
      finalPrice: number;
      devName: string;
      offerId: string;
      inDate: string;
      outDate: string;
      bundle: {
        name: string;
        info: string;
        image: string;
      };
      banner: {
        value: string;
        intensity: string;
        backendValue: string;
      };
      offerTag: {
        id: string;
        text: string;
      };
      giftable: boolean;
      refundable: boolean;
      sortPriority: number;
      layoutId: string;
      layout: {
        id: string;
        name: string;
        category: string;
        index: number;
        rank: number;
        showIneligibleOffers: string;
        background: string;
        useWidePreview: boolean;
        displayType: string;
        textureMetadata: {
          key: string;
          value: string;
        }[];
        stringMetadata: {
          key: string;
          value: string;
        }[];
        textMetadata: {
          key: string;
          value: string;
        }[];
      };
      colors: {
        color1: string;
        color2: string;
        color3: string;
        textBackgroundColor: string;
      };
      tileSize: string;
      displayAssetPath: string;
      newDisplayAssetPath: string;
      newDisplayAsset: {
        id: string;
        cosmeticId: string;
        materialInstances: {
          id: string;
          primaryMode: string;
          productTag: string;
          Images: any;
          Colors: any;
          Scalings: any;
          Flags: any;
        }[];
        renderImages: {
          productTag: string;
          fileName: string;
          image: string;
        }[];
      };
      brItems: {
        id: string;
        name: string;
        description: string;
        exclusiveDescription: string;
        unlockRequirements: string;
        customExclusiveCallout: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        set: {
          value: string;
          text: string;
          backendValue: string;
        };
        introduction: {
          chapter: string;
          season: string;
          text: string;
          backendValue: number;
        };
        images: {
          smallIcon: string;
          icon: string;
          featured: string;
          lego: {
            small: string;
            large: string;
            wide: string;
          };
          bean: {
            small: string;
            large: string;
          };
          Other: any;
        };
        variants: {
          channel: string;
          type: string;
          options: {
            tag: string;
            name: string;
            unlockRequirements: string;
            image: string;
          }[];
        }[];
        builtInEmoteIds: string[];
        searchTags: string[];
        gameplayTags: string[];
        metaTags: string[];
        showcaseVideo: string;
        dynamicPakId: string;
        itemPreviewHeroPath: string;
        displayAssetPath: string;
        definitionPath: string;
        path: string;
        added: string;
        shopHistory: string[];
      }[];
      tracks: {
        id: string;
        devName: string;
        title: string;
        artist: string;
        album: string;
        releaseYear: number;
        bpm: number;
        duration: number;
        difficulty: {
          vocals: number;
          guitar: number;
          bass: number;
          plasticBass: number;
          drums: number;
          plasticDrums: number;
        };
        gameplayTags: string[];
        genres: string[];
        albumArt: string;
        added: string;
        shopHistory: string[];
      }[];
      instruments: {
        id: string;
        name: string;
        description: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        images: {
          small: string;
          large: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        path: string;
        showcaseVideo: string;
        added: string;
        shopHistory: string[];
      }[];
      cars: {
        id: string;
        vehicleId: string;
        name: string;
        description: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        rarity: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        images: {
          small: string;
          large: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        path: string;
        showcaseVideo: string;
        added: string;
        shopHistory: string[];
      }[];
      legoKits: {
        id: string;
        name: string;
        type: {
          value: string;
          displayValue: string;
          backendValue: string;
        };
        series: {
          value: string;
          image: string;
          colors: string[];
          backendValue: string;
        };
        gameplayTags: string[];
        images: {
          small: string;
          large: string;
          wide: string;
        };
        path: string;
        added: string;
        shopHistory: string[];
      }[];
    }[];
  };
}

export interface ShopRequestParams {
  /**
   * Sets the output language. Defaults to `en`
   */
  language?: string;
}

/* -----------------------------------------------------
BR Stats
GET https://fortnite-api.com/v2/stats/br/v2
----------------------------------------------------- */

export interface BRStatsResponseData extends FortniteAPIResponseData {
  data: {
    account: {
      id: string;
      name: string;
    };
    battlePass: {
      level: number;
      progress: number;
    };
    image: string;
    stats: {
      all: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      keyboardMouse: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      gamepad: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      touch: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
    };
  };
}

export interface BRStatsRequestParams {
  /**
   * Sets the account name. Defaults to `none`
   */
  name: string;
  /**
   * Sets the account type. Defaults to `epic`
   */
  accountType?: 'epic' | 'psn' | 'xbl';
  /**
   * Sets the time window. Defaults to `lifetime`
   */
  timeWindow?: 'season' | 'lifetime';
  /**
   * Sets the platform for the generated image (example). Defaults to `none`
   */
  image?: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
}

/* -----------------------------------------------------
BR Stats by account ID
GET https://fortnite-api.com/v2/stats/br/v2/{accountId}
----------------------------------------------------- */

export interface BRStatsByAccountIDResponseData extends FortniteAPIResponseData {
  data: {
    account: {
      id: string;
      name: string;
    };
    battlePass: {
      level: number;
      progress: number;
    };
    image: string;
    stats: {
      all: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      keyboardMouse: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      gamepad: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
      touch: {
        overall: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top5: number;
          top6: number;
          top10: number;
          top12: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        solo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top10: number;
          top25: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        duo: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top5: number;
          top12: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        trio: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        squad: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          top3: number;
          top6: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
        ltm: {
          score: number;
          scorePerMin: number;
          scorePerMatch: number;
          wins: number;
          kills: number;
          killsPerMin: number;
          killsPerMatch: number;
          deaths: number;
          kd: number;
          matches: number;
          winRate: number;
          minutesPlayed: number;
          playersOutlived: number;
          lastModified: string;
        };
      };
    };
  };
}

export interface BRStatsByAccountIDRequestParams {
  /**
   * Sets the time window. Defaults to `lifetime`
   */
  timeWindow?: 'season' | 'lifetime';
  /**
   * Sets the platform for the generated image (example). Defaults to `none`
   */
  image?: 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none';
}
