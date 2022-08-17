import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import { RepositoryStats } from "./RepositoryStats";
import { StyledText } from "./StyledText";

const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image
          style={style.image}
          source={{ uri: props.ownerAvatarUrl }}></Image>
      </View>
      <View style={{ flex: 1, paddingLeft: 10, justifyContent: "center" }}>
        <StyledText fontSize='subheading' fontWeight='bold'>
          {props.fullName}
        </StyledText>
        <StyledText color='secondary'>{props.description}</StyledText>
        <StyledText style={style.language}>Lang: {props.language}</StyledText>
      </View>
    </View>
  );
};

export const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={style.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    marginTop: 4,
    marginBottom: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});
