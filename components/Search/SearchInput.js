import React, { useState } from "react";
import {} from "react-native";
import styled from "styled-components/native";
import constants from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SEARCH_BY_USER, SEARCH_BY_POST } from "./SearchQueries";
import { useQuery } from "react-apollo-hooks";
import useInput from "../../hooks/useInput";

const Container = styled.View`
  width: ${constants.width};
  flex-direction: row;
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  margin-bottom: 25px;
  background-color: #efeeef;
`;

const Input = styled.TextInput`
  background-color: lightgrey;
  height: 35px;
  border-radius: 10px;
  width: 85%;
  padding-left: 40px;
  margin: 0 10px;
  font-size: 18px;
  color: grey;
`;

const SearchInput = ({ setUserResult, setPostResult, setLoading }) => {
  const [value, setValue] = useState("");

  const { data: UserData, refetch: UserRefetch } = useQuery(SEARCH_BY_USER, {
    variables: {
      name: value,
      fetchPolicy: "network-only",
    },
  });

  const { data: PostData, error: PostError, refetch: PostRefetch } = useQuery(
    SEARCH_BY_POST,
    {
      variables: {
        title: value,
        fetchPolicy: "network-only",
      },
    }
  );

  const handleSearch = async () => {
    setUserResult(null);
    setLoading(true);
    setPostResult(null);
    try {
      if (value !== "") {
        await PostRefetch({ variables: { title: value } });
        setPostResult(PostData);
        await UserRefetch({ variables: { name: value } });
        setUserResult(UserData);
      } else {
        setUserResult(null);
        setPostResult(null);
      }
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Ionicons
        style={{ position: "absolute", marginLeft: 20, zIndex: 10 }}
        name="ios-search"
        size={24}
        color="grey"
      />
      <Input
        placeholder="Search"
        keyboardType="default"
        textContentType="name"
        returnKeyType="search"
        value={value}
        onChangeText={(text) => setValue(text)}
        onSubmitEditing={() => handleSearch()}
        autoCapitalize="none"
      />
      <MaterialCommunityIcons
        style={{ height: 24 }}
        name="qrcode-scan"
        size={24}
        color="black"
      />
    </Container>
  );
};

export default SearchInput;
