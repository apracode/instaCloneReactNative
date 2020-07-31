import React, { useState } from "react";
import styled from "styled-components/native";
import axios from "axios";
import { Alert, ActivityIndicator } from "react-native";
import { UPLOAD_POST } from "../../Mutations/PostMutation";
import { useMutation } from "react-apollo-hooks";
import { FEED_QUERY } from "../../Queries/HomeQueries";
import { SEE_MY_PROFILE } from "../../Queries/ProfileQueries";

const UploadPhoto = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { photo } = route.params;
  const [caption, setCaption] = useState("");
  const [locationInput, setLocation] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const [uploadMutation] = useMutation(UPLOAD_POST, {
    refetchQueries: () => [
      {
        query: FEED_QUERY,
      },
      { query: SEE_MY_PROFILE },
    ],
  });

  const handleUpload = async () => {
    const formData = new FormData();
    const name = photo.filename;
    const [, type] = name.split(".");
    const uri = photo.uri;
    formData.append("file", {
      name: name,
      type: type.toLowerCase(),
      uri: uri,
    });

    try {
      setLoading(true);
      const {
        data: { location },
      } = await axios.post("http://192.168.0.106:4000/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log("location", location);
      const {
        data: { uploadPost },
      } = await uploadMutation({
        variables: {
          files: [location],
          caption: caption,
          location: locationInput,
        },
      });
      if (uploadPost.id) {
        navigation.navigate("Tab");
      }
      console.log(uploadPost);
    } catch (error) {
      Alert.alert("Can't upload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View>
        <ImageContaner>
          <Image source={{ uri: photo.uri }} />
        </ImageContaner>
        <InputsContainer>
          <Input
            value={caption}
            onChangeText={(text) => setCaption(text)}
            placeholder="Caption"
          />
          <Input
            value={locationInput}
            onChangeText={(text) => setLocation(text)}
            placeholder="Location"
            style={{ marginTop: 5 }}
          />
          <Button onPress={handleUpload}>
            <ButtonText>Upload</ButtonText>
          </Button>
        </InputsContainer>
      </View>
      {loading ? <ActivityIndicator style={{ marginVertical: 200 }} /> : null}
    </>
  );
};

export default UploadPhoto;

const View = styled.View`
  flex-direction: row;
  margin: 10px 10px;
  justify-content: space-between;
`;

const ImageContaner = styled.View`
  height: 100px;
  width: 30%;
`;

const Image = styled.Image`
  height: 100px;
  width: 100px;
`;

const InputsContainer = styled.View`
  height: 100px;
  width: 65%;
`;

const Input = styled.TextInput`
  height: 30px;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  width: 90%;
  color: black;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  height: 30px;
  margin-top: 5px;
  background-color: #3897f0;
  width: 60%;
  align-self: center;
  border-radius: 5px;
  padding: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;
