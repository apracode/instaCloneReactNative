import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import MessageItem from "../../components/Direct/MessageItem";
import { useMutation, useSubscription } from "react-apollo-hooks";
import { SEND_MESSAGE, NEW_MESSAGE } from "../../Mutations/MessageMutation";
import withSuspense from "../../withSuspens";
import { SEE_ROOMS } from "../../Queries/MessageQueries";

const Message = ({ route }) => {
  const { messagess, myId, roomId, to } = route.params;
  console.log(roomId);

  // const [padding, setPadding] = useState(0);
  const [textMessage, setTextMessage] = useState("");

  const [chatFlex, setChatFlex] = useState(0.91);
  const [inputFlex, setInputFlex] = useState(0.09);

  const [sendMessageMutation] = useMutation(SEND_MESSAGE, {
    variables: {
      message: textMessage,
      roomId: roomId,
      to: to,
    },
  });

  const { data, error, loading } = useSubscription(NEW_MESSAGE, {
    variables: {
      roomId: roomId,
    },
  });
  const [messages, setMessages] = useState(messagess || []);

  const handleNewMessage = () => {
    if (data !== undefined && data.newMessage !== null) {
      const { newMessage } = data;
      setMessages((previous) => [...previous, newMessage]);
    }
  };
  useEffect(() => {
    handleNewMessage();
  }, [data]);

  console.log(data);

  const onSubmit = async () => {
    if (textMessage === "") {
      return;
    }
    try {
      setTextMessage("");
      await sendMessageMutation();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: chatFlex }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            style={{
              width: "100%",
            }}
            inverted={true}
            data={messages}
            renderItem={({ item, index }) => {
              if (
                item.from.id === myId &&
                messages[index - 1] &&
                messages[index - 1].from.id !== myId
              ) {
                return <MessageItem last key={index} text={item.text} fromMe />;
              }
              if (item.from.id === myId) {
                return <MessageItem key={index} text={item.text} fromMe />;
              }
              if (
                item.from.id !== myId &&
                messages[index - 1] &&
                messages[index - 1].from.id === myId
              ) {
                return (
                  <MessageItem
                    avatar={item.from.avatar}
                    last
                    key={index}
                    text={item.text}
                    toMe
                  />
                );
              } else {
                return <MessageItem key={index} text={item.text} toMe />;
              }
            }}
          />
        </TouchableWithoutFeedback>
      </View>

      <InputContainer
        style={{
          flex: inputFlex,
          backgroundColor: "white",
          // paddingBottom: padding,
        }}
      >
        <CameraIconContainer>
          <Entypo name="camera" size={22} color="white" />
        </CameraIconContainer>
        {textMessage !== "" ? (
          <SendButtonContainer>
            <SendButton onPress={() => onSubmit()}>
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
          onFocus={() => {
            setChatFlex(0.56);
            {
              /* setInputFlex(0.35); */
            }
          }}
          onBlur={() => {
            setChatFlex(0.91);
            setInputFlex(0.09);
          }}
          value={textMessage}
          onChangeText={(text) => setTextMessage(text)}
        />
      </InputContainer>
    </View>
  );
};

export default Message;

const Input = styled.TextInput`
  height: 40px;
  margin: 5px 10px;
  padding: 0 0 5px 0;
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
