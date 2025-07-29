import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetalleElemento = ({ navigation }) => {
  return (
    <View style={styles.container}>
      

      {/* Imagen del elemento */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../imagenes/detalle.png')} // Cambia por la ruta de tu imagen
          style={styles.image}
        />
      </View>

      {/* Texto del elemento */}
      <Text style={styles.title}>Episodio 10 "Meke"</Text>
      <Text style={styles.price}>$29,99</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Botón de acción */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acción</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetalleElemento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 24,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#3b5998',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
