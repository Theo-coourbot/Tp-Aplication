import { Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function BtnLogin(props) {
  return (
    <Pressable style={styles.btn} onPress={props.openModal}>
      <Text style={styles.text}>BtnLogin</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn : {
        backgroundColor : "#ffc479",


        height : 20 , 
        borderRadius : 100,
        width : 80,
        marginTop : 10,
        marginEnd : 10
    },
    text : {
        // padding : 10,
        Colors : 'white',
        textAlign : 'center'
       
    },
})