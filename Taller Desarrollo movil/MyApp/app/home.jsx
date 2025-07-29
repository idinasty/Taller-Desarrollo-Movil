import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function PantallaPrincipal() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Pantalla principal' }} />
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>¡Nos alegra tenerte aquí!</Text>

        <Image
          source={require('../imagenes/bienvenida.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Empezar</Text>
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
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});