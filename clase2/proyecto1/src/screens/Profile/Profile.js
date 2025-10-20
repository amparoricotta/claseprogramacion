import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

class Profile extends Component {
    constructor(props){
        super(props); 
    }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>Mi Perfil</Text>
       <Pressable
            onPress={ () => this.props.navigation.navigate("Login")}>
                 <Text>Desloguearse</Text>
        </Pressable>
</View>
</View>
)
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
      alignItems: 'center',
    },
    title: {
      fontSize: 26,
      fontWeight: '700',
      color: '#000',
      marginBottom: 10,
    },
  });

export default Profile;