import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Page1 = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button
        title='Ir para About'
        onPress={() => navigation.navigate("About")}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',   
        alignItems: 'center',
    }
});

Page1.navigationOptions = {
    title: 'Home',
} 

export default Page1;