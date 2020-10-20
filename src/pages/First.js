import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
const number=55;
const First = (props) => {
    return (
        <View>
            <Text style={{fontSize:40, textAlign: 'center',} }>First Hello</Text>
    <Text style={{fontSize:40, textAlign: 'center',} }>{number}</Text>
            <Button title="Go!" onPress={()=>props.navigation.navigate('SecondPage',{
                myNumber:number
            })}/>
        </View>
    )
}

export default First

const styles = StyleSheet.create({})
