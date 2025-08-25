import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Unismuh Makassar</Text>
      <Text style={styles.desc}>Universitas Muhammadiyah Makassar adalah salah satu perguruan tinggi swasta terbesar di Indonesia Timur, berlokasi di Makassar, Sulawesi Selatan.</Text>
      <Image source={require('../../assets/images/adaptive-icon.png')} style={styles.image} />
      <Text style={styles.location}>Lokasi: Jl. Sultan Alauddin No.259, Makassar</Text>
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
  image: {
    width: 160,
    height: 160,
    borderRadius: 16,
    marginBottom: 16,
  },
  location: {
    fontSize: 16,
    color: '#64748b',
  },
});
