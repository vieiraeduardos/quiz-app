import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Header, Left, Body, TabHeading, Text, Container, Icon, Tabs, Tab, Right, Button, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import Question from "./Question";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#3c8dbc",
      elevation: null
    },
    header: null
  };

  constructor(props){
    super(props);
  }

  async sair() {
    await AsyncStorage.setItem("email", "eduardo@gmail.com");
    await AsyncStorage.setItem("logging", "false");

    this.props.navigation.navigate("Login");

  }


  render() {
    return (
      <Container>
        <Header hasTabs androidStatusBarColor="#3c8dbc" style={{ backgroundColor: "#3c8dbc"}}>
          <Left>
            <Image style={{ width: 30, height: 30}} source={require("./logo.png")} />
          </Left>
          <Body>
            <Title>Quiz</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.sair.bind(this)}
            >
              <Icon type="MaterialIcons" name="exit-to-app" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#3c8dbc" }} ><Icon type="MaterialIcons" name="home" /><Text>Início</Text></TabHeading>}>
            <ScrollView>
              <Button block success style={{ margin: 10, marginLeft: 40, marginRight: 40}}
                onPress={() => {
                  this.props.navigation.navigate("QRCodeReader");
                }}
                >
                <Text>Ler QR Code</Text>
              </Button>
            </ScrollView>
          </Tab>
          <Tab heading={ <TabHeading style={{ backgroundColor: "#3c8dbc" }}><Icon type="Ionicons" name="ios-paper" /><Text>Testes</Text></TabHeading>}>
            <ScrollView></ScrollView>
          </Tab>

        </Tabs>

      </Container>
    );
  }

}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
