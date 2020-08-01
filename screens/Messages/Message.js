import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useKeyboard } from "react-native-keyboard-height";
import { FlatList } from "react-native-gesture-handler";
import MessageItem from "../../components/Direct/MessageItem";

const Message = ({ route }) => {
  const { messagess, myId } = route.params;

  const [margin, setMargin] = useState(0);
  const [textMessage, setTextMessage] = useState("");

  console.log(messagess);
  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.91, backgroundColor: "white" }}>
            <FlatList
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                paddingVertical: 5,
              }}
              data={messagess}
              renderItem={({ item, index }) => {
                if (
                  item.from.id === myId &&
                  messagess[index + 1] &&
                  messagess[index + 1].from.id !== myId
                ) {
                  return (
                    <MessageItem last key={index} text={item.text} fromMe />
                  );
                }
                if (item.from.id === myId) {
                  return <MessageItem key={index} text={item.text} fromMe />;
                }
                if (
                  item.from.id !== myId &&
                  messagess[index + 1] &&
                  messagess[index + 1].from.id === myId
                ) {
                  return <MessageItem last key={index} text={item.text} toMe />;
                } else {
                  return <MessageItem key={index} text={item.text} toMe />;
                }
              }}
            />
          </View>
          <InputContainer
            style={{
              flex: 0.09,
              backgroundColor: "white",
              marginBottom: margin,
            }}
          >
            <CameraIconContainer>
              <Entypo name="camera" size={22} color="white" />
            </CameraIconContainer>
            {textMessage !== "" ? (
              <SendButtonContainer>
                <SendButton>
                  <SendButtonText>Send</SendButtonText>
                </SendButton>
              </SendButtonContainer>
            ) : (
              <TreeIconsContainer>
                <FontAwesome5 name="microphone-alt" size={24} color="black" />
                <AntDesign name="picture" size={24} color="black" />
                <AntDesign name="pluscircle" size={24} color="black" />
              </TreeIconsContainer>
            )}

            <Input
              placeholder="Send message..."
              onFocus={() => setMargin(80)}
              onBlur={() => setMargin(0)}
              value={textMessage}
              onChangeText={(text) => setTextMessage(text)}
            />
          </InputContainer>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Message;

const Input = styled.TextInput`
  height: 40px;
  margin: 5px 10px;
  padding: 5px 0;
  padding-left: 45px;
  border-radius: 50px;
  background-color: white;
  border-width: 1px;
  border-color: rgb(230, 230, 230);
  font-size: 16px;
`;

const CameraIconContainer = styled.View`
  background-color: #3897f0;
  height: 35px;
  width: 35px;
  border-radius: 50px;
  position: absolute;
  z-index: 5;
  margin: 7.5px 13px;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View``;

const TreeIconsContainer = styled.View`
  height: 35px;
  position: absolute;
  z-index: 5;
  margin: 7.5px 13px;
  flex-direction: row;
  right: 10px;
  width: 25%;
  align-items: center;
  justify-content: space-between;
`;

const SendButtonContainer = styled.View`
  position: absolute;
  right: 15px;
  align-items: center;
  z-index: 5;
  height: 35px;
  flex-direction: row;
  margin: 7.5px 13px;
`;

const SendButton = styled.TouchableOpacity`
  align-self: center;
`;

const SendButtonText = styled.Text`
  color: #3897f0;
  font-weight: 600;
  font-size: 17px;
`;
