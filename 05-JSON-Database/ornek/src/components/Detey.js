
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Button from './Button';


const Detay = ({data}) =>{
  const {containerStyle,subContainerStyle} = styles;
  return(
    <View style={containerStyle}>
      <View style={titleStyle}>
        <Text>{data.title}   </Text>
      <View>


      <View style={ImageStyle}>
        <Image style={ImageStyle} source={{url: data.image}} />
      <View>


      <View style={subcontainerStyle}>
        <Button onPress={() =>Linking.openURL(data.url)}>Satın Al</Button>
      <View>

    </View>
  );
}

const styles = {

  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomnWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation:1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },

  subContainerStyle: {
    borderBottomnWidth:1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },

  ImageStyle:{
    height:300,
    flex:1,
  },

  titleStyle:{
    fontSize: 18,
  }

};

export default Detay;
