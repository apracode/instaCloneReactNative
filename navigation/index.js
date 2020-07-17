import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";

export default function AppNav() {
  return (
    <NavigationContainer>
      <AuthNavigation />
      <TabNavigation />
    </NavigationContainer>
  );
}
