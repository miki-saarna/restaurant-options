import styled from "styled-components/native";
import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
`;

const SearchbarEl = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
`;

const DisclaimerContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[2]};
  border: 1px solid #c6e2ff;
  background-color: #ecf5ff;
`;

const DisclaimerText = styled.Text`
  color: #111827;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const validCities = ["Antwerp", "Chicago", "San Francisco", "Toronto"];

  return (
    <SearchContainer>
      <SearchbarEl
        placeholder="Search for a location"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => {
          onSearch(searchKeyword);
        }}
      />
      <DisclaimerContainer>
        <DisclaimerText>
          Search results currently only available for the following cities:
        </DisclaimerText>
        <FlatList
          data={validCities}
          renderItem={({ item }) => <DisclaimerText>- {item}</DisclaimerText>}
          keyExtractor={(item) => item}
        />
      </DisclaimerContainer>
    </SearchContainer>
  );
};
