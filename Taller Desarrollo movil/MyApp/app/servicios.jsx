import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Entypo, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Servicios() {
  const router = useRouter();

  const servicios = [
    {
      titulo: 'Servicio de Notificación Telefónica',
      descripcion: 'Abrir servicios telefónicos para alertas de dispositivos en tiempo real',
      icono: <Ionicons name="call" size={24} color="#4CAF50" />,
      ruta: '/servicio1',
    },
    {
      titulo: 'Protección inteligente',
      descripcion: 'Aplicación de alarma para el hogar, protegiendo la seguridad',
      icono: <Ionicons name="shield-checkmark" size={24} color="#3F51B5" />,
      ruta: '/servicio2',
    },
    {
      titulo: 'Compras',
      descripcion: 'Encuentra productos y marcas destacadas con IA',
      icono: <MaterialIcons name="shopping-cart" size={24} color="#FF9800" />,
      ruta: '/servicio3',
    },
    {
      titulo: 'Maestro de Iluminación',
      descripcion: 'Soluciones de iluminación personalizadas con IA',
      icono: <Ionicons name="bulb" size={24} color="#9C27B0" />,
      ruta: '/servicio4',
      nuevo: true,
    },
    {
      titulo: 'Asistente de voz de terceros',
      descripcion: 'Utiliza asistentes inteligentes externos en tu hogar',
      icono: <FontAwesome5 name="microphone" size={20} color="#607D8B" />,
      ruta: '/servicio5',
    },
  ];

  return (
    <>
      <Stack.Screen options={{ title: 'Lista de servicios' }} />
      <ScrollView style={styles.container}>
        {servicios.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(item.ruta)}
          >
            <View style={styles.left}>
              <View style={styles.icono}>{item.icono}</View>
              <View style={{ flex: 1 }}>
                <Text style={styles.titulo}>
                  {item.titulo}{' '}
                </Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
              </View>
            </View>
            <Entypo name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    backgroundColor: '#f6f7fb',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
  },
  icono: {
    marginTop: 4,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
  nuevo: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#f44336',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 6,
  },
});
