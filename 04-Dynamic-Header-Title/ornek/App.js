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
import Header from './src/components/Header';

// Component bölümü
const App = () => (
    <Header headerText={'Anasayfa'} />
);

// render bölümü
AppRegistry.registerComponent('ornekproje', () => App);
