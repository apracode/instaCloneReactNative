import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE, SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const Profile = ({ navigation, route }) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (route.params !== undefined) {
      const { userId } = route.params;
      console.log(userId);
      const { loading, data } = useQuery(SEE_PROFILE, {
        variables: {
          id: userId,
        },
      });
      setProfile(data);
    } else {
      const { loading: myProfileLoading, data: myProfileData } = useQuery(
        SEE_MY_PROFILE
      );
      setProfile(myProfileData);
    }
  }, []);

  console.log(profile);

  //   const user = data.seeProfile.user;
  return (
    <View>
      <ProfileHeader />
    </View>
  );
};

export default Profile;

const View = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
