import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 25px;
  text-align: center;
  color: black;
`;

const AuthHome = ({ navigation }) => {
  return (
    <View>
      <Text>AuthHome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Log In")}>
        <Text>Go to Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text>Go to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHome;
