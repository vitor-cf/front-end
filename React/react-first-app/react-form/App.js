import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from './components/header';
import Main from './components/main'; 

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>Bem vindo !</Text> 
      <View style={styles.btnStyle}>
      <Button 
      title='SIGN UP'
      color="white"
      onPress={() => navigation.navigate(('Form'))} 
      />
      </View>
      
    </View>
  );
}  

function DetailsScreen() {
  return (
    <View>
      <Header/>
      <Main/>
    </View>
  );
}

const Stack = createNativeStackNavigator(); 

function App() {
  return (
    <NavigationContainer style={styles.containerNav}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title: 'Início',
          headerStyle: {
          backgroundColor:'#8968CD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          }
        }}
        />
        <Stack.Screen name="Form" component={DetailsScreen} 
        options={{
          title: 'Formulário',
          headerStyle: {
            backgroundColor:'#8968CD',
          }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },
      
    textHome: {
      alignItems:'center',
      color:'black',
      fontSize: 40,
      fontWeight:'600'
    },
    btnStyle: {
      marginTop: 20,
        width:'80%',
        justifyContent:'center',
        backgroundColor:'#8968CD',
        borderRadius:10
    }
}); 
      


export default App;
 


    
