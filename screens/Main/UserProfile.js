import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE, SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileDetails from "../../components/Profile/ProfileDetails";

const UserProfile = ({ navigation, route }) => {
  console.log(route.params);
  const { userId } = route.params;
  const { loading, data, error } = useQuery(SEE_PROFILE, {
    variables: {
      id: userId,
    },
  });

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        data &&
        data.seeProfile && <ProfileDetails userProfile={data.seeProfile} />
      )}
    </>
  );
};

export default UserProfile;

const View = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
