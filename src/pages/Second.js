import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Second = (props) => {
    const userNumber=props.route.params.myNumber;
    return (
        <View>
            <Text>Second</Text>
            <Text>Number:{userNumber}</Text>
            <Button title='Back' onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}

export default Second

const styles = StyleSheet.create({})
