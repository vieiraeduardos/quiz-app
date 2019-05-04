import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#D95D39",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return (
      
    );
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
