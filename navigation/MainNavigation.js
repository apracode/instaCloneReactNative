import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigations";
import MessageNavigator from "./MessageNavigation";

const MainStack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode={"modal"}>
        <MainStack.Screen
          options={{ title: "" }}
          name="Tab"
          component={TabNavigation}
        />
        <MainStack.Screen
          options={{ title: "" }}
          name="PhotoNav"
          component={PhotoNavigation}
        />
        <MainStack.Screen
          options={{ title: "" }}
          name="MessageNav"
          component={MessageNavigator}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
