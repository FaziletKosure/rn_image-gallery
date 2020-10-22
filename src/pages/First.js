import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const number = 55;
const First = (props) => {
  const [userName, setUserName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 40, textAlign: 'center'}}>First Hello</Text>
      <Text style={{fontSize: 40, textAlign: 'center'}}>{number}</Text>
      <TextInput value={userName} onChange={(text) => setUserName(text)} />
      <Button
        title="Go!"
        onPress={() =>
          props.navigation.navigate('SecondPage', {
            myNumber: number,
          })
        }
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({});
