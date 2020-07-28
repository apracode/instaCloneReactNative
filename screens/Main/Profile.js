import React, { useState, useEffect } from "react";
import {
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE, SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileDetails from "../../components/Profile/ProfileDetails";

const Profile = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(SEE_MY_PROFILE);

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
        data.myProfile && (
          <ProfileDetails navigation={navigation} myProfile={data.myProfile} />
        )
      )}
    </ScrollView>
  );
};

export default Profile;
