import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Message from "../screens/Messages/Message";
import Messages from "../screens/Messages/Messages";

const MessageStack = createStackNavigator();

const MessageNavigator = () => {
  return (
    <MessageStack.Navigator mode="card">
      <MessageStack.Screen
        options={{ title: "" }}
        name="Message"
        component={Message}
      />
      <MessageStack.Screen
        options={{ title: "" }}
        name="Messages"
        component={Messages}
      />
    </MessageStack.Navigator>
  );
};

export default MessageNavigator;
