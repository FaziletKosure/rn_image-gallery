import React from 'react'
import axios from 'axios'
import { Button, StyleSheet, Text, View } from 'react-native'
import Axios from 'axios'

export default function Fetch(props) {
    return (
        const fetchData_Then=()=>{
            let myData=[]
            console.log("starting fetch..");
            axios.get('https//json').then((response)=>{
                console.log(response);
                myData=response.data;
            })
            console.log(myData);
            console.log("end fetch..");
        }

        <View>
            <Text>Fetch</Text>
            <Button title="fetch data" onPress={fetchData_Then}/>
        </View>
    )
}

const styles = StyleSheet.create({})
