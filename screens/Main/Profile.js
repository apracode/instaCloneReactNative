import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useQuery } from "react-apollo-hooks";
import { SEE_PROFILE, SEE_MY_PROFILE } from "../../Queries/ProfileQueries";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileDetails from "../../components/Profile/ProfileDetails";

const Profile = () => {
  const { loading, data } = useQuery(SEE_MY_PROFILE);
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        data && data.myProfile && <ProfileDetails myProfile={data.myProfile} />
      )}
    </>
  );
};

export default Profile;
