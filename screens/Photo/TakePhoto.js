import React, { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { Camera } from "expo-camera";
import constants from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const TakePhoto = ({ navigation }) => {
  const cameraRef = useRef();
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [canTakePhoto, setCanTakePhoto] = useState(true);

  const toggleCameraType = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front);
    } else {
      setCameraType(Camera.Constants.Type.back);
    }
  };

  const takePhoto = async () => {
    if (!canTakePhoto) {
      return;
    }
    try {
      setCanTakePhoto(false);
      const { uri } = await cameraRef.current.takePictureAsync({
        quality: 1,
      });
      const asset = await MediaLibrary.createAssetAsync(uri);
      navigation.navigate("Upload", { photo: asset });
      console.log(uri);
    } catch (error) {
      console.log(error);
      setCanTakePhoto(true);
    }
  };

  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === "granted") {
        setHasPermission(true);
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
    <>
      {loading ? (
        <ActivityIndicator />
      ) : hasPermission ? (
        <>
          <Camera
            ref={cameraRef}
            type={cameraType}
            style={{
              width: constants.width,
              height: constants.height / 2,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={toggleCameraType}>
              <MaterialIcons
                style={{ marginBottom: 10, marginRight: 10 }}
                name="switch-camera"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Camera>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                alignSelf: "center",
              }}
              onPress={takePhoto}
              disabled={!canTakePhoto}
            >
              <View
                style={{
                  alignSelf: "center",
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: "#efeeef",
                  borderWidth: 15,
                  borderColor: "grey",
                  borderStyle: "solid",
                }}
              ></View>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </>
  );
};

export default TakePhoto;

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
