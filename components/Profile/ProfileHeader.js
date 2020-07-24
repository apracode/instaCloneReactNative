import React from "react";
import { View, Text } from "react-native";

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
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 20 }}>{"title"}</Text>
    </View>
  );
};

export default ProfileHeader;
