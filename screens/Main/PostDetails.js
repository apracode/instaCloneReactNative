import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Post from "../../components/Post/Post";

const PostDetails = ({ route, navigation }) => {
  const { post } = route.params;
  return (
    <ScrollView style={{ height: "100%" }}>
      <Post post={post} />
    </ScrollView>
  );
};

export default PostDetails;
