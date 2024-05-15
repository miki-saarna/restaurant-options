import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utils/safe-area.component";

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

export default function RestaurantsScreen() {
  const [search, setSearch] = useState("");
  const [restaurants, setRestaurants] = useState([
    {
      name: "Some Restaurant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "100 some random street",
      isOpenNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ]);

  return (
    <SafeArea>
      <SearchContainer>
        <SearchbarEl
          placeholder="Search restaurants"
          onChangeText={setSearch}
          value={search}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ restaurant }) => (
          <RestaurantInfoCard restaurant={restaurant} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
