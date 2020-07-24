import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileHeader = ({ title }) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#efeeef",
        width: "100%",
        paddingTop: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ width: 20 }}></View>
      <Text style={{ fontWeight: "600", fontSize: 20, textAlign: "center" }}>
        {title}
      </Text>
      <Ionicons name="ios-menu" size={27} color="black" />
    </View>
  );
};

export default ProfileHeader;
