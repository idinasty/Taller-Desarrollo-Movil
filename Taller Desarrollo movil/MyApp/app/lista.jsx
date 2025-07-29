import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    title: 'Episodio 1',
    description: 'Descripción del elemento. Lorem ipsum dolor sit amet.',
  },
  {
    id: '2',
    title: 'Episodio 2',
    description: 'Descripción del elemento. Lorem ipsum dolor sit amet.',
  },
  {
    id: '3',
    title: 'Episodio 3',
    description: 'Descripción del elemento. Lorem ipsum dolor sit amet.',
  },
  {
    id: '4',
    title: 'Episodio 4',
    description: 'Descripción del elemento. Lorem ipsum dolor sit amet.',
  },
];

export default function ListaElementosScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Ionicons name="image-outline" size={32} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acción</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Buscar" placeholderTextColor="#888" />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  imageContainer: {
    backgroundColor: '#3b5998',
    borderRadius: 12,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#555',
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
  },
});
