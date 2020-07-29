import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import { HeaderBackButton } from "@react-navigation/stack";

const PhotoTab = createMaterialTopTabNavigator();

const PhotoTabs = () => {
  return (
    <PhotoTab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{ style: { backgroundColor: "#efeeef" } }}
    >
      <PhotoTab.Screen
        options={{ title: "Library" }}
        name="Select"
        component={SelectPhoto}
      />
      <PhotoTab.Screen
        options={{ title: "Photo" }}
        name="Take"
        component={TakePhoto}
      />
    </PhotoTab.Navigator>
  );
};

const PhotoStack = createStackNavigator();

const PhotoNavigation = () => {
  return (
    <PhotoStack.Navigator>
      <PhotoStack.Screen
        options={{ title: "", headerStyle: { backgroundColor: "#efeeef" } }}
        name="PhotoTabs"
        component={PhotoTabs}
      />
      <PhotoStack.Screen
        options={{ title: "", headerStyle: { backgroundColor: "#efeeef" } }}
        name="Upload"
        component={UploadPhoto}
      />
    </PhotoStack.Navigator>
  );
};

export default PhotoNavigation;
