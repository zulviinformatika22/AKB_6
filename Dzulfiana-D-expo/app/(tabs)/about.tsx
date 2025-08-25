import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.desc}>
        Aplikasi ini dibuat untuk keperluan tugas pemrograman mobile menggunakan Expo Router. Terdiri dari tiga halaman utama:
      </Text>
      <Text style={styles.list}>- Home: Menampilkan informasi tentang Unismuh Makassar.</Text>
      <Text style={styles.list}>- About: Menjelaskan tujuan dan fungsi aplikasi.</Text>
      <Text style={styles.list}>- Profil: Menampilkan data diri pembuat aplikasi.</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1e293b',
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#334155',
  },
  list: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
});
