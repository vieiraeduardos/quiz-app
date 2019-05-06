import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Button, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Header, Left, Body, Icon, Right, Title, Card, CardItem, Badge } from "native-base";

import { StackNavigator } from "react-navigation";

import Question from "./Question";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#D95D39",
      elevation: null
    },
    header: null
  };

  constructor(props){
    super(props);
    this.state ={ dataSource: []}
  }


  render() {
    return (
      <ScrollView>
        <Header style={styles.header}>
          <Body>
            <Title>Quiz</Title>
          </Body>
        </Header>

      <View style={styles.container}>
        <Button
          style={styles.buttonText}
          onPress={() => {
            this.props.navigation.navigate("QRCodeReader");
          }}
          title="Ler QR Code"
          >
        </Button>

        <Button
          style={styles.buttonText}
          onPress={() => {
            this.props.navigation.navigate("Test");
          }}
          title="Ver Teste"
          >
        </Button>
      </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D95D39"

  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200
  },
  subtext: {
    color: "black",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    backgroundColor: 'blue',
    color: 'white'
  },
  button: {
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});


AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
