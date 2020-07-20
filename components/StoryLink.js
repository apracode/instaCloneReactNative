import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Container = styled.TouchableOpacity``;

const StoryLink = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("MessageNav")}>
      <Ionicons
        style={{ marginHorizontal: 15 }}
        name="md-camera"
        size={25}
        color="black"
      />
    </Container>
  );
};

export default StoryLink;
