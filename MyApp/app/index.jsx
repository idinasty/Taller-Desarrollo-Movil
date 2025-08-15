import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  const opciones = [
    { icon: <Ionicons name="information-circle" size={28} color="#4caf50" />, label: 'Autor', ruta: '/autor' },
    { icon: <Ionicons name="lock-closed" size={28} color="#e91e63" />, label: 'Inicio de sesión', ruta: '/login' },
    { icon: <Ionicons name="home" size={28} color="#3f51b5" />, label: 'Pantalla principal', ruta: '/home' },
    { icon: <MaterialCommunityIcons name="format-list-bulleted" size={28} color="#f44336" />, label: 'Lista de elementos', ruta: '/lista' },
    { icon: <Ionicons name="document-text" size={28} color="#9c27b0" />, label: 'Detalle de elemento', ruta: '/detalle' },
    { icon: <MaterialCommunityIcons name="form-textbox" size={28} color="#ff9800" />, label: 'Formulario de registro', ruta: '/registro' },
    { icon: <Ionicons name="settings" size={28} color="#607d8b" />, label: 'Configuración', ruta: '/configuracion' },
    { icon: <Ionicons name="person" size={28} color="#424242" />, label: 'Perfil de usuario', ruta: '/perfil' },
    { icon: <FontAwesome5 name="tools" size={28} color="#3e2723" />, label: 'Lista de servicios', ruta: '/servicios' },
    { icon: <Ionicons name="book" size={28} color="#2196f3" />, label: 'Conocimientos previos', ruta: '/previa' },
    
  ];

  return (
    <>
      <Stack.Screen options={{ title: 'Taller' }} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Pantallas</Text>
        {opciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(item.ruta)}
          >
            <View style={styles.left}>
              {item.icon}
              <Text style={styles.label}>{item.label}</Text>
            </View>
            <Entypo name="chevron-right" size={28} color="#999" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginLeft: 12,
    color: '#333',
  },
});
