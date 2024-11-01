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

  it('Runs Client#allCosmetics()', async () => {
    const response = await client.allCosmetics();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brCosmeticsList()', async () => {
    const response = await client.brCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#trackCosmeticsList()', async () => {
    const response = await client.trackCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#instrumentCosmeticsList()', async () => {
    const response = await client.instrumentCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#carCosmeticsList()', async () => {
    const response = await client.carCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#legoCosmeticsList()', async () => {
    const response = await client.legoCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#legoKitCosmeticsList()', async () => {
    const response = await client.legoKitCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#beanCosmeticsList()', async () => {
    const response = await client.beanCosmeticsList();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brCosmeticByID()', async () => {
    const response = await client.brCosmeticByID('CID_022_Athena_Commando_F');

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brCosmeticSearch()', async () => {
    const response = await client.brCosmeticSearch({ name: 'Recon', matchMethod: 'starts' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brCosmeticsSearch()', async () => {
    const response = await client.brCosmeticsSearch({ name: 'Recon', matchMethod: 'starts' });

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#brCosmeticsSearchByIDs()', async () => {
    const response = await client.brCosmeticsSearchByIDs({ id: ['CID_022_Athena_Commando_F', 'CID_242_Athena_Commando_F_Bullseye'] });

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
    const response = await client.playlistByID('Playlist_DefaultSolo');

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('Runs Client#shop()', async () => {
    const response = await client.shop();

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
});
