import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
import QRCodeReader from "./app/components/QRCodeReader";
import Test from "./app/components/Test";
import Presentation from "./app/components/Presentation";


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class Home extends Component<{}> {

  constructor() {
    super();

    logging = "false";
  }

  componentDidMount() {
    logging: this.retrieveData();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#1e88e5",
      elevation: null
    },
    header: null
  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');

    return value
  };

  render() {

    if(logging == "true") {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1e88e5" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1e88e5" />
          <HomeScreen navigation={this.props.navigation} />
        </View>
      );
    }
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
        title: "HomeScreen"
      },
  },
  Presentation: {
    screen: Presentation,
    navigationOptions: {
        title: "Presentation"
      },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  QRCodeReader: {
    screen: QRCodeReader
  },
  Test: {
    screen: Test
  },
});

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
