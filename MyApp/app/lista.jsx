import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import conocimientosPrevios from '../data/conocimientos.json';

export default function ListaElementosScreen() {
  const [textoBuscar, setTextoBuscar] = useState('');
  const [filtrados, setFiltrados] = useState(conocimientosPrevios);
  const router = useRouter();

  useEffect(() => {
    const resultado = conocimientosPrevios.filter(item =>
      item.titulo.toLowerCase().includes(textoBuscar.toLowerCase())
    );
    setFiltrados(resultado);
  }, [textoBuscar]);

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={require('../imagenes/previa.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: '/detalle', params: { index } })}
      >
        <Text style={styles.buttonText}>Acción</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#888"
          value={textoBuscar}
          onChangeText={setTextoBuscar}
        />
      </View>
      <FlatList
        data={filtrados}
        keyExtractor={(item, i) => i.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#000',
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 12,
    marginRight: 12,
    resizeMode: 'cover',
    backgroundColor: '#e9eefc',
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
