import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Post from "../../components/Post/Post";

const UserProfilePost = ({ route, navigation }) => {
  const { post } = route.params;
  console.log(post);
  return (
    <ScrollView style={{ height: "100%" }}>
      <Post post={post} />
    </ScrollView>
  );
};

export default UserProfilePost;
