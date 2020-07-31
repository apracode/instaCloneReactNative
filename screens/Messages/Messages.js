import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useQuery } from "react-apollo-hooks";
import { SEE_ROOMS } from "../../Queries/MessageQueries";
import DirectChatItem from "../../components/Direct/DirectChatItem";
import { SEE_MY_PROFILE } from "../../Queries/ProfileQueries";

const Messages = () => {
  const { data: dataRooms, loading } = useQuery(SEE_ROOMS);
  const { data: dataMyProfile } = useQuery(SEE_MY_PROFILE);

  const myId = dataMyProfile.myProfile.user.id;

  return (
    <>
      <Text>sadasdas</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        dataRooms.seeRooms && (
          <FlatList
            style={{ height: "100%" }}
            data={dataRooms.seeRooms}
            renderItem={({ item }) => {
              return (
                <DirectChatItem participants={item.participants} myId={myId} />
              );
            }}
          />
        )
      )}
    </>
  );
};

export default Messages;
