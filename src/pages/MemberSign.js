import {Alert, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function HandeSubmit() {
    if (
      !userName ||
      !userSurname ||
      !userPhone ||
      !userEmail ||
      !userPassword
    ) {
      Alert.alert('Hilton Fitness', 'cant be lef empty');
      return;
    }
    const user = {
      userName,
      userSurname,
      userPhone,
      userEmail,
      userPassword,
    };

    navigation.navigate('MemberResultScreen', {user});
    console.log(user);
  }

  return (
    <SafeAreaView>
      <Input
        title="Name "
        placeholder="Enter Your Name"
        onChangeText={setUserName}
      />
      <Input
        title="Surname"
        placeholder="Enter Your Surname"
        onChangeText={setUserSurname}
      />
      <Input
        title="Phone Number"
        placeholder="Enter Your Phone Number"
        onChangeText={setUserPhone}
      />
      <Input
        title="E-Mail"
        placeholder="Enter Your E-Mail"
        onChangeText={setUserEmail}
      />
      <Input
        title="Password"
        placeholder="Enter Your Password"
        onChangeText={setUserPassword}
      />
      <Button text="Sign Up" onPress={HandeSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
