import React, { useState } from "react";
import {} from "react-native";
import styled from "styled-components/native";
import constants from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SEARCH_BY_USER } from "./SearchQueries";
import { useQuery } from "react-apollo-hooks";
import useInput from "../../hooks/useInput";

const Container = styled.View`
  width: ${constants.width};
  flex-direction: row;
  flex: 1;
  /* justify-content: center; */
  align-items: center;
  position: relative;
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

const SearchInput = ({ setResult, setLoading }) => {
  const [value, setValue] = useState("");

  // const searchInput = useInput("");
  const [fetch, setFetch] = useState(false);

  const { loading, data, error, refetch } = useQuery(SEARCH_BY_USER, {
    variables: {
      name: value,
      skip: !fetch,
      fetchPolicy: "network-only",
    },
  });

  // console.log(data);

  const handleSearch = async () => {
    try {
      setFetch(true);
      setLoading(true);
      await refetch({ variables: { name: value } });
      setResult(data);
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setFetch(false);
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
