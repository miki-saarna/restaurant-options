import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context.js";
import { LocationContextProvider } from "./src/services/location/location.context.js";

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

const TabsComponent = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <TabsComponent />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
