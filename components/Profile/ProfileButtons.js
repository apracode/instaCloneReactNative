import React, { useState } from "react";
import styled from "styled-components/native";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../Mutations/ProfileMutation";
import { useMutation } from "react-apollo-hooks";

const Container = styled.View`
  margin: 10px 20px;
`;

const TreeButContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;
const Button = styled.TouchableOpacity`
  background-color: #f7f7f7;
  border-radius: 4px;
  border-color: #cfcfcf;
  border-width: 1px;
  padding: 5px;
  width: 30%;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
`;

const ProfileButtons = ({ myProfile, following, userId }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [followUserMutaton] = useMutation(FOLLOW_USER, {
    variables: {
      id: userId,
    },
  });
  const [unfollowUserMutaton] = useMutation(UNFOLLOW_USER, {
    variables: {
      id: userId,
    },
  });
  const handleFollow = async () => {
    setIsFollowing(true);
    console.log(await followUserMutaton());
    try {
      await followUserMutaton();
    } catch (error) {
      console.log("Try follow", error);
    }
  };

  const handleUnFollow = async () => {
    setIsFollowing(false);
    console.log(await unfollowUserMutaton());

    try {
      await unfollowUserMutaton();
    } catch (error) {
      console.log("Try unfollow", error);
    }
  };

  //   const handleFollow = async () => {
  //     console.log("HERE");
  //     if (isFollowing === true) {
  //       setIsFollowing(false);
  //       try {
  //         await unfollowUserMutaton();
  //         console.log("Try unfollow");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       setIsFollowing(true);
  //       try {
  //         await followUserMutaton();
  //         console.log("Try follow");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  return (
    <Container>
      {myProfile ? (
        <Button style={{ width: "100%" }}>
          <ButtonText>Edit Profile</ButtonText>
        </Button>
      ) : null}
      <TreeButContainer>
        {myProfile ? (
          <>
            <Button>
              <ButtonText>Promotions</ButtonText>
            </Button>
            <Button>
              <ButtonText>Statistic</ButtonText>
            </Button>
            <Button>
              <ButtonText>Email</ButtonText>
            </Button>
          </>
        ) : (
          <>
            {isFollowing ? (
              <Button onPress={() => handleUnFollow()}>
                <ButtonText style={{ fontSize: 14 }}>Following</ButtonText>
              </Button>
            ) : (
              <Button
                onPress={() => handleFollow()}
                style={{ backgroundColor: "#1c68ff" }}
              >
                <ButtonText style={{ fontSize: 14 }}>Follow</ButtonText>
              </Button>
            )}
            <Button>
              <ButtonText>Message</ButtonText>
            </Button>
            <Button>
              <ButtonText>Email</ButtonText>
            </Button>
          </>
        )}
      </TreeButContainer>
    </Container>
  );
};

export default ProfileButtons;
