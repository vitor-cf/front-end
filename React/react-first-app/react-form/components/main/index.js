import React from "react";
import { StyleSheet, Text, Image, View, TextInput, SafeAreaView, Button, Alert, ScrollView } from "react-native";

import { AntDesign } from '@expo/vector-icons';


export default function Main() {
    return (
       <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.containerFlex}>
            <Text style={styles.textInput}>User Name</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter User Name'
            />
            </View> 

            <View style={styles.containerFlex}>
            <Text style={styles.textInput}>Enter Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Email'
                
            />
            </View>

            <View style={styles.containerFlex}>
            <Text style={styles.textInput}>Mobile Number</Text>
            <TextInput
                style={styles.input}
                placeholder='Mobile Number'
            />
            </View> 

            <View style={styles.containerFlex}>
            <Text style={styles.textInput}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder='Password should in 8-15 characters'
            />
            </View>

            <View style={styles.containerFlex}>
            <Text style={styles.textInput}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder='Repeat the Password'
            />
            </View> 
        <View style={styles.containerDad}>
        <View style={styles.containerBtn}>
            <Button
                style={styles.btnStyle}
                color="#fff"
                title='SIGN UP'
                onPress={() => Alert.alert('Sucess')}
            />
            </View>
        </View>

        </ScrollView>
            
            
            

            
       </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F5F5F5',
        borderRadius: 20,
    },
        
    containerFlex: {
        marginTop: 10,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        
    },
    textInput: {
        color:'#8968CD',
        fontWeight:'600',
        marginLeft: 15
    },
    containerBtn: {
        marginTop: 20,
        width:'80%',
        justifyContent:'center',
        backgroundColor:'#8968CD',
        borderRadius:10
    },
    containerDad: {
        justifyContent:'center',
        alignItems:'center'
    },
    
        
})
        
        
        
           
        
       
        
        
        