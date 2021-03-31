const { generateRoute } = require('geo-route-generator');

const routeNE = generateRoute(
  {
    lat: 40.413599,
    lng: -3.709558,
  },
  {
    lat: 70.33843,
    lng: 100.322813,
  },
  100
);

const routeSE = generateRoute(
  {
    lat: 40.413599,
    lng: -3.709558,
  },
  {
    lat: -44.910094,
    lng: 169.003759,
  },
  100
);

const routeNW = generateRoute(
  {
    lat: 40.413599,
    lng: -3.709558,
  },
  {
    lat: 66.905633,
    lng: -130.696068,
  },
  100
);

const routeSW = generateRoute(
  {
    lat: 40.413599,
    lng: -3.709558,
  },
  {
    lat: -47.190444,
    lng: -69.286307,
  },
  100
);

// More test with different movement scenarios (negative to positive etc)
// Use beforeEach and afterEach properly

describe('When route is moving to NE it should work properly', () => {
  test('Test of Index 17', () => {
    expect(routeNE[17]).toEqual({
      lat: 45.80006858000005,
      lng: 15.016268779999997,
    });
  });

  test('Test of Index 56', () => {
    expect(routeNE[56]).toEqual({
      lat: 57.47075267000017,
      lng: 55.588893470000045,
    });
  });

  test('Test of Index 99', () => {
    expect(routeNE[99]).toEqual({
      lat: 70.33843000000014,
      lng: 100.32281299999991,
    });
  });
});

describe('When route is moving to NW it should work properly', () => {
  test('Test of Index 21', () => {
    expect(routeNW[21]).toEqual({
      lat: 46.24184648000007,
      lng: -31.64659020000001,
    });
  });

  test('Test of Index 70', () => {
    expect(routeNW[70]).toEqual({
      lat: 59.22294314000023,
      lng: -93.86998010000003,
    });
  });

  test('Test of Index 99', () => {
    expect(routeNW[99]).toEqual({
      lat: 66.90563300000032,
      lng: -130.69606800000014,
    });
  });
});

describe('When route is moving to SE it should work properly', () => {
  test('Test of Index 33', () => {
    expect(routeSE[33]).toEqual({
      lat: 11.403543379999963,
      lng: 55.01296978000001,
    });
  });

  test('Test of Index 69', () => {
    expect(routeSE[69]).toEqual({
      lat: -19.312986100000032,
      lng: 117.18976390000007,
    });
  });

  test('Test of Index 99', () => {
    expect(routeSE[99]).toEqual({
      lat: -44.91009400000007,
      lng: 169.00375900000012,
    });
  });
});

describe('When route is moving to SW it should work properly', () => {
  test('Test of Index 33', () => {
    expect(routeSW[33]).toEqual({
      lat: 10.628224379999974,
      lng: -26.005652659999985,
    });
  });

  test('Test of Index 67', () => {
    expect(routeSW[67]).toEqual({
      lat: -19.15715024000002,
      lng: -48.30174732000003,
    });
  });

  test('Test of Index 99', () => {
    expect(routeSW[99]).toEqual({
      lat: -47.19044400000008,
      lng: -69.28630700000011,
    });
  });
});
