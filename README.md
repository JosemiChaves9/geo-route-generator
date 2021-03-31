# OVERVIEW

This is a library to calculate a route between two coordinates.
It will return an array with all the points specified between two coordinates

---

# INSTALLATION

`npm i geo-route-genrator`

---

# USAGE

`import generateRoute from "geo-route-generator"`

This library only have one method `generateRoute()` with three parameters in it:

- StartPosition
- FinalPosition
- Steps

At **StartPosition** and **FinalPosition** you need to pass a object with _lat_ and _lng_ which are the coordinates of the two points you'll be calculating the distance between.

```
const startPos = {
    lat: 25.248726,
    lng: -2.189138
}
```

For the **Steps** parameter you need to specify how many points you route will have, if you put 1000 then the lbrary will return an array with 1000 entries.

```
    const startPos = {
    lat: 45.385348723467,
    lng: -72.644464557683,
  };

  const finalPos = {
    lat: 29.384348971766,
    lng: -85.526861831764,
  };

  const steps = 1000;

  const route = generateRoute(startPos, finalPos, steps);

  // Will return
  // [{
    "lat": 43.785248748296894,"lng": -73.93270428509109},
    ...,
    {"lat": 35.78474887244638,"lng": -80.37390292213158},
    ...,
    {"lat": 29.384348971765974,"lng": -85.52686183176397}]
```

---

# Testing

There's unit testing implemented, there's four use cases in where the coordinates have different scenarios, you can test it with

`npm test`

or

`yarn test`

---

# OTHER SOURCES

You can give it a ★ in [GitHub](https://github.com/JosemiChaves9/geo-route-generator)!
