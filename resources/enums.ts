/* eslint-disable no-bitwise */
/* eslint-disable no-unused-vars, import/prefer-default-export, no-shadow */
export enum Language {
  Arabic = 'ar',
  German = 'de',
  English = 'en',
  Spanish = 'es',
  Spanish419 = 'es-419',
  French = 'fr',
  Italian = 'it',
  Japanese = 'ja',
  Korean = 'ko',
  Polish = 'pl',
  BrazilianPortuguese = 'pt-BR',
  Russian = 'ru',
  Turkish = 'tr',
  Chinese = 'zh-CN',
  MandarinChinese = 'zh-Hant'
}

export enum ResponseFlags {
  None = 0,
  IncludePaths = 1 << 0,
  IncludeGameplayTags = 1 << 1,
  IncludeShopHistory = 1 << 2,
}
