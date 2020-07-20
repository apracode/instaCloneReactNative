import React from "react";
import styled from "styled-components/native";
import Constants from "../../constants";
import { TouchableOpacity } from "react-native";
import AuthButton from "../../components/AuthButton";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${Constants.width / 2.5};
  height: 100;
`;

const Link = styled.View`
  margin-top: 25px;
`;
const LinkText = styled.Text`
  color: ${(props) => props.theme.blueColor};
  text-align: center;
  font-weight: 600;
`;

const AuthHome = ({ navigation }) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={require("../../assets/instagram.png")}
      />
      <AuthButton
        text="Create an account"
        onPress={() => navigation.navigate("Sign Up")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Log In")}>
        <Link>
          <LinkText>Log In</LinkText>
        </Link>
      </TouchableOpacity>
    </View>
  );
};



export default AuthHome;
