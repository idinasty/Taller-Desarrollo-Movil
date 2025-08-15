import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Stack } from 'expo-router';

export default function Autor() {
  return (
    <>
      <Stack.Screen options={{ title: 'Autor' }} />
      <View style={styles.container}>
        <Image
          source={require('../imagenes/autor.jpg')} 
          style={styles.avatar}
        />
        <Text style={styles.nombre}>Andres Daniel Jojoa Vergara</Text>

        <View style={styles.info}>
          <Text style={styles.label}>Número de Identidad:</Text>
          <Text style={styles.valor}>1078456893</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Semestre:</Text>
          <Text style={styles.valor}>VII</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>Materia:</Text>
          <Text style={styles.valor}>Desarrollo de aplicaciones móviles</Text>
        </View>

        <Text style={styles.descripcion}>
          Estudiante de Ingeniería, desarrollador de esta aplicación. Apasionado por la tecnología, el desarrollo móvil y web. Este proyecto fue realizado como parte de un taller educativo usando Expo y React Native.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    marginRight: 6,
  },
  valor: {
    color: '#333',
  },
  descripcion: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});
