import {Text, SafeAreaView} from 'react-native';
import React from 'react';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text>COMPLETED</Text>
      <Text> {user.userName} </Text>
      <Text> {user.userSurname} </Text>
      <Text> {user.userPhone} </Text>
      <Text> {user.userEmail} </Text>
      <Text> {user.userPassword} </Text>
    </SafeAreaView>
  );
};

export default MemberResult;
