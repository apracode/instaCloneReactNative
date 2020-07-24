import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE, SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const Profile = ({ navigation, route }) => {
  const { userId } = route.params;

  const { loading, data } = useQuery(SEE_PROFILE, {
    variables: {
      id: userId,
    },
  });

  const user = data.seeProfile.user;
  return (
    <View>
      <ProfileHeader title={user.name} />
    </View>
  );
};

export default Profile;

const View = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
