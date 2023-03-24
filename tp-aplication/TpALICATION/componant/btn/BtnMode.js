import { Pressable,StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function BtnMode(props) {
  return (
    <Pressable style={styles.btn} onPress={props.switchMode}>
       
      <Text>changer de mode</Text>
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