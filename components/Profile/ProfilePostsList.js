import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import constants from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProfilePostsList = ({ posts }) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={posts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PostDetailsComponent", {
                  screen: "PostDetails",
                  params: { post: item },
                });
              }}
            >
              <Image
                style={{
                  width: constants.width / 3,
                  height: constants.height / 5,
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
