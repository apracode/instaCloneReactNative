import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "../screens/Auth/LogIn";
import SignUp from "../screens/Auth/SignUp";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";

const AuthStack = createStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Home" component={AuthHome} />
        <AuthStack.Screen name="Sign Up" component={SignUp} />
        <AuthStack.Screen name="Log In" component={LogIn} />
        <AuthStack.Screen name="Confirm" component={Confirm} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
export default AuthNavigation;
