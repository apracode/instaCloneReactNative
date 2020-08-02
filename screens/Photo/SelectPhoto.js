import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, Image } from "react-native";
import styled from "styled-components/native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import constants from "../../constants";
import {
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";

const SelectPhoto = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();

  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync();
      const [firstPhoto] = assets;
      setSelected(firstPhoto);
      setAllPhotos(assets);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelected = () => {
    navigation.navigate("PhotoNav", {
      screen: "Upload",
      params: { photo: selected },
    });
  };

  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        setHasPermission(true);
        getPhotos();
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{
                  width: constants.width,
                  height: constants.height / 2,
                }}
                resizeMode={"contain"}
                source={{ uri: selected && selected.uri }}
              />
              <TouchableOpacity
                onPress={handleSelected}
                style={{
                  alignSelf: "center",
                  padding: 10,
                  backgroundColor: "#3897f0",
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "white" }}>Upload</Text>
              </TouchableOpacity>
              <FlatList
                data={allPhotos}
                numColumns={3}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity onPress={() => setSelected(item)}>
                      <Image
                        style={{
                          width: constants.width / 3,
                          height: constants.height / 6,
                          opacity: item.id === selected.id ? 0.5 : 1,
                        }}
                        source={{ uri: item.uri }}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </>
          ) : (
            <Text>"Oops"</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default SelectPhoto;

const View = styled.View`
  flex: 1;
`;
