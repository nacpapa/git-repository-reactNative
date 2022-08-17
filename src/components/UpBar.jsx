import React from "react";
import { View, ViewPropTypes, StyleSheet } from "react-native";
import { StyledText } from "./StyledText";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.primearyText,
    paddingHorizontal: 10,
  },
});

const UpBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

export const UpBar = () => {
  return (
    <View style={styles.container}>
      <UpBarTab to='/' active>
        Repositories
      </UpBarTab>
      <UpBarTab to='/signin' active>
        Sign In
      </UpBarTab>
    </View>
  );
};
