import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, FlatList, Alert, TextInput } from "react-native";

import {Header, Left, Body, Button, Icon, Right, Title, Card, CardItem, Badge} from "native-base";

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
      <View style={{flex: 1}}>
        <Header>
          <Body>
            <Title>Quiz</Title>
          </Body>
        </Header>

        <FlatList
          data={this.state.dataSource}
          renderItem={ ({item}) => <Question question={item} /> }
          keyExtractor={ ({id}, index) => "ID" + index }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
