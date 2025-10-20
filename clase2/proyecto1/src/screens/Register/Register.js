import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class Register extends Component {
    constructor(props){
        super(props); 
    }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>Registro</Text>
        <Pressable style={styles.button}
            onPress={ () => this.props.navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Ya Tengo Cuenta</Text>
        </Pressable>
</View>
</View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 25,
      width: '100%',
      maxWidth: 350,
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      marginBottom: 10,
      color: '#000',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#4da6ff',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });

export default Register;