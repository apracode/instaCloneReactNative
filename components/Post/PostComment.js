import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CommentContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.View`
  margin-top: 5px;
`;

const Avatar = styled.Image``;

const CenterContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;

const BottomCenterContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 3px;
`;

const BottomCenterItems = styled.Text`
  color: grey;
  margin-right: 10px;
  font-weight: 500;
  font-size: 13px;
`;

const Name = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;
const Comment = styled.Text`
  margin-left: 5px;
  font-size: 14px;
`;

const ContentContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
const HeartContainer = styled.View``;

const Text = styled.Text``;

const PostComment = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  return (
    <CommentContainer style={{ justifyContent: "space-between" }}>
      <ContentContainer>
        <AvatarContainer>
          {comment.user.avatar ? (
            <Avatar
              style={{
                borderRadius: 50,
                height: 30,
                width: 30,
                marginHorizontal: 15,
              }}
              resizeMode="cover"
              source={{ uri: comment.user.avatar }}
            />
          ) : (
            <Ionicons
              style={{ paddingHorizontal: 15 }}
              name="ios-contact"
              size={35}
              color="black"
            />
          )}
        </AvatarContainer>
        <CenterContainer style={{ flexDirection: "column", marginTop: 5 }}>
          <CenterContainer style={{ width: 220 }}>
            <Text>
              {/* <TouchableOpacity> */}
              <Name>{comment.user.name} </Name>
              {/* </TouchableOpacity> */}
              <Comment>{comment.text}</Comment>
            </Text>
          </CenterContainer>
          <BottomCenterContainer>
            <BottomCenterItems>2h</BottomCenterItems>
            <BottomCenterItems>2 Likes</BottomCenterItems>
            <BottomCenterItems>Reply</BottomCenterItems>
          </BottomCenterContainer>
        </CenterContainer>
      </ContentContainer>
      <HeartContainer style={{ marginHorizontal: 15 }}>
        {liked ? (
          <TouchableOpacity onPress={() => setLiked((liked) => !liked)}>
            <FontAwesome
              style={{ marginHorizontal: 10 }}
              name="heart"
              size={16}
              color="red"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setLiked((liked) => !liked)}>
            <FontAwesome
              style={{ marginHorizontal: 10 }}
              name="heart-o"
              size={16}
              color="black"
            />
          </TouchableOpacity>
        )}
      </HeartContainer>
    </CommentContainer>
  );
};

export default PostComment;
