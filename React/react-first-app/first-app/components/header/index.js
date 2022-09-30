import React from "react";
import {View, StyleSheet, Text, Image, StatusBar, TouchableOpacity} from 'react-native'
// Importando icons
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 30 : 45;

export default function Header() {
    return(
        <View style={styles.containerHeader}>
            <View style={styles.content}>
                <Text style={styles.texts}>Accounts</Text> 
                <View style={styles.containerIcon}>
                <MaterialCommunityIcons name="account" size={24} color="white" style={styles.person} />
                <Entypo name="menu" size={24} color="white"  />
                </View>
                
            </View>
        </View>
    )
            
} 


const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#000',
        paddingTop: statusBarHeight,
        width:'100%',
        paddingStart: 16,
        paddingEnd:16,
        paddingBottom: 22,
    },
    containerIcon: {
        flexDirection:'row',
    }, 

    content: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    texts: {
        fontSize: 30,
        fontWeight:'600',
        color:'white'
    },
    person: {
        marginRight:10
    }
});
        
        
        
    
    
    
  
    
        
        
          
          
          
          
        
       
        
       
        
     
        
      
        
      
      
    
      
      
      
      
      