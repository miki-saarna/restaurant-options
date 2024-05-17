import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchbarEl = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
`;

export const Search = () => {
  const { keyword, onSearch } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    onSearch(searchKeyword);
  }, []);

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
    </SearchContainer>
  );
};
