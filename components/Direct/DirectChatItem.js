import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const DirectChatItem = ({ messagess, participants, myId }) => {
  const user = participants[0].id === myId ? participants[1] : participants[0];
  console.log(participants);
  return (
    <Container>
      <AvatarContainer>
        {user.avatar ? (
          <Avatar source={{ uri: user.avatar }} />
        ) : (
          <Ionicons
            style={{ paddingHorizontal: 10 }}
            name="ios-contact"
            size={60}
            color="black"
          />
        )}
      </AvatarContainer>
      <UserInfoContainer>
        <UserName>
          {user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.firstName
            ? user.firstName
            : user.lastName
            ? user.lastName
            : user.name}
        </UserName>
        <Message>{messagess[messagess.length - 1].text}</Message>
      </UserInfoContainer>
      <PhotoIcon>
        <Feather name="camera" size={24} color="grey" />
      </PhotoIcon>
    </Container>
  );
};

export default DirectChatItem;

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin: 5px 0;
`;

const AvatarContainer = styled.View`
  width: 20%;
`;
const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  padding: 0 15px;
  align-self: center;
`;

const UserInfoContainer = styled.View`
  width: 70%;
`;
const UserName = styled.Text`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 15px;
`;
const Message = styled.Text`
  font-size: 14px;
  color: #8a8a8a;
`;

const PhotoIcon = styled.View``;
