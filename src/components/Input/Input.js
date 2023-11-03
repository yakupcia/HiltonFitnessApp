import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({onChangeText, title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default Input;
