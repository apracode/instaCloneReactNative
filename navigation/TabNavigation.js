import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Main/Home";
import Search from "../screens/Main/Search";
import Profile from "../screens/Main/Profile";
import Notifications from "../screens/Main/Notifications";
import MessagesLink from "../components/MessagesLink";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={({ navigation }) => ({
          headerRight: () => <MessagesLink />,
          title: "Home",
        })}
        name="HomeScreen"
        component={Home}
      />
    </HomeStack.Navigator>
  );
};

const SearchStack = createStackNavigator();
const SearchComponent = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{
          title: "Search",
        }}
        name="SearchScreen"
        component={Search}
      />
    </SearchStack.Navigator>
  );
};

const NotificationsStack = createStackNavigator();
const NotificationsComponent = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        options={{
          title: "Notifications",
        }}
        name="NotificationsScreen"
        component={Notifications}
      />
    </NotificationsStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileComponent = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{
          title: "Profile",
        }}
        name="ProfileScreen"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          alignContent: "center",
          justifyContent: "center",
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen name="HomeComponent" component={HomeComponent} />
      <Tab.Screen name="Search" component={SearchComponent} />
      <Tab.Screen
        name="Add"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNav");
          },
        })}
        component={View}
      />
      <Tab.Screen name="Notification" component={NotificationsComponent} />
      <Tab.Screen name="Profile" component={ProfileComponent} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
