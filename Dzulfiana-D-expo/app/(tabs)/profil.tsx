import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/react-logo.png')} style={styles.image} />
      <Text style={styles.name}>Nama: Dzulviana D</Text>
      <Text style={styles.nim}>NIM: 123456789</Text>
      <Text style={styles.kelas}>Kelas: TI-7A</Text>
      <Text style={styles.jurusan}>Jurusan: Teknik Informatika</Text>
      <Text style={styles.fakultas}>Fakultas: Teknik</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e293b',
  },
  nim: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },
  kelas: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },
  jurusan: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },
  fakultas: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },
});
