import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)``;

const RestaurantCover = styled(Card.Cover)`
  border-bottom-left-radius: ${(props) => props.theme.space[0]};
  border-bottom-right-radius: ${(props) => props.theme.space[0]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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

  const RatingArray = () => {
    return [...Array(Math.ceil(rating))].map((_, i) => {
      return <SvgXml xml={star} height={20} width={20} />;
    });
  };

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            <RatingArray />
          </Rating>
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              CLOSED TEMPORARILY
            </Text>
          )}
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
          </Spacer>
          <Spacer poisition="left" size="large">
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
