import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;

const AvatarContainer = styled.View`
  width: 30%;
`;
const Avatar = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 50px;
`;

const NumsContainer = styled.View`
  width: 65%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const NumberContainer = styled.View`
  align-items: center;
`;
const Num = styled.Text`
  font-weight: 600;
  font-size: 17px;
`;
const NumTitle = styled.Text`
  font-size: 14px;
`;

const AvatarAndFollowers = ({ avatar, posts, followers, following }) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={{ uri: avatar }} />
      </AvatarContainer>
      <NumsContainer>
        <NumberContainer>
          <Num>{posts}</Num>
          <NumTitle>Posts</NumTitle>
        </NumberContainer>
        <NumberContainer>
          <Num>{followers}</Num>
          <NumTitle>Followers</NumTitle>
        </NumberContainer>
        <NumberContainer>
          <Num>{following}</Num>
          <NumTitle>Following</NumTitle>
        </NumberContainer>
      </NumsContainer>
    </Container>
  );
};

export default AvatarAndFollowers;
