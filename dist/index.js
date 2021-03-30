'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.generateRoute = void 0;
function generateRoute(actualPos, finalPos, steps) {
  var actual = {
    lat: actualPos.lat,
    lng: actualPos.lng,
  };
  var final = {
    lat: finalPos.lat,
    lng: finalPos.lng,
  };
  var distanceBetween = {
    lat: (actual.lat - final.lat) / steps,
    lng: (actual.lng - final.lng) / steps,
  };
  var route = [];
  if (
    isNaN(actualPos.lat) ||
    isNaN(actualPos.lng) ||
    isNaN(finalPos.lat) ||
    isNaN(finalPos.lng)
  ) {
    throw Error('Data introduced is not a number');
  } else {
    for (var i = 0; i < steps; i++) {
      route.push({
        lat: (actual.lat -= distanceBetween.lat),
        lng: (actual.lng -= distanceBetween.lng),
      });
    }
    return route;
  }
}
exports.generateRoute = generateRoute;
