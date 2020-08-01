import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useQuery } from "react-apollo-hooks";
import { SEE_ROOMS } from "../../Queries/MessageQueries";
import DirectChatItem from "../../components/Direct/DirectChatItem";
import { SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import { TouchableOpacity } from "react-native-gesture-handler";

const Messages = ({ navigation }) => {
  const { data: dataRooms, refetch, loading } = useQuery(SEE_ROOMS);
  const { data: dataMyProfile } = useQuery(SEE_MY_PROFILE);
  const [refreshing, setRefreshing] = useState(false);

  const myId = dataMyProfile.myProfile.user.id;

  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        dataRooms.seeRooms && (
          <FlatList
            refreshing={refreshing}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            style={{ height: "100%" }}
            data={dataRooms.seeRooms}
            renderItem={({ item }) => {
              console.log(item, "item");
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Message", {
                      messagess: item.messagess,
                      myId: myId,
                    })
                  }
                >
                  <DirectChatItem
                    messagess={item.messagess}
                    participants={item.participants}
                    myId={myId}
                  />
                </TouchableOpacity>
              );
            }}
          />
        )
      )}
    </View>
  );
};

export default Messages;
