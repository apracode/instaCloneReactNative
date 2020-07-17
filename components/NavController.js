import React from "react";
import { View } from "react-native";
import { useAuthContext } from "../AuthContext";
import TabNavigation from "../navigation/TabNavigation";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

const NavController = () => {
  const { isLoggedIn } = false;
  // useAuthContext()
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};

export default NavController;
