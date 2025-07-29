import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Perfil() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Perfil' }} />
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <Text style={styles.nombre}>Andres Daniel</Text>
        <Text style={styles.email}>ojoa2017@outlook.com</Text>

        <TouchableOpacity style={styles.opcion}>
          <FontAwesome name="edit" size={20} color="#333" />
          <Text style={styles.texto}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="notifications-outline" size={20} color="#333" />
          <Text style={styles.texto}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="settings-outline" size={20} color="#333" />
          <Text style={styles.texto}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="help-circle-outline" size={20} color="#333" />
          <Text style={styles.texto}>Ayuda</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.logout}>Cerrar sesión</Text>
        </TouchableOpacity>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    padding: 14,
    borderRadius: 12,
    width: '100%',
    marginBottom: 12,
  },
  texto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  logout: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
