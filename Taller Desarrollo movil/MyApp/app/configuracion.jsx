import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function Configuracion() {
  const router = useRouter();
  const [notificaciones, setNotificaciones] = useState(true);

  const opciones = [
    { label: 'Cuenta', ruta: '' },
    { label: 'Privacidad', ruta: '' },
    { label: 'Seguridad', ruta: '' },
    { label: 'Ayuda', ruta: '' },
  ];
  
  return (
    <>
      <Stack.Screen options={{ title: 'Ajustes' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Ajustes</Text>

        <View style={styles.item}>
          <Text style={styles.label}>Notificaciones</Text>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            thumbColor={notificaciones ? "#ffffff" : "#f4f3f4"}
            trackColor={{ false: "#ccc", true: "#4a90e2" }}
          />
        </View>

        {opciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => router.push(item.ruta)}
          >
            <Text style={styles.label}>{item.label}</Text>
            <Entypo name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>
        ))}

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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  logout: {
    marginTop: 30,
    textAlign: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
