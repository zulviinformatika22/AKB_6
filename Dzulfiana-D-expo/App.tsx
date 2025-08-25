import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Jangan tampilkan UI sebelum font selesai dimuat
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      // ✅ Static Fonts
      'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'PlayfairDisplay': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
      'Lora': require('./assets/fonts/Lora-Regular.ttf'),
      'Merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
      // ✅ Variable Fonts
      'Inter': require('./assets/fonts/Inter-VariableFont.ttf'),
      'Figtree': require('./assets/fonts/Figtree-VariableFont.ttf'),
      'NunitoSans': require('./assets/fonts/NunitoSans-VariableFont.ttf'),
      'SpaceGrotesk': require('./assets/fonts/SpaceGrotesk-VariableFont.ttf'),
      'Raleway': require('./assets/fonts/Raleway-VariableFont.ttf'),
    });
    setAppIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  // ✅ Ganti angka ini sesuai urutan stambuk
  const urutan = 6;

  const names = [
    { name: 'Annisa Alfirni', font: 'Roboto', type: 'Static Font' },
    { name: 'Ari Ahmad Dahri', font: 'OpenSans', type: 'Static Font' },
    { name: 'Hardita Subanda', font: 'PlayfairDisplay', type: 'Static Font' },
    { name: 'Rezki Asriani', font: 'Lora', type: 'Static Font' },
    { name: 'M. Ray Togobu', font: 'Merriweather', type: 'Static Font' },
    { name: 'Dzulfiana', font: 'Inter', type: 'Variable Font' },
    { name: 'Yurlinda Fitria', font: 'Figtree', type: 'Variable Font' },
    { name: 'Isnandar', font: 'NunitoSans', type: 'Variable Font' },
    { name: 'Nisa Natayanti', font: 'SpaceGrotesk', type: 'Variable Font' },
    { name: 'MUH. Rayhan', font: 'Raleway', type: 'Variable Font' },
  ];

  const total = names.length;

  // ✅ Hitung rotasi index: 5 sebelum dan 5 sesudah urutan (dengan rotasi jika melewati batas)
  const getRotatedIndexes = (centerIndex, countBefore = 5, countAfter = 5) => {
    const result = [];
    for (let i = countBefore; i > 0; i--) {
      result.push((centerIndex - i + total) % total);
    }
    for (let i = 0; i < countAfter; i++) {
      result.push((centerIndex + i) % total);
    }
    return result;
  };

  const rotatedIndexes = getRotatedIndexes(urutan - 1);
  const displayedNames = rotatedIndexes.map(i => names[i]);

  return (
    <ScrollView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Nama Mahasiswa (Stambuk ke-{urutan})</Text>
      {displayedNames.map((item, index) => (
        <View key={index} style={styles.nameBox}>
          <Text style={styles.label}>{item.type}</Text>
          <Text style={[styles.name, { fontFamily: item.font }]}>
            {index + 1}. {item.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  nameBox: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
  },
});
