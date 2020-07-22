import React, { useState } from "react";
import {
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { FEED_QUERY } from "./HomeQueries";
import { useQuery } from "react-apollo-hooks";
import Post from "../../components/Post/Post";

const Home = () => {
  const { loading, data, refetch } = useQuery(FEED_QUERY);
  console.log("data", data);
  const [refreshing, setRefreshing] = useState(false);

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
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        data.seeFeed && (
          <FlatList
            data={data.seeFeed}
            refreshing={refreshing}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={refresh} />
            }
            renderItem={({ item }) => {
              return <Post post={item} key={item.id} />;
            }}
          />
        )
      )}
    </View>
  );
};

export default Home;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
