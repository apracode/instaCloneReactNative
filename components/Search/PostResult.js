import React from "react";
import { View, Text } from "react-native";
import constants from "../../constants";
import styled from "styled-components/native";

const Image = styled.Image`
  width: ${constants.width / 3};
  height: ${constants.height / 6};
`;

const PostResult = ({ post }) => {
  return (
    <>
      <Image source={{ uri: post.files[0].url }} />
    </>
  );
};

export default PostResult;
