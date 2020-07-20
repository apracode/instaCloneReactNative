import React, { useState } from "react";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import styled from "styled-components/native";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { SIGN_UP, LOG_IN } from "./AuthQueries";
import * as Facebook from "expo-facebook";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FBContainer = styled.View`
  margin-top: 10;
`;

const SignUp = ({ navigation }) => {
  const userNameInput = useInput("");
  const emailInput = useInput("");
  const firstNameInput = useInput("");
  const lastNameInput = useInput("");

  const [loading, setLoading] = useState(false);

  const [createAccountMutation] = useMutation(SIGN_UP, {
    variables: {
      name: userNameInput.value,
      email: emailInput.value,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      bio: "",
    },
  });
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: emailInput.value,
    },
  });

  const hadleSignUp = async () => {
    const userNameReg = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (userNameInput.value === "" || emailInput.value === "") {
      return Alert.alert("Email and username can't be empty");
    } else if (
      !emailReg.test(emailInput.value) ||
      !userNameReg.test(userNameInput.value)
    ) {
      return Alert.alert("Email or username is not valid");
    }

    try {
      setLoading(true);
      await createAccountMutation();
      const {
        data: { requestSecret },
      } = await requestSecretMutation();
      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: emailInput.value });
        return;
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Sign Up");
      }
    } catch (e) {
      console.log("ERROR", e);
      Alert.alert("User with the same name or email is signed up");
    } finally {
      setLoading(false);
    }
  };

  const fbLogin = async () => {
    try {
      setLoading(true);
      await Facebook.initializeAsync("2474834596074755");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,last_name,first_name,email`
        );
        const { email, first_name, last_name } = await response.json();
        emailInput.setValue(email);
        firstNameInput.setValue(first_name);
        lastNameInput.setValue(last_name);
        userNameInput.setValue(email.split("@")[0]);
      } else {
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <AuthInput
            value={userNameInput.value}
            placeholder="Username"
            autoCapitalize="none"
            onChange={userNameInput.onChange}
            returnKeyType="go"
          />
          <AuthInput
            value={emailInput.value}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChange={emailInput.onChange}
            returnKeyType="go"
          />
          <AuthInput
            value={firstNameInput.value}
            placeholder="First name"
            autoCapitalize="none"
            onChange={firstNameInput.onChange}
            returnKeyType="go"
          />
          <AuthInput
            value={lastNameInput.value}
            placeholder="Last name"
            autoCapitalize="none"
            onChange={lastNameInput.onChange}
            returnKeyType="go"
          />
          <AuthButton loading={loading} onPress={hadleSignUp} text="Sign Up" />
          <FBContainer>
            <AuthButton
              loading={false}
              onPress={fbLogin}
              text="Sign up with FaceBook"
            />
          </FBContainer>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SignUp;
