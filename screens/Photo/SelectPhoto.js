import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

const SelectPhoto = () => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);

  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{hasPermission ? "Thanks" : "Oops"}</Text>
        </View>
      )}
    </View>
  );
};

export default SelectPhoto;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
