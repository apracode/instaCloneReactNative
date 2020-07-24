import React, { useState } from "react";
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
  const [likeCount, setLikeCount] = useState(post.likeCount);

  return (
    <PostContainer>
      <PostHeader
        user={post.user.id}
        name={post.user.name}
        avatar={post.user.avatar}
        location={post.location}
      />
      <PostImage files={post.files} />
      <PostFooter
        postId={post.id}
        isLiked={post.isLiked}
        likeCount={likeCount}
        setLikeCount={setLikeCount}
      />
      <Likes>Likes: {likeCount}</Likes>
      <CaptureContainer>
        <TouchableOpacity>
          <CaptureName>{post.user.name}</CaptureName>
        </TouchableOpacity>
        <Capture>{post.caption}</Capture>
      </CaptureContainer>
      {post.comments.length > 0 ? (
        <>
          <Text>See all comments ({post.comments.length})</Text>
        </>
      ) : null}
    </PostContainer>
  );
};

export default Post;
