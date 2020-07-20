import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 10px;
`;
const Input = styled.TextInput`
  width: ${constants.width / 1.7};
  padding: 10px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid ${(props) => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  value,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "default",
  onChange,
  returnKeyType = "default",
  onSubmitEditing = () => null,
}) => {
  return (
    <Container>
      <Input
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChangeText={onChange}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

AuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AuthInput;
