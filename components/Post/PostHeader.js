import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import constants from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Header = styled.View`
  width: ${constants.width};
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
`;
const PostHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image``;

const TextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const Location = styled.Text``;

const Name = styled.Text`
  font-weight: 700;
`;

const PostHeader = ({ avatar, name, location, user }) => {
  const navigation = useNavigation();
  return (
    <Header>
      <PostHeaderContainer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", {
              screen: "ProfileScreen",
              params: { userId: user },
            })
          }
        >
          {avatar ? (
            <Avatar
              style={{
                borderRadius: 50,
                height: 30,
                width: 30,
                marginHorizontal: 10,
              }}
              resizeMode="cover"
              source={{ uri: avatar }}
            />
          ) : (
            <Ionicons
              style={{ paddingHorizontal: 10 }}
              name="ios-contact"
              size={35}
              color="black"
            />
          )}
        </TouchableOpacity>
        <TextContainer>
          <TouchableOpacity>
            <Name>{name}</Name>
          </TouchableOpacity>
          {location ? (
            <TouchableOpacity>
              <Location>{location}</Location>
            </TouchableOpacity>
          ) : null}
        </TextContainer>
      </PostHeaderContainer>
      <PostHeaderContainer>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={{ paddingHorizontal: 15 }}
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </PostHeaderContainer>
    </Header>
  );
};

export default PostHeader;
