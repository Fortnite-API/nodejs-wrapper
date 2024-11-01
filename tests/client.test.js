/* eslint-env jest */
const { Client, Language } = require('../dist');

describe('Client Initialization', () => {
  it('Successfully initializes without a config', () => {
    const client = new Client();

    expect(client).toBeInstanceOf(Client);

    expect(client.http).toBeDefined();

    expect(client.config).toBeDefined();
    expect(client.config.apiKey).toBeUndefined();
    expect(client.config.language).toBe('en');
  });

  it('Successfully initializes with a config', () => {
    const client = new Client({
      apiKey: 'example-key',
      language: Language.German,
    });

    expect(client).toBeInstanceOf(Client);

    expect(client.http).toBeDefined();

    expect(client.config).toBeDefined();
    expect(client.config.apiKey).toBe('example-key');
    expect(client.config.language).toBe(Language.German);
  });
});

describe('Client Methods (Without API Key)', () => {
  const client = new Client();

  it('Runs Client#aesKeys()', async () => {
    const response = await client.aesKeys();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#banners()', async () => {
    const response = await client.banners();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#bannerColors()', async () => {
    const response = await client.bannerColors();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#cosmeticsList()', async () => {
    const response = await client.cosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#cosmeticsByID()', async () => {
    const response = await client.cosmeticsByID({ id: 'CID_022_Athena_Commando_F' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#cosmeticsSearch()', async () => {
    const response = await client.cosmeticsSearch({ name: 'Recon', matchMethod: 'starts' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#cosmeticsSearchAll()', async () => {
    const response = await client.cosmeticsSearchAll({ name: 'Recon', matchMethod: 'starts' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#cosmeticsSearchByIDs()', async () => {
    const response = await client.cosmeticsSearchByIDs({ id: ['CID_022_Athena_Commando_F', 'CID_242_Athena_Commando_F_Bullseye'] });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#creatorCode()', async () => {
    const response = await client.creatorCode({ name: 'Ninja' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brMap()', async () => {
    const response = await client.brMap();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#news()', async () => {
    const response = await client.news();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#playlists()', async () => {
    const response = await client.playlists();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#playlistById()', async () => {
    const response = await client.playlistById({ id: 'Playlist_DefaultSolo' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brShop()', async () => {
    const response = await client.brShop();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brShopCombined()', async () => {
    const response = await client.brShopCombined();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
});
