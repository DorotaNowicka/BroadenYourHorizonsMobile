import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SelectScreen from "../screens/SelectScreen";
import DiscoverScreen from "../screens/DiscoverScreen";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SelectScreen"
      options={{ headerShown: false }}
      component={SelectScreen}
    />
    <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
