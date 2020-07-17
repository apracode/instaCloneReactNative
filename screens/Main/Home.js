import React from 'react'
import { Text } from 'react-native'
import styled from "styled-components/native";


const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;