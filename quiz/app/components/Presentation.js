import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Container, Thumbnail, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import { StackNavigator } from "react-navigation";

export default class Test extends Component {
  static navigationOptions = {
    title: 'Voltar',
    headerStyle: {
      backgroundColor: "#1e88e5",
      elevation: null,
      color: "#fff"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    header: null
  };

  constructor(props){
    super(props);
    this.state ={ dataSource: []}
  }

  componentDidMount(){
    return fetch('https://gist.githubusercontent.com/vieiraeduardos/3be38803c48bb92ca3cd88ff5c85131e/raw/f65f8a9c989277085cde934e8d4a454308e890b5/test.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.questions,
        }, function(){

        });

      })
      .catch((error) =>{
        this.setState({
          dataSource: JSON.stringify(error),
        }, function(){

        });
      });
  }

  render() {
    return (

      <Container>
        <Header hasTabs androidStatusBarColor="#1e88e5" style={{ backgroundColor: "#1e88e5"}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}

            >
              <Icon type="MaterialIcons" name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Voltar</Title>
          </Body>
        </Header>

        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require("./logo.png")} />
              <Body>
                <Text>Algoritmos Quiz</Text>
                <Text note>Ciência da Computação</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent
                onPress={() => {
                  this.props.navigation.navigate("Test");
                }}
              >
                <Text>Responder</Text>
              </Button>
            </Left>

            <Right>
              <Text>Duração: 30 min</Text>
            </Right>
          </CardItem>
        </Card>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
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
