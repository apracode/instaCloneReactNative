import React, { useState } from "react";
import { Text, ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import SearchInput from "../../components/Search/SearchInput";
import { TabView, SceneMap } from "react-native-tab-view";
import constants from "../../constants";
import UserResult from "../../components/Search/UserResult";
import PostResult from "../../components/Search/PostResult";

const Search = () => {
  const [userResult, setUserResult] = useState();
  const [postResult, setPostResult] = useState();
  const [loading, setLoading] = useState(false);
  // console.log("userResult", userResult);
  console.log("postResult", postResult);

  return (
    <Container>
      <SearchInput
        setLoading={setLoading}
        setUserResult={setUserResult}
        setPostResult={setPostResult}
      />
      <ScrollView style={{ height: constants.height }}>
        {loading ? (
          <ActivityIndicator style={{ marginVertical: 150 }} />
        ) : userResult || postResult ? (
          <>
            {userResult ? (
              <>
                {userResult.searchByUser.map((item) => {
                  console.log("item", item);
                  return <UserResult user={item} />;
                })}
              </>
            ) : null}
            {postResult ? (
              <>
                {postResult.searchByPost.map((item) => {
                  console.log("item", item);
                  return <PostResult post={item} />;
                })}
              </>
            ) : null}
          </>
        ) : (
          <Text style={{ textAlign: "center", color: "grey" }}>
            Nothing found
          </Text>
        )}
      </ScrollView>
    </Container>
  );
};

export default Search;
const Container = styled.View`
  justify-content: flex-start;
  /* align-items: flex-start; */
  margin-top: 50px;
`;
