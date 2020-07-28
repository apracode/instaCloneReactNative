import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import constants from "../../constants";
import { useNavigation } from "@react-navigation/native";
import PostResult from "../Search/PostResult";

const ProfilePostsList = ({ posts, myProfile }) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        style={{ height: "100%" }}
        data={posts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={
                myProfile
                  ? () => {
                      navigation.navigate("Profile", {
                        screen: "ProfilePost",
                        params: { post: item },
                      });
                    }
                  : () => {
                      navigation.navigate("HomeComponent", {
                        screen: "UserProfilePost",
                        params: { post: item },
                      });
                    }
              }
            >
              <Image
                style={{
                  height: constants.height / 6,
                  width: constants.width / 3,
                }}
                source={{ uri: item.files[0].url }}
              />
            </TouchableOpacity>
          );
        }}
        numColumns={3}
      />
    </View>
  );
};

export default ProfilePostsList;
