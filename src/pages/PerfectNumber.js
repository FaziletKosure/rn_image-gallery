import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

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
      <TextInput
        style={styles.textInput}
        value={number}
        onChangeText={(val) => setNumber(val)}
      />
      <TouchableOpacity onPress={() => perfect_num(number)}>
        <Text style={styles.text}>Check</Text>
      </TouchableOpacity>
      {isPerfect && <Text>it is a perfect number</Text>}
      {!isPerfect && <Text>it is not a perfect number</Text>}
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
    backgroundColor: '#b2ebf2',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: '90%',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#e5ffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
