import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TransactionScreen from "./screens/BookTransactionScreen";
import SearchScreen from "./screens/SearchScreen";

export default class App extends React.Component {
  render() {
    return <Text>WILY APP</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
