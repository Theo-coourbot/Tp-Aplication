import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BtnLogin from './btn/BtnLogin'
import ModalAuth from './modal/ModalAuth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import BtnSignOut from './btn/BtnSignOut'

export default function Accueil({navigation}) {
    const [modalIsVisible,setModalIsVisible] = useState(false) 
    const [isLogged,setIsLogged] = useState(false)
    const [name,setName] = useState('')
    const deco = async () => {
        // setIsLogged(false)
       
        try {
            await AsyncStorage.removeItem('key')
            setIsLogged('false')
            setName('')
        }catch (error) {
            console.log(error)
        }
    
    }
    useEffect(() => {
        
          getData()
        
         
      },[isLogged])

    const openModal = () =>{
        // console.log('coucou');
        setModalIsVisible(true)
    }
    const closeModal = () =>{
        // console.log('coucou');
        setModalIsVisible(false)
    }
    const signUp = async (name,mdp) => {
        // console.log(mail,mdp)
        // console.log('coucou')
        //   const test =  await dispatch(signUpAction(stockInfo))
        const value = JSON.stringify({status : 'true', name : name})
        try{
            await AsyncStorage.setItem('key',value)
        }catch (error) {
            console.log(error)
        }
        
        setName(name)
        setIsLogged('true')
        // setIsLogged(true)
    }
    const signIn = async (name,mdp) => {
        const value = JSON.stringify({status : 'true', name : name})
        try{
            await AsyncStorage.setItem('key',value)
        }catch (error) {
            console.log(error)
        }
        
        // console.log('coucou2')
        // await dispatch(signInAction(stockInfo))
        setName(name)
        setIsLogged('true')
      }
        const getData = async () => {
        try {
          const value =  await AsyncStorage.getItem('key')
          const tab = JSON.parse(value)
          if(value !== null) {
            setIsLogged(tab.status)
            setName(tab.name)
          }
        }catch (error) {
            console.log(error)
        }
    }







  return (
    <>
    <ModalAuth visible={modalIsVisible} navigation={navigation} closeModal={closeModal} signUp={signUp} signIn={signIn} />
    <View style={styles.containerAccueil}>
    <View style={styles.container}>
        <Image style={styles.img} source={require('../img/logoAileron.png')}/>
        <View style={styles.textContainer}>
      <Text style={styles.firstText}>Fitness</Text>
       <Text style={styles.secondeText}>Shark</Text>
      </View>
     {isLogged == 'true' ? <BtnSignOut deco={deco} name={name}/>  :<BtnLogin openModal={openModal}/>}
    </View>
    <View  style={styles.maincontainer}>
    <Image source={require('../img/logoRequin.png')} style={styles.mainImg}></Image>
    </View>
    {isLogged == 'true' &&<Button title='Ici tu peux voir les requin membre' onPress={()=> navigation.navigate("listeShark")}  />}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    containerAccueil : {
        flex : 1,
        backgroundColor : '#0e3657',
    },
    
    container : {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'row',
    } ,
    img : {
        flex : 1,
        height : 50,
        width : 50,
        maxWidth :50 ,
        borderRadius : 100,
        marginTop : 5,
        marginLeft : 5,
        // textAlign:'left'
    } ,
    textContainer : {
        
        flex : 2,
        flexDirection : 'row',
        marginLeft : 50,
        marginTop : 5,

    } ,
    firstText : {
        color : '#eaa03a',
        fontSize : 24,
        marginHorizontal : 10,
        
    } ,
    secondeText: {
        color : '#00a2e2',
        fontSize : 24,
     
    } ,
    maincontainer : {
        flex : 2,
     
        alignItems : 'center',
        
    } ,
    mainImg : {
        // flex : 1,
        // padding : 20,
        height : 260,
        width : 260,
        borderRadius : 10,
        alignItems : 'center',
        backgroundColor : '#08c1ff'
        
        
    } ,
})