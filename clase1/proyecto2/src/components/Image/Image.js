import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Imagen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/zonaMedia.jpeg")}
        style={styles.imagen}
        resizeMode="contain"
      />

      <Image
        source={{
          uri: 'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'
        }}
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    imagen: {
      width: 300,
      height: 200,
      marginBottom: 20,
    },
  });

  export default Imagen