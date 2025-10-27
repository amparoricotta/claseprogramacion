import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import DynamicForm from '../../components/DynamicForm';

class Home extends Component {
    constructor(props){
        super(props); 
    }
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
        <Text style={styles.title}>Bienvenida/o</Text>
      </View>
      <DynamicForm />
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
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#000',
      marginBottom: 10,
      textAlign: 'center',
    },
    button: {
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 12,
      width: '100%',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
  });
export default Home;