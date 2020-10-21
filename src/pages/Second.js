import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Second = (props) => {
    const userNumber=props.route.params.myNumber;
    const myName=props.route.params.myUserName;
    return (
        <View>
            <Text>Second</Text>
            <Text>Number:{userNumber}</Text>
            <Text>userName:{myName}</Text>
            <Button title='Back' onPress={()=>props.navigation.goBack()}/>
        </View>
    )
}

export default Second

const styles = StyleSheet.create({})
