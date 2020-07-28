import React from "react";
import { View, Text } from "react-native";
import constants from "../../constants";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Image = styled.Image`
  width: ${constants.width / 3};
  height: ${constants.height / 6};
`;

const PostResult = ({ post }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PostDetailsComponent", {
            screen: "PostDetails",
            params: { post: post },
          });
        }}
      >
        <Image source={{ uri: post.files[0].url }} />
      </TouchableOpacity>
    </>
  );
};

export default PostResult;
