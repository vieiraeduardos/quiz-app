import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, FlatList, Alert, TextInput } from "react-native";

import { StackNavigator } from "react-navigation";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#D95D39",
      elevation: null
    },
    headerLeft: null
  };

  constructor(props){
    super(props);
    this.state ={ dataSource: []}
  }

  componentDidMount(){
    return fetch('https://gist.githubusercontent.com/vieiraeduardos/3be38803c48bb92ca3cd88ff5c85131e/raw/d8edd8abd57d3add93f47064ac9cf187da849aef/test.json')
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
      <View style={{flex: 1, paddingTop:20}}>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={({id}, index) => "a" + index}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
