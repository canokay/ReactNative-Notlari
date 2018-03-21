
import React from 'react';
import {
  Text,
} from 'react-native';

const Header = (props) => {
  const { textStyle} = styles;
  return(
    <View>
      <Text >{props.headerText} </Text>
    </View>

  );
};

const styles = {
  textStyle:{
    fontSize: 20
  },
  viewStyle{
    backgroudColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: {widht:0,height: 2},
    shadowOpacity: 0,2,
  }

};

export default Header;
