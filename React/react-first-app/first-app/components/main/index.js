import React from "react"
import {View, Text, Image, StyleSheet} from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

export default function main() {
    return(
        
        
        <View style={styles.containerContas}>
                <View style={styles.containerDad}>

                <View style={styles.containerUm}>  
                <Text style={styles.nFollows}>20.K</Text>
                <Text style={styles.follows}>followrs</Text>
                </View>
                <View style={styles.containerDois}>
                <AntDesign name="instagram" size={24} color="pink" />
                <Text style={styles.redeSocial}>_vitorcf</Text> 
                </View> 

                </View> 
           
                <View style={styles.containerDad}>

                <View style={styles.containerUm}>  
                <Text style={styles.nFollows}>20.K</Text>
                <Text style={styles.follows}>followrs</Text>
                </View>
                <View style={styles.containerDois}>
                <Entypo name="facebook" size={24} color="pink" />
                <Text style={styles.redeSocial}>_vitorcf</Text> 
                </View> 

                </View> 

                
                <View style={styles.containerDad}>

                <View style={styles.containerUm}>  
                <Text style={styles.nFollows}>20.K</Text>
                <Text style={styles.follows}>followrs</Text>
                </View>
                <View style={styles.containerDois}>
                <Entypo name="linkedin" size={24} color="pink" />
                <Text style={styles.redeSocial}>_vitorcf</Text> 
                </View> 

                </View> 

                
                <View style={styles.containerDad}>

                <View style={styles.containerUm}>  
                <Text style={styles.nFollows}>20.K</Text>
                <Text style={styles.follows}>followrs</Text>
                </View>
                <View style={styles.containerDois}>
                <AntDesign name="github" size={24} color="pink" />
                <Text style={styles.redeSocial}>_vitorcf</Text> 
                </View> 

                </View> 

               
                <View style={styles.containerDad}>

                <View style={styles.containerUm}>  
                <Text style={styles.nFollows}>20.K</Text>
                <Text style={styles.follows}>followrs</Text>
                </View>
                <View style={styles.containerDois}>
                <AntDesign name="twitter" size={24} color="pink" />
                <Text style={styles.redeSocial}>_vitorcf</Text> 
                </View> 

                </View>
                
                

                
        </View>
              
            
            

    )
} 
            


const styles = StyleSheet.create({
    containerContas: {
        // backgroundColor:'#0B0719',
        width:'80%',
        height:80,
        marginTop: 20,
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 10,
        
    },
        
    containerUm: {
        flexDirection:'row',
        alignItems:'flex-end',
    },
    containerDois: {
        flexDirection:'row',
        alignItems:'flex-end'
    },
    nFollows: {
        color:'#E6E6E6',
        fontSize: 18,
        fontWeight:'800'
    },
    follows: {
        marginLeft: 5,
        fontWeight:'800',
        color:'purple'
    },
    redeSocial: {
        color:'#E6E6E6',
        marginLeft: 5,
        fontWeight:'600'
    },
    containerDad: {
        backgroundColor:'#0B0719',
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    }
        
        
        
})