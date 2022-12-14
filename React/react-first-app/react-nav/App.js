import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
} 

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.containerDetails}>
      <Text>Details Screen</Text>
      <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      containerDetails: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }
})

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;