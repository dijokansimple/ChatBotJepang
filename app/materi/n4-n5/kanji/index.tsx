import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function KanjiMenu() {
  const router = useRouter();

  const levels = [
    { id: 'Kanji Angka (数 – Sūji)', desc: "Topik: Angka dan bilangan dasar.", color: '#F7A6A6', path: '/coming-soon' },
    { id: 'Kanji Waktu (時間 – Jikan)', desc: "Topik: Hari, bulan, tahun, jam.", color: '#D6EEF8', path: '/coming-soon' },
    { id: 'Kanji Keluarga dan Orang (家族 – Kazoku)', desc: "Topik: Anggota keluarga dan manusia.", color: '#FCE8B8', path: '/coming-soon' },
    { id: 'Kanji Alam dan Lingkungan (自然 – Shizen)', desc: "Topik: Unsur alam, cuaca, lingkungan.", color: '#FFF48C', path: '/coming-soon' },
    { id: 'Kanji Kata Kerja (動詞 – Doushi)', desc: "Topik: Aktivitas sehari-hari.", color: '#B0E57C', path: '/coming-soon' },
    { id: 'Kanji Kata Sifat (形容詞 – Keiyoushi)', desc: "Topik: Deskripsi dan sifat benda/orang.", color: '#FFB6B9', path: '/coming-soon' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.hamButton}onPress={() => router.back()}>
             <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>

          <View style={styles.headerTitleWrap}>
            <Text style={styles.appTitle}>Pilih QuizMu</Text>
            <Text style={styles.subTitle}>JLPT N4 + N5</Text>
          </View>
        </View>

        {/* Main Title */}
        <Text style={styles.title}>Materi Kanji JLPT</Text>
        <View style={styles.spacer} />

        {/* List */}
        {levels.map((lvl, idx) => (
          <TouchableOpacity
            key={lvl.id}
            style={styles.optionRow}
            onPress={() => router.push("/coming-soon")}
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
  spacer: {
    height: 22,
  },

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
