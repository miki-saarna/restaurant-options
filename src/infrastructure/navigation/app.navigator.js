import React from "react";
import { Text } from "react-native";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";

const TAB_ICON = {
  Restaurants: { focused: "restaurant", unfocused: "restaurant-outline" },
  Map: { focused: "map", unfocused: "map-outline" },
  Settings: { focused: "settings", unfocused: "settings-outline" },
};

const screenOptions = ({ route }) => {
  const selectedIconGroup = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(selectedIconGroup),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const tabBarIcon =
  (iconGroup) =>
  ({ focused, color, size }) => {
    const iconName = focused ? iconGroup.focused : iconGroup.unfocused;
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const Settings = () => {
  return (
    <SafeArea>
      <Text>settings</Text>
    </SafeArea>
  );
};

const Map = () => {
  return (
    <SafeArea>
      <Text>map</Text>
    </SafeArea>
  );
};

export function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
