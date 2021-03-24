interface coordinates {
  lat: number;
  lng: number;
}

export function generateRoute(
  actualPos: coordinates,
  finalPos: coordinates,
  steps: number
) {
  const actual = {
    lat: actualPos.lat,
    lng: actualPos.lng,
  };

  const final = {
    lat: finalPos.lat,
    lng: finalPos.lng,
  };

  const distanceBetween = {
    lat: (actual.lat - final.lat) / steps,
    lng: (actual.lng - final.lng) / steps,
  };

  const route = [];

  for (let i = 0; i < steps; i++) {
    route.push({
      lat: (actual.lat -= distanceBetween.lat),
      lng: (actual.lng -= distanceBetween.lng),
    });
  }

  return route;
}

console.log(generateRoute());
