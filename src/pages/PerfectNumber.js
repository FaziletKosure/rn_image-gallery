import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

const PerfectNumber = () => {
  const [number, setNumber] = useState('');
  const [isPerfect, setIsPerfect] = useState(false);

  function perfect_num(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
      if (num % i == 0) {
        result += i;
      }
    }

    result == num ? setIsPerfect(true) : setIsPerfect(false);
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 25,
        }}>
        Check Perfect Number
      </Text>
      <TextInput
        style={styles.textInput}
        value={number}
        onChangeText={(val) => setNumber(val)}
      />
      <TouchableOpacity
        style={{
          borderRadius: 25,
          margin: 5,
          backgroundColor: '#005662',
          width: '40%',
        }}
        onPress={() => perfect_num(number)}>
        <Text style={styles.text}>Check</Text>
      </TouchableOpacity>
      {isPerfect && (
        <Text style={styles.text_per}>it is a perfect number 😎</Text>
      )}
      {!isPerfect && (
        <Text style={styles.text_per}>it is not a perfect number</Text>
      )}
    </View>
  );
};

export {PerfectNumber};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4fb3bf',
  },
  textInput: {
    // borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 15,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#e5ffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 7,
    color: 'white',
    alignSelf: 'center',
    padding: 5,
  },
  text_per: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
});
