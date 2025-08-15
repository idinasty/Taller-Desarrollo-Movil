import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function Configuracion() {
  const router = useRouter();
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(false);

  const opciones = [
    { label: 'Cuenta', ruta: '' },
    { label: 'Privacidad', ruta: '' },
    { label: 'Seguridad', ruta: '' },
    { label: 'Ayuda', ruta: '' },
  ];

  return (
    <>
      <Stack.Screen options={{ title: 'Ajustes' }} />
      <View style={[styles.container, modoOscuro && styles.containerDark]}>
        <Text style={[styles.title, modoOscuro && styles.labelDark]}>Ajustes</Text>

        
        <View style={[styles.item, modoOscuro && styles.itemDark]}>
          <Text style={[styles.label, modoOscuro && styles.labelDark]}>Notificaciones</Text>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            thumbColor={notificaciones ? "#ffffff" : "#f4f3f4"}
            trackColor={{ false: "#555", true: "#4a90e2" }}
          />
        </View>

      
        <View style={[styles.item, modoOscuro && styles.itemDark]}>
          <Text style={[styles.label, modoOscuro && styles.labelDark]}>Modo Oscuro</Text>
          <Switch
            value={modoOscuro}
            onValueChange={setModoOscuro}
            thumbColor={modoOscuro ? "#ffffff" : "#f4f3f4"}
            trackColor={{ false: "#555", true: "#4a90e2" }}
          />
        </View>

        
        {opciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.item, modoOscuro && styles.itemDark]}
            onPress={() => router.push(item.ruta)}
          >
            <Text style={[styles.label, modoOscuro && styles.labelDark]}>{item.label}</Text>
            <Entypo name="chevron-right" size={24} color={modoOscuro ? "#fff" : "#999"} />
          </TouchableOpacity>
        ))}

        
        <TouchableOpacity onPress={() => router.replace('/login')}>
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
  containerDark: {
    backgroundColor: '#000',
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
  itemDark: {
    backgroundColor: '#1f1f1f',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  labelDark: {
    color: '#fff',
  },
  logout: {
    marginTop: 30,
    textAlign: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
