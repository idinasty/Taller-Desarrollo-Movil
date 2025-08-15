import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import usuarios from '../data/usuario.json';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function DetalleUsuario() {
  const { index } = useLocalSearchParams();
  const usuario = usuarios[index];

  if (!usuario) {
    return (
      <View style={styles.container}>
        <Text>Usuario no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Detalle Usuario' }} />
      <View style={styles.container}>
        <Image source={{ uri: usuario.avatar }} style={styles.avatar} />
        <Text style={styles.nombre}>{usuario.nombre}</Text>
        <Text style={styles.email}>{usuario.email}</Text>

        <TouchableOpacity style={styles.opcion}>
          <FontAwesome name="edit" size={20} color="#333" />
          <Text style={styles.texto}>Editar usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="mail-outline" size={20} color="#333" />
          <Text style={styles.texto}>Enviar correo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="trash-outline" size={20} color="red" />
          <Text style={[styles.texto, { color: 'red' }]}>Eliminar usuario</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginVertical: 20 },
  nombre: { fontSize: 22, fontWeight: 'bold', color: '#222' },
  email: { fontSize: 16, color: '#777', marginBottom: 30 },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 14,
    borderRadius: 12,
    width: '100%',
    marginBottom: 12,
  },
  texto: { marginLeft: 10, fontSize: 16, color: '#333' },
});
