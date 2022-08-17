import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StyledText } from "./StyledText";

export const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {parseThousand(props.forksCount)}
        </StyledText>
        <StyledText align='center'>Forks:</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {parseThousand(props.stargazersCount)}
        </StyledText>
        <StyledText align='center'>Stargazer:</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {parseThousand(props.reviewCount)}
        </StyledText>
        <StyledText align='center'>Review cont:</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>
          {props.ratingAverage}
        </StyledText>
        <StyledText align='center'>Rating:</StyledText>
      </View>
    </View>
  );
};

const parseThousand = (num) => {
  return num >= 1000 ? `${Math.round(num / 100) / 10}k` : String(num);
};
