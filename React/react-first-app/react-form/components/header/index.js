import React from "react";
import {StyleSheet, Text, View} from 'react-native'

export default function Header() {
    return(
        <View style={styles.containerHeader}>
            <Text style={styles.textoLogin}>SIGN UP</Text>
            <Text style={styles.spanzin}>Preencha as informações abaixo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#fff',
        height: 100,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    textoLogin: {
        color: '#1C1C1C',
        fontWeight:'800',
        fontSize: 30
    },
    spanzin: {
        color:'#BEBEBE'
    }
        
})
        