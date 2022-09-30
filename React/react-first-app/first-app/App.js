import { StyleSheet, Text, View,} from 'react-native';

import Header from './components/header'
import Main from './components/main'

export default function App() {
  return (
    <View style={styles.container}>
       <Header/>
       <Main/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width: '100%',
    backgroundColor: '#000',
    alignItems:'center'
  }, 
});

  
  
    
    
    
    
    
    
    
     
      

  
  
