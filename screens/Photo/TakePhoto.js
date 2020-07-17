import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TakePhoto = ({ navigation }) => {
  return (
    <View>
      <Text>TakePhoto</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
        <Text>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
