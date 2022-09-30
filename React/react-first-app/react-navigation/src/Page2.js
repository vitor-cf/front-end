import React from "react";
import {View, Button, Text, StyleSheet} from 'react-native';

const Page2 = () => (
    <View style={styles.container}>
        <Text>About</Text>
    </View>
); 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

Page2.navigationOptions = {
    title: 'About',
}

export default Page2;