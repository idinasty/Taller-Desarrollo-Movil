import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import usuarios from '../data/usuario.json';

export default function ListaUsuarios() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [filtrados, setFiltrados] = useState(usuarios);
  const router = useRouter();

  useEffect(() => {
    const resultado = usuarios.filter(item =>
      item.nombre.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setFiltrados(resultado);
  }, [textoBuscar]);

  return (
    <>
      <Stack.Screen options={{ title: 'Lista de Usuarios' }} />
      <View style={styles.container}>
        <Text style={styles.header}>Usuarios</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Buscar usuario"
          value={textoBuscar}
          onChangeText={setTextoBuscar}
        />

        <FlatList
          data={filtrados}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => router.push({ pathname: '/detalleUsuario', params: { index } })}
            >
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.nombre}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  nombre: { fontSize: 16 },
});
