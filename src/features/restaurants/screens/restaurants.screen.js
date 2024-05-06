import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const SearchbarEl = styled(Searchbar)`
  border-radius: 8px;
`;

const RestaurantListContainer = styled.View`
  flexgrow: 1;
  padding: 16px;
`;

export default function RestaurantsScreen() {
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
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
