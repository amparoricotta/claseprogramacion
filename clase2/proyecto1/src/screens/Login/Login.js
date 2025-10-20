import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class Login extends Component {
    constructor(props){
        super(props); 
    }
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Text style={styles.title}>Inicio de sesión</Text>
        <Pressable
            onPress={ () => this.props.navigation.navigate("Register")}>
                 <Text>Ir al registro</Text>
        </Pressable>
                <Pressable 
                    onPress={ () => this.props.navigation.navigate("HomeMenu")}>
                        <Text>Entrar a la app</Text>
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
    }
  });
export default Login;
