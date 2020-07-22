import React, { useState } from "react";
import { Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import SearchInput from "../../components/Search/SearchInput";

const Search = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  console.log("result", result);
  return (
    <Container>
      <SearchInput setLoading={setLoading} setResult={setResult} />

      {result ? (
        <>
          {result.searchByUser.map((item) => {
            console.log("item", item);
            return (
              <Text
                style={{
                  marginVertical: 100,
                  color: "black",
                }}
              >
                {item.name}
              </Text>
            );
          })}
        </>
      ) : loading ? (
        <ActivityIndicator style={{ marginVertical: 150 }} />
      ) : null}
    </Container>
  );
};

export default Search;
const Container = styled.View`
  justify-content: flex-start;
  /* align-items: flex-start; */
  margin-top: 50px;
`;
