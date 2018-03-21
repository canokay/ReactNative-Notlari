import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = () => {
  const { textStyle } = styles;
  return (
      <Text style={textStyle}> Anasayfa </Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

export default Header;
