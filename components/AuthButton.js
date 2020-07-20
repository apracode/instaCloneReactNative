import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Constants from "../constants";
import PropTypes from "prop-types";

const Button = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  margin: 0 50px;
  border-radius: 3px;
  width: ${Constants.width / 2};
`;
const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ onPress, text, loading = false }) => {
  return (
    <TouchableOpacity disabled={loading} onPress={onPress}>
      <Button>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <ButtonText>{text}</ButtonText>
        )}
      </Button>
    </TouchableOpacity>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default AuthButton;
