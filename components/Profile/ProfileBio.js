import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 0 20px;
`;

const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Bio = styled.Text`
  font-size: 16px;
`;
const Blog = styled.Text`
  color: grey;
  font-size: 16px;
  margin-top:5px;
`;

const ProfileBio = ({ name, bio }) => {
  return (
    <Container>
      {name !== null ? <Name>{name}</Name> : null}
      <Blog>Personal Blog</Blog>
      {bio !== null ? <Bio>{bio}</Bio> : null}
    </Container>
  );
};

export default ProfileBio;
