import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  height: 55px;
  flex-direction: row;
  align-items: center;
  /* padding: 0 20px; */
`;

const AvatarContainer = styled.View``;

const Avatar = styled.Image``;

const CenterContainer = styled.View`
  flex-direction: row;
  align-self: flex-start;
  padding-top: 3px;
`;

const Name = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

const BottomCenterContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 3px;
`;

const BottomCenterText = styled.Text`
  color: grey;
  margin-right: 10px;
  font-weight: 500;
  font-size: 13px;
`;

const UserResult = ({ user }) => {
  return (
    <Container>
      <AvatarContainer>
        {user.avatar ? (
          <Avatar
            style={{
              borderRadius: 50,
              height: 45,
              width: 45,
              marginHorizontal: 15,
            }}
            resizeMode="cover"
            source={{ uri: user.avatar }}
          />
        ) : (
          <Ionicons
            style={{ paddingHorizontal: 15 }}
            name="ios-contact"
            size={52}
            color="black"
          />
        )}
      </AvatarContainer>
      <CenterContainer style={{ flexDirection: "column", marginTop: 5 }}>
        <CenterContainer style={{ width: 220 }}>
          <TouchableOpacity>
            <Name>{user.name} </Name>
          </TouchableOpacity>
        </CenterContainer>
        <BottomCenterContainer>
          <BottomCenterText>
            {user.firstName} {user.lastName}
          </BottomCenterText>
        </BottomCenterContainer>
      </CenterContainer>
    </Container>
  );
};

export default UserResult;
