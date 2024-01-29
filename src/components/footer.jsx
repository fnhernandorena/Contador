import React from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';


const Enlace = () => {
    const url = 'https://fnhernandorena.000webhostapp.com';
  
    const abrirEnlace = async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error(`No se puede abrir el enlace: ${url}`);
      }
    };
  
    return (
      <View style={styles.views}>
        <TouchableOpacity onPress={abrirEnlace} style={styles.container}>
          <Text style={styles.content}>
            Visita nuestro sitio web
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

 const styles = StyleSheet.create({
    views:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
container:{
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal:50,
    paddingVertical:15,
    marginBottom:20,
    borderRadius:100,
},
content:{
    color:'#fff',
},
 } );
  
  export default Enlace;
  