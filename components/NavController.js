import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuthContext } from "../AuthContext";

const NavController = () => {
  const { isLoggedIn, logUserIn, logUserOut } = useAuthContext();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn === true ? (
        <TouchableOpacity onPress={logUserOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logUserIn}>
          <Text>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavController;
