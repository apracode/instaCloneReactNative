import React, { useState } from "react";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import styled from "styled-components/native";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM } from "../../Queries/AuthQueries";
import { useAuthContext } from "../../AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Confirm = ({ navigation, route }) => {
  const secretInput = useInput("");
  const emailInput = useInput("");
  const { logUserIn } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const { email } = route.params;

  const [confirmSecretMutation] = useMutation(CONFIRM, {
    variables: {
      email: email,
      secret: secretInput.value,
    },
  });

  const hadleConfirm = async () => {
    if (secretInput.value === "" || email === "") {
      return Alert.alert("Can't be empty");
    }
    try {
      setLoading(true);

      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();

      if (confirmSecret) {
        Alert.alert("Welcome");
        logUserIn(confirmSecret);
        return;
      } else {
        Alert.alert("Secret is wrong");
        navigation.navigate("Log In");
      }
    } catch (e) {
      console.log("ERROR", e);
      Alert.alert("Error. Incorrect secret key, try again or sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          value={secretInput.value}
          placeholder="Secret"
          autoCapitalize="none"
          onChange={secretInput.onChange}
          returnKeyType="go"
          onSubmitEditing={hadleConfirm}
        />
        <AuthInput
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          // onChange={emailInput.onChange}
          returnKeyType="go"
          onSubmitEditing={hadleConfirm}
        />
        <AuthButton loading={loading} onPress={hadleConfirm} text="Confirm" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Confirm;
