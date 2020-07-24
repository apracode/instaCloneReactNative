import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigations";
import MessageNavigator from "./MessageNavigation";
import PostDetails from "../screens/Main/PostDetails";

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
        {/* <MainStack.Screen
          options={{ title: "" }}
          name="PostDetailsComponent"
          component={PostDatailsComponent}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}



export default MainNavigation;
