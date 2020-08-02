import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

const PostImage = ({ files }) => {
  return (
    <View>
      <Swiper
        style={{ height: 450 }}
        paginationStyle={{ marginBottom: -60, position: "absolute" }}
        dotColor="lightgrey"
        dotStyle={{ height: 6, width: 6 }}
        activeDotStyle={{ height: 6, width: 6 }}
        loop={false}
      >
        {files.map((item) => {
          return (
            <Image
              key={item.id}
              style={{ width: "100%", height: "100%" }}
              source={{ uri: item.url }}
              height={450}
            />
          );
        })}
      </Swiper>
    </View>
  );
};

export default PostImage;
