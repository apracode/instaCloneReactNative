import React from "react";
import { View, Text } from "react-native";
import ProfileHeader from "./ProfileHeader";
import AvatarAndFollowers from "./AvatarAndFollowers";
import ProfileBio from "./ProfileBio";

const ProfileDetails = ({ myProfile, userProfile }) => {
  const profile = myProfile ? myProfile : userProfile;
  console.log(profile);
  return (
    <>
      {myProfile ? <ProfileHeader title={profile.user.name} /> : null}
      <AvatarAndFollowers
        avatar={profile.user.avatar}
        posts={profile.posts.length}
        followers={profile.user.followers.length}
        following={profile.user.following.length}
      />
      <ProfileBio
        name={
          profile.user.firstName && profile.user.lastName
            ? `${profile.user.firstName} ${profile.user.lastName}`
            : profile.user.firstName
            ? `${profile.user.firstName}`
            : profile.user.lastName
            ? `${profile.user.lastName}`
            : null
        }
        bio={profile.user.bio ? profile.user.bio : null}
      />
    </>
  );
};

export default ProfileDetails;
