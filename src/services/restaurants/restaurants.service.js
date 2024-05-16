import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

// (async () => {
//   console.log("init");
//   try {
//     const res = await restaurantsRequest();
//     console.log("res", res);
//   } catch (err) {
//     console.error("err", err);
//   }
// })();

export const transformRestaurants = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    // console.log(restaurant.photos);
    if (!restaurant.photos.length) {
      restaurant.photos = [1, 2];
    }

    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
