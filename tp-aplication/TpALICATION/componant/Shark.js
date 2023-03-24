import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

export default function SharkDescrption(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Image  style={styles.img}  source={props.img}/>
      <Text style={styles.skill}>{props.firstSkill}</Text>
      <Text style={styles.skill}>{props.secondSkill}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#0e3657',
    alignItems  : 'center',
    borderWidth : 1 ,
    border : 'solid' ,
    marginVertical : 2,
    marginHorizontal : 5 ,
    borderColor : '#08c1ff',
},
  img : {
    
      flex : 1,
      height : 150,
      width : 150,
      maxWidth :150 ,
      borderRadius : 100,
      marginTop : 5,
      marginLeft : 5,
      // textAlign:'left'
  
},
  name : {
    
    color : '#eaa03a',
    fontSize : 24,
    marginBottom : 5 
  
  
},
  skill : {
    
    color : 'white',
    fontSize : 24,
    marginBottom : 5 
  
  
},

})