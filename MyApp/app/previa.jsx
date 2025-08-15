import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import conocimientosData from '../data/conocimientos.json';

export default function PantallaPrevia() {
  const [items, setItems] = useState(conocimientosData);

  const toggleMostrarTodo = (index) => {
    const nuevosItems = [...items];
    nuevosItems[index].mostrarTodo = !nuevosItems[index].mostrarTodo;
    setItems(nuevosItems);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        <Text style={styles.header}>Home</Text>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.activeButton}>
            <Text style={styles.activeButtonText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveButton}>
            <Text style={styles.inactiveButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {items.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={require('../imagenes/previa.png')}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardText}>
                {item.mostrarTodo
                  ? item.descripcion
                  : item.descripcion.substring(0, 30) + '...'}
              </Text>
              <TouchableOpacity onPress={() => toggleMostrarTodo(index)}>
                <Text style={styles.link}>
                  {item.mostrarTodo ? 'Ver menos' : 'Ver más'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.navbar}>
          <Ionicons name="home" size={24} color="#3f51b5" />
          <Feather name="search" size={24} color="#999" />
          <AntDesign name="bells" size={24} color="#999" />
          <FontAwesome name="user" size={24} color="#999" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 26, fontWeight: 'bold', marginTop: 20, marginLeft: 16 },
  menu: { flexDirection: 'row', paddingHorizontal: 16, marginVertical: 10 },
  activeButton: {
    backgroundColor: '#3f51b5',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 10
  },
  activeButtonText: { color: '#fff', fontWeight: '600' },
  inactiveButton: {
    backgroundColor: 'transparent',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12
  },
  inactiveButtonText: { color: '#333' },
  content: { paddingHorizontal: 16 },
  image: { width: 200, height: 180, marginBottom: 10 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center'
  },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  cardText: { fontSize: 14, color: '#555', marginTop: 4, textAlign: 'center' },
  link: { color: '#3f51b5', marginTop: 8, fontWeight: '500' },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
});
