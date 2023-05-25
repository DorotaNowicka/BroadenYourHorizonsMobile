import React from "react";
import Header from "./app/components/Header";
import SelectScreen from "./app/screens/SelectScreen";
import { ApolloProvider } from "@apollo/client";
import client from "./app/api/client";
import MainNavigator from "./app/navigation/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AppFormPicker from "./app/components/selection/AppFormPicker";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
