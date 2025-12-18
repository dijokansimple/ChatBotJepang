import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VocabularyMenu() {
  const router = useRouter();

  const levels = [
    { id: 'Membandingkan', desc: "Topik: Nama benda, hewan, pekerjaan, dll.", color: '#F7A6A6', path: '/materi/n3/grammar/membandingkan' },
    { id: 'Mengungkapkan-Cara-Penyebab-Alasan', desc: "Topik: Aktivitas dan tindakan sehari-hari.", color: '#D6EEF8', path: '/materi/n3/grammar/mengungkapkan-cpa' },
    { id: 'Merepresentasikan Sebuah Objek', desc: "Topik: Karakter, kondisi, dan keadaan.", color: '#FCE8B8', path: '/materi/n3/grammar/merepresentasikan-sebuah-objek' },
    { id: 'Ungkapan Menunjukan Waktu', desc: "Topik: Cuaca, arah, transportasi, dll.", color: '#FFF48C', path: '/materi/n3/grammar/ungkapan-menunjukan-waktu' },  

];

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.hamButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>

          <View style={styles.headerTitleWrap}>
            <Text style={styles.appTitle}>Pilih Materi</Text>
            <Text style={styles.subTitle}>JLPT N 3</Text>
          </View>
        </View>

        <Text style={styles.title}>Materi (Grammar) JLPT</Text>
        <View style={styles.spacer} />

        {/* List */}
        {levels.map((lvl, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.optionRow}
            onPress={() => router.push(lvl.path)}
          >
            <View style={[styles.badge, { backgroundColor: lvl.color }]}>
              <Text style={styles.badgeText}>{idx + 1}</Text>
            </View>

            <View style={styles.optionLabelWrap}>
              <Text style={styles.optionLabel}>{lvl.id}</Text>
              <Text style={styles.boxDesc}>{lvl.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#dff3eeff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    paddingBottom: 6,
  },
  hamButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerTitleWrap: { flex: 1 },
  appTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#10201A',
  },
  subTitle: {
    fontSize: 11,
    color: '#55645F',
    marginTop: 2,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F3B36',
    textAlign: 'center',
    marginTop: 20,
  },
  spacer: { height: 22 },

  optionRow: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  badgeText: {
    fontWeight: '700',
    color: '#222',
    fontSize: 16,
  },
  optionLabelWrap: { flex: 1 },
  optionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A2D2A',
    marginBottom: 4,
  },
  boxDesc: {
    fontSize: 13,
    color: "#555",
  },
});
