import React from "react";
import { View, Text } from "react-native";

const Message = ({ route }) => {
  const { messagess } = route.params;
  console.log(messagess)
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

export default Message;
