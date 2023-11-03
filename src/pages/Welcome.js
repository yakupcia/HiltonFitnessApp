import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

import Button from '../components/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hilton Fitnes</Text>
      <Button text="Sign İn" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Welcome;
