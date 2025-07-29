import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

export default function PantallaPrevia() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.header}>Home</Text>

        {/* Menú superior */}
        <View style={styles.menu}>
          <TouchableOpacity style={styles.activeButton}>
            <Text style={styles.activeButtonText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveButton}>
            <Text style={styles.inactiveButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Imagen destacada con icono */}
          <View style={styles.cardContainer}>
            <Image
              source={require('../imagenes/previa.png')} 
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Episodio 1 "El Chupete"</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Ver más</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Episodio 2 "Sin Escrupulos"</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Ver más</Text>
            </TouchableOpacity>
          </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  menu: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  activeButton: {
    backgroundColor: '#3f51b5',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 10,
  },
  activeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  inactiveButton: {
    backgroundColor: 'transparent',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  inactiveButtonText: {
    color: '#333',
  },
  content: {
    paddingHorizontal: 16,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  heartIcon: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 1,
  },
  image: {
    width: 200,
    height: 180,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  link: {
    color: '#3f51b5',
    marginTop: 8,
    fontWeight: '500',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
