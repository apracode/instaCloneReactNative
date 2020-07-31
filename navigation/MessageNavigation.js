import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";
import { AntDesign } from "@expo/vector-icons";
const MessageStack = createStackNavigator();

const MessageNavigator = () => {
  return (
    <MessageStack.Navigator mode="card">
      <MessageStack.Screen
        options={({ navigation }) => ({
          title: "Direct",
          headerStyle: {
            backgroundColor: "#efeeef",
          },
          headerLeft: () => (
            <AntDesign
              style={{ marginHorizontal: 10 }}
              name="left"
              size={24}
              color="black"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
        name="Messages"
        component={Messages}
      />
      <MessageStack.Screen
        options={{ title: "" }}
        name="Message"
        component={Message}
      />
    </MessageStack.Navigator>
  );
};

export default MessageNavigator;
