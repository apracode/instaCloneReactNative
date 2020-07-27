import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 130px;
  background-color: green;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
`;

const AvatarContainer = styled.View`
  width: 30%;
  background-color: blue;
`;
const Avatar = styled.Image`
  background-color: red;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

const NumsContainer = styled.View`
  width: 70%;
  background-color: blue;
  height: 100px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const NumberContainer = styled.View``;
const Num = styled.Text``;
const NumTitle = styled.Text``;

const AvatarAndFollowers = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <NumsContainer>
        <NumberContainer>
          <Num>1233</Num>
          <NumTitle>posts</NumTitle>
        </NumberContainer>
        <NumberContainer>
          <Num>342</Num>
          <NumTitle>followers</NumTitle>
        </NumberContainer>
        <NumberContainer>
          <Num>243</Num>
          <NumTitle>following</NumTitle>
        </NumberContainer>
      </NumsContainer>
    </Container>
  );
};

export default AvatarAndFollowers;
