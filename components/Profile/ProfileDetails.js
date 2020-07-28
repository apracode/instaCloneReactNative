import React, { useState } from "react";
import { View, Text } from "react-native";
import ProfileHeader from "./ProfileHeader";
import AvatarAndFollowers from "./AvatarAndFollowers";
import ProfileBio from "./ProfileBio";
import ProfileButtons from "./ProfileButtons";

const ProfileDetails = ({ myProfile, userProfile }) => {
  const profile = myProfile ? myProfile : userProfile;
  const [followersCount, setFollowersCount] = useState(
    profile.user.followers.length
  );
  console.log(profile);
  return (
    <>
      {myProfile ? <ProfileHeader title={profile.user.name} /> : null}
      <AvatarAndFollowers
        avatar={profile.user.avatar}
        posts={profile.posts.length}
        followers={followersCount}
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
      <ProfileButtons
        following={profile.user.amIFollowing}
        myProfile={myProfile}
        userId={profile.user.id}
        setFollowersCount={setFollowersCount}
      />
    </>
  );
};

export default ProfileDetails;
