import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Button.styles';

const Button = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
