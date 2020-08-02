import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const MessageItem = ({ fromMe, toMe, text, last, avatar }) => {
  return (
    <View>
      <MessageContainer
        style={{
          backgroundColor: fromMe ? "#e6e6e6" : "white",
          alignSelf: fromMe ? "flex-end" : "flex-start",
          marginBottom: last ? 10 : 3,
          marginHorizontal: 10,
          marginLeft: toMe ? 45 : 0,
        }}
      >
        {last && toMe ? (
          <>
            {avatar ? (
              <Avatar source={{ uri: avatar }} />
            ) : (
              <Ionicons
                style={{
                  borderRadius: 50,
                  position: "absolute",
                  marginLeft: -40,
                  bottom: -5,
                }}
                name="ios-contact"
                size={35}
                color="black"
              />
            )}
          </>
        ) : null}
        <MessageText>{text}</MessageText>
      </MessageContainer>
    </View>
  );
};

export default MessageItem;

const MessageContainer = styled.View`
  /* margin: 5px 10px; */
  padding: 10px;
  max-width: 60%;
  align-self: flex-start;
  border-radius: 20px;
  border-width: 1px;
  border-color: #e6e6e6;
`;

const MessageText = styled.Text`
  font-size: 16px;
  line-height: 18px;
`;

const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  position: absolute;
  margin-left: -40px;
  bottom: -5px;
`;
