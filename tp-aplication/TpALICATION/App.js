import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Accueil from './componant/Accueil'

import { Provider } from 'react-redux'
import store from './store/store'
import listeShark from './componant/ListeShark'
const Stack =createNativeStackNavigator()

export default function App() {
  // const Tab



  return (
    <Provider store={store}>
    <NavigationContainer  >
      <Stack.Navigator initialRouteName='Accueil'>
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown : false}}></Stack.Screen>
        <Stack.Screen  name="listeShark" component={listeShark} options={{title : 'Listes des requins membres'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}


const styles = StyleSheet.create({

})