import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MySharkList } from './data.js/sharks'
import SharkDescrption from './Shark'


export default function listeShark() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>liste de nos membres</Text>
        <FlatList data={MySharkList}
        keyExtractor={(item)=>item.id}
        renderItem={(itemdata) => {
            return(
                <SharkDescrption name={itemdata.item.name} img={itemdata.item.img} firstSkill={itemdata.item.skill1} secondSkill={itemdata.item.skill2}/>
            )
        }}
        
        
        
        />


    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    backgroundColor : '#0e3657',
    } ,
    name : {
        textAlign : 'center',
        color : '#eaa03a',
        fontSize : 24,
        marginBottom : 10 
    } ,
})