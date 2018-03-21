
//import bölümü
import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import Header from'./src/components/Header';
import Liste from'./src/components/Liste';


//komponent yazdığımız yer
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'Ornek Proje'}/>
        <liste />
      </View>
    );
  }
}

//render
AppRegistry.registerComponent('reactnative_notlari',() => App);
