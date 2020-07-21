import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";
import constants from "../../constants";
import { TOGGLE_LIKE } from "./PostMutation";
import { useMutation } from "react-apollo-hooks";

const FooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostFooter = ({ postId, isLiked, likeCountProp }) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likeCountProp);
  const [toggleLikeMutaton] = useMutation(TOGGLE_LIKE, {
    variables: {
      postId: postId,
    },
  });
  const handleLike = async () => {
    if (isLiked === true) {
      setLikeCount((l) => l - 1);
    } else {
      setLikeCount((l) => l + 1);
    }
    setLiked((p) => !p);
    try {
      await toggleLikeMutaton();
      console.log(liked);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FooterContainer style={{ height: 50, justifyContent: "space-between" }}>
      <FooterContainer>
        {liked ? (
          <TouchableOpacity onPress={() => handleLike()}>
            <FontAwesome
              style={{ marginHorizontal: 10 }}
              name="heart"
              size={24}
              color="red"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handleLike()}>
            <FontAwesome
              style={{ marginHorizontal: 10 }}
              name="heart-o"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity>
          <FontAwesome
            style={{ marginHorizontal: 10 }}
            name="commenting-o"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={{ marginHorizontal: 10 }}
            name="paper-plane-o"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </FooterContainer>
      <FooterContainer>
        {/* <TouchableOpacity>
        <FontAwesome style={{ marginHorizontal: 15 }} name="bookmark" size={28} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <FontAwesome
            style={{ marginHorizontal: 15 }}
            name="bookmark-o"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </FooterContainer>
    </FooterContainer>
  );
};

export default PostFooter;
