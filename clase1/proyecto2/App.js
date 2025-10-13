import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Image from './src/components/Image/Image';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container2}>Probando imagenes</Text>
      <Image/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
  fontSize: 30,

  }

});
