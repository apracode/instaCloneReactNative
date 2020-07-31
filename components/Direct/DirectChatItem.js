import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DirectChatItem = ({ participants, myId }) => {
  console.log(participants);
  const user = participants[0].id === myId ? participants[1] : participants[0];

  console.log(user);

  return (
    <Container>
      <AvatarContainer>
        {user.avatar ? (
          <Avatar source={{ uri: user.avatar }} />
        ) : (
          <Ionicons
            style={{ paddingHorizontal: 10 }}
            name="ios-contact"
            size={35}
            color="black"
          />
        )}
      </AvatarContainer>
      <UserInfoContainer>
        <UserName></UserName>
        <Message></Message>
      </UserInfoContainer>
      <PhotoIcon />
    </Container>
  );
};

export default DirectChatItem;

const Container = styled.View`
  background-color: green;
  width: 100%;
  flex-direction: row;
  padding: 0 10px;
`;

const AvatarContainer = styled.View`
  background-color: red;
  width: 20%;
`;
const Avatar = styled.Image`
  background-color: blue;
  height: 25px;
  width: 25px;
`;

const UserInfoContainer = styled.View`
  background-color: black;
`;
const UserName = styled.Text`
  background-color: yellow;
`;
const Message = styled.Text`
  background-color: pink;
`;

const PhotoIcon = styled.View`
  background-color: grey;
`;
