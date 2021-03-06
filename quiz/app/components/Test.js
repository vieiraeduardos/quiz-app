import React, { Component } from "react";
import { AppRegistry, StyleSheet, Image, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Header, Container, Left, Text,  Body, Icon, Button, Right, Title, Card, CardItem, Badge } from "native-base";

import { StackNavigator } from "react-navigation";

import Question from "./Question";

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
  };

  constructor(props){
    super(props);
    this.state ={ dataSource: []}
  }

  componentDidMount(){
    return fetch('https://gist.githubusercontent.com/vieiraeduardos/3be38803c48bb92ca3cd88ff5c85131e/raw/e0d418aa314b1e7e32016f2431b09f98f0db9cdf/test.json')
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

        <ScrollView>

          <FlatList
            data={this.state.dataSource}
            renderItem={ ({item}) => <Question question={item} /> }
            keyExtractor={ ({id}, index) => "ID" + index }
          />


          <Button block success style={{ margin: 10, marginLeft: 40, marginRight: 40}}
            onPress={() => {
              this.props.navigation.navigate("QRCodeReader");
            }}
            >
            <Text>Finalizar</Text>
          </Button>

        </ScrollView>
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
