import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)``;

export const RestaurantCover = styled(Card.Cover)`
  border-bottom-left-radius: ${(props) => props.theme.space[0]};
  border-bottom-right-radius: ${(props) => props.theme.space[0]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
