import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList,Dimensions } from 'react-native'
import imageGallery from './src/image_gallery.json'
import {ImageCard} from './src/ImageCard'


const App = () => {
  const [imageList, setImageList] = useState([])
  const renderListItem = ({ item }) => <ImageCard image={item} />
  useEffect(() => {
    setImageList(imageGallery)
}, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
        <Text style={styles.banner}>Image Gallery</Text>
        <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={imageGallery}
            renderItem={renderListItem}
            numColumns={2}
        />
    </View>
</SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  banner: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
},
})
