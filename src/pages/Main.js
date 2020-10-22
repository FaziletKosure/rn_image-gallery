import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Main = (props) => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Main</Text>
      <Button
        title="Go!"
        onPress={() => props.navigation.navigate('PostPage')}
      />
    </View>
  );
};

export {Main};

const styles = StyleSheet.create({});
