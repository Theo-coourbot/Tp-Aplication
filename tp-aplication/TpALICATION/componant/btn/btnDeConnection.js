import { Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function BtnConect(props) {
  return (
    <Pressable style={styles.btn} onPress={props.conect}>
      {props.mode ?<Text style={styles.text}>se connecter</Text> : <Text style={styles.text}>s'inscrire</Text> }
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