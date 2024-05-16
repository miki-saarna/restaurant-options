import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  transformRestaurants,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [location, setLocation] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (geoLoc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(geoLoc)
        .then(transformRestaurants)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants(location);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        setLocation,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
