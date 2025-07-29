import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INICIAR SESIÓN</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#777" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#777" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={() => Alert.alert("Recuperar contraseña", "Funcionalidad no implementada.")}>
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>

      <Text style={styles.separator}>∘∘∘</Text>

      <TouchableOpacity style={styles.providerButton}>
        <FontAwesome name="google" size={20} color="#DB4437" style={{ marginRight: 10 }} />
        <Text style={styles.providerText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.providerButton}>
        <FontAwesome name="apple" size={22} color="#000" style={{ marginRight: 10 }} />
        <Text style={styles.providerText}>Iniciar sesión con Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#111',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 14,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  forgot: {
    color: '#3F51B5',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#888',
  },
  providerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  providerText: {
    fontSize: 16,
    color: '#111',
  },
});
