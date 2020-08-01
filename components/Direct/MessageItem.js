import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const MessageItem = ({ fromMe, toMe, text, last }) => {
  return (
    <View>
      <MessageContainer
        style={{
          backgroundColor: fromMe ? "#e6e6e6" : "white",
          alignSelf: fromMe ? "flex-end" : "flex-start",
          marginBottom: last ? 10 : 3,
          marginHorizontal: 10,
        }}
      >
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
