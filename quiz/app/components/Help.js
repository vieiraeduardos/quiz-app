import React from 'react';
import {View} from "react-native";
import {Form, Thumbnail, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";


export default class Help extends React.PureComponent {

    render() {
      return (
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
              <Button transparent>
                <Icon active type="MaterialIcons" name="search" />
                <Text>Visualizar</Text>
              </Button>
            </Left>

            <Right>
              <Text>11h atrás</Text>
            </Right>
          </CardItem>
        </Card>
      );
    }

}
