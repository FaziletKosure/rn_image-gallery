import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableOpacity>
      <Image source={{uri: props.post.img}} />
      <Text>{props.post.userName}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
