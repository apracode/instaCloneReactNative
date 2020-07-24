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
import StoryLink from "../components/StoryLink";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import SearchInput from "../components/Search/SearchInput";
import PostDetails from "../screens/Main/PostDetails";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={({ navigation }) => ({
          headerLeft: () => <StoryLink />,
          headerRight: () => <MessagesLink />,
          headerTitle: (
            <Image
              style={{ height: 45, width: 200 }}
              resizeMode="contain"
              source={require("../assets/instagram.png")}
            />
          ),
          headerStyle: {
            backgroundColor: "#efeeef",
          },
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
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen
        options={{ title: "" }}
        name="SearchScreen"
        component={Search}
      />
      <SearchStack.Screen
        options={{}}
        name="PostDetailsComponent"
        component={PostDatailsComponent}
      />
    </SearchStack.Navigator>
  );
};

const PostStack = createStackNavigator();
const PostDatailsComponent = () => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#efeeef",
          },
        }}
        name="PostDetails"
        component={PostDetails}
      />
    </PostStack.Navigator>
  );
};

const NotificationsStack = createStackNavigator();
const NotificationsComponent = () => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        options={{
          title: "Notifications",
          headerStyle: {
            backgroundColor: "#efeeef",
          },
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
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "#efeeef",
          },
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
          backgroundColor: "#efeeef",
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen
        name="HomeComponent"
        component={HomeComponent}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons name="home" size={30} color="black" />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color="black"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchComponent}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <FontAwesome
                style={{ height: 25 }}
                name="search"
                size={23}
                color="black"
              />
            ) : (
              <Ionicons
                style={{ height: 30 }}
                name="md-search"
                size={30}
                color="black"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Add"
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNav");
          },
        })}
        options={{
          tabBarLabel: () => (
            <Ionicons name="ios-add-circle-outline" size={30} color="black" />
          ),
        }}
        component={View}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsComponent}
        options={{
          tabBarLabel: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-heart" size={30} color="black" />
            ) : (
              <Ionicons name="md-heart-empty" size={30} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarLabel: () => (
            <Ionicons name="ios-contact" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
