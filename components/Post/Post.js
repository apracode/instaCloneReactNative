import React from "react";
import styled from "styled-components/native";
import constants from "../../constants";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
import { TouchableOpacity } from "react-native-gesture-handler";

const PostContainer = styled.View`
  width: ${constants.width};
`;

const Likes = styled.Text`
  margin-left: 10px;
  font-weight: 600;
  font-size: 14px;
`;

const CaptureName = styled.Text`
  margin-left: 10px;
  font-weight: 600;
  font-size: 14px;
`;
const Capture = styled.Text`
  margin-left: 5px;
  font-size: 14px;
`;

const CaptureContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const Text = styled.Text`
  margin-left: 10px;
  margin-top: 5px;
  color: grey;
`;

const Post = ({ post }) => {
  return (
    <PostContainer>
      <PostHeader
        name={post.user.name}
        avatar={post.user.avatar}
        location={post.location}
      />
      <PostImage files={post.files} />
      <PostFooter
        postId={post.id}
        isLiked={post.isLiked}
        likeCountProp={post.likeCount}
      />
      <Likes>Likes: {post.likeCount}</Likes>
      <CaptureContainer>
        <TouchableOpacity>
          <CaptureName>{post.user.name}</CaptureName>
        </TouchableOpacity>
        <Capture>{post.caption}</Capture>
      </CaptureContainer>
      {
        <TouchableOpacity>
          <Text>See all comments ({post.comments.length})</Text>
        </TouchableOpacity>
      }
    </PostContainer>
  );
};

export default Post;
