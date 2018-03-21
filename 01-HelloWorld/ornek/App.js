/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
// import bölümü
import React, { Component } from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

// Component bölümü
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Text>
          Merhaba Dünya!
        </Text>
    );
  }
}

// render bölümü
AppRegistry.registerComponent('ornekproje', () => App);
