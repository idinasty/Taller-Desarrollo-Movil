import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import conocimientosPrevios from '../data/conocimientos.json';

export default function DetalleElemento() {
  const { index } = useLocalSearchParams();
  const elemento = conocimientosPrevios[index];

  const [mostrarTodo, setMostrarTodo] = useState(elemento.mostrarTodo);
  const descripcionCorta = elemento.descripcion.substring(0, 30) + '...';

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../imagenes/previa.png')} style={styles.image} />
      </View>

      <Text style={styles.title}>{elemento.titulo}</Text>
      <Text style={styles.price}>$29,99</Text>

      <Text style={styles.description}>
        {mostrarTodo ? elemento.descripcion : descripcionCorta}
      </Text>

      <TouchableOpacity onPress={() => setMostrarTodo(!mostrarTodo)}>
        <Text style={styles.verMas}>
          {mostrarTodo ? 'Ver menos' : 'Ver más'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  imageContainer: { alignSelf: 'center', marginBottom: 20 },
  image: { width: 150, height: 150, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  price: { fontSize: 18, color: '#3b5998', fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 14, color: '#444' },
  verMas: { color: '#3b5998', marginBottom: 30, fontWeight: '500' },
});
