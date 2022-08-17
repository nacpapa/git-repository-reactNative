import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import { UpBar } from "./UpBar";
import { Route, Routes, Redirect } from "react-router-native";

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <UpBar />
      <Routes>
        <Route exact path='/' element={<RepositoryList />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/*' element={<RepositoryList />} />
      </Routes>
    </View>
  );
};

const SignIn = () => {
  return (
    <View>
      <Text>Working on it</Text>
    </View>
  );
};
