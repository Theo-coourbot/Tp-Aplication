import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import BtnMode from '../btn/BtnMode'
import BtnCancel from '../btn/btnCancel'
import BtnConect from '../btn/btnDeConnection'
import { useDispatch } from 'react-redux'
import { signInAction, signUpAction } from '../../store/AuthSlice'


export default function ModalAuth(props) {
    const [mode, setMode] = useState(true)
    const [emailTxt, setEmailTxt] = useState('')
    const [mdpTxt, setMdpTxt] = useState('')
    const dispatch = useDispatch()
    const close = () => {
       
        props.closeModal()
    }
    const switchMode = () => {
        setMode(!mode)
        // console.log('coucou');
    }
    const changemailText = (textentrer) => {
        console.log(textentrer)
        setEmailTxt(textentrer)
    }
    const changeMdpText = (textentrer) => {
        console.log(textentrer)
        setMdpTxt(textentrer)
    }
    const conect = () => {
        // console.log('coucou');
        // const stockInfo = {
        //     emailTxt,
        //     mdpTxt,
        //     returnSecureToken: true

        // }
        const mail = emailTxt
        const mdp = mdpTxt
        setEmailTxt('')
        setMdpTxt('')

        if(!mode){
            console.log('insc' + mode)
            props.signUp(mail,mdp)
            props.closeModal()
            // console.log('coucouinsc')
        }else {
            // console.log('conect' + mode)
            // console.log('coucouconec')
            props.signIn(mail,mdp)
            props.closeModal()
        }
    }
  
    
  
  return (
    <Modal visible={props.visible}>
       
    <View  style={styles.container}>
      {!mode ? <Text  style={styles.title}>Inscrption</Text> : <Text  style={styles.title}>connexion</Text>}
      <View style={styles.imgContainer}>
      <View>
        <Text  style={styles.title}>avant</Text>
        <Image source={require('../../img/requinRenard.png')} style={styles.img}/>
      </View>
      <View>
        <Text  style={styles.title}>Apres</Text>
        <Image source={require('../../img/grandrequinblanc.png')} style={styles.img}/>
      </View>
      </View>
        <Text  style={styles.text}>Passe du requin renard au grand requin blanc en moins de 1 mois alors inscris toi. </Text>
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='mon email' onChangeText={changemailText} value={emailTxt}/>
        <TextInput style={styles.input} placeholder='mon mdp' onChangeText={changeMdpText}  value={mdpTxt}/>
        </View>
        <View style={styles.btnContainer}>
      <BtnMode  switchMode={switchMode}/>
      <BtnCancel  close={close}/>
      <BtnConect mode={mode} conect={conect} />
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 2, 
        backgroundColor : '#0e3657',
  


    },
    input : {
        backgroundColor : '#eaa03a' , 
        textAlign : 'center' ,
        maxWidth :'80%',
        width : '80%',
        marginBottom : 20,




    },
    imgContainer : {
        flex : 1 ,
        flexDirection : 'row',
        marginVertical : 10 , 
        justifyContent : 'space-around'




    },
    btnContainer : {
        flex : 1, 
        flexDirection : 'row' ,
        justifyContent : 'space-around'





    },
    inputContainer : {
        flex : 1, 
        alignItems : 'center',
        marginTop : 20,
        // backgroundColor : 'red',





    },
    text : {
        color : 'white',
        textAlign : 'center',
        fontSize : 19 ,





    },
    title : {
        color : 'white',
        fontSize : 24 ,
        textAlign : 'center' ,



    },
    img : {
        height : 100,
        width : 200



    },



})