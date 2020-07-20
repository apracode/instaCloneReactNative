import React, { useState } from "react";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import styled from "styled-components/native";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LogIn = ({ navigation }) => {
  const { value, onChange } = useInput("");
  const [loading, setLoading] = useState(false);

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: value,
    },
  });

  const hadleLogIn = async () => {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email can't be empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an email");
    } else if (!emailReg.test(value)) {
      return Alert.alert("Email is not valid");
    }

    try {
      setLoading(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation();

      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: value });
        return;
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Sign Up");
      }
    } catch (e) {
      console.log("ERROR", e);
      Alert.alert("Can't log in now");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          value={value}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChange={onChange}
          returnKeyType="go"
          onSubmitEditing={hadleLogIn}
        />
        <AuthButton loading={loading} onPress={hadleLogIn} text="Log In" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogIn;
