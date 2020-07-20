import React, { useState } from "react";
import { View, Text } from "react-native";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (text) => {
    setValue(text);
  };
  return { value, onChange, setValue };
};

export default useInput;
