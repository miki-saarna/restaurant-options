import React, { useState, useContext } from "react";
import { Searchbar, ActivityIndicator } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchbarEl = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #00000040;
`;

export default function RestaurantsScreen() {
  const { restaurants, isLoading, error, setLocation } =
    useContext(RestaurantsContext);

  const [search, setSearch] = useState("");

  return (
    <SafeArea>
      <SearchContainer>
        <SearchbarEl
          placeholder="Search restaurants"
          onChangeText={setSearch}
          value={search}
        />
      </SearchContainer>
      {isLoading ? (
        <LoadingIndicatorContainer>
          <ActivityIndicator animation={true} color="tomato" size="large" />
        </LoadingIndicatorContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}
