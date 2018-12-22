import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Button from './Button';
import Navbar from "./Navbar";


export default class InitialScreen extends React.Component {



    render() {
        return(
            <View style={styles.content}>
                <Navbar key='Navbar' style={{ justifyContent:'flex-start'}}/>
                <Button key='botonInitialScreen' buttonName="Play" keyB= "ButtonPlay" buttonFunc={ () => {
                    this.props.navigation.navigate('Quiz')
                }
                }/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#87CEEB'
    },
    text:{
        fontSize: 25,
        color: '#2e31ff',
    }
});