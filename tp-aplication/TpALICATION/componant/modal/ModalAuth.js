import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
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
        <Button title='close' onPress={props.closeModal}/>
    <View>
        <Text>Passe du requin renard au grand requin blanc en moins de 1 mois alors inscris toi. </Text>
      {!mode ? <Text>Inscrption</Text> : <Text>connexion</Text>  }
        <TextInput  placeholder='mon email' onChangeText={changemailText} value={emailTxt}/>
        <TextInput placeholder='mon mdp' onChangeText={changeMdpText}  value={mdpTxt}/>
      <BtnMode  switchMode={switchMode}/>
      <BtnCancel  close={close}/>
      <BtnConect mode={mode} conect={conect} />
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})