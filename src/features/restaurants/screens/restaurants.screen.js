import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

export default function RestaurantsScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search restaurants"
          onChangeText={setSearch}
          value={search}
          style={styles.searchbar}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  searchbar: {
    borderRadius: 8,
  },
  list: {
    flexGrow: 1,
    padding: 16,
    // backgroundColor: "blue",
  },
});
