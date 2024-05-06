import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Title title={name} />
    </Card>
  );
}

const styles = StyleSheet.create({
  cover: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
