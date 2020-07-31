import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, RefreshControl } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { ScrollView } from "react-native";

const UserProfile = ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { userId } = route.params;
  const { loading, data, refetch } = useQuery(SEE_PROFILE, {
    variables: {
      id: userId,
    },
  });

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
    <ScrollView
      refreshing={refreshing}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        data &&
        data.seeProfile && <ProfileDetails userProfile={data.seeProfile} />
      )}
    </ScrollView>
  );
};

export default UserProfile;

const View = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
