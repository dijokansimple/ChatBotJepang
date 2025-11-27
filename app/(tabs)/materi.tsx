import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function materi() {
  const router = useRouter();

  const levels = [
    { id: 'N1', color: '#F7A6A6' },
    { id: 'N2', color: '#D6EEF8' },
    { id: 'N3', color: '#FCE8B8' },
    { id: 'N4 + N5', color: '#FFF48C' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.hamButton}>
            <Ionicons name="menu" size={22} color="#222" />
          </TouchableOpacity>

          <View style={styles.headerTitleWrap}>
            <Text style={styles.appTitle}>Modul Pembelajaran</Text>
            <Text style={styles.subTitle}>Pusat Bantuan SmartEdu Chatbot</Text>
          </View>
        </View>

        {/* Main */}
        <View style={styles.content}>
          <Text style={styles.title}>Please select JLPT level!</Text>
          <View style={styles.spacer} />

          {levels.map((lvl, idx) => (
            <TouchableOpacity
              key={lvl.id}
              style={styles.optionRow}
              onPress={() =>
                router.push({
                  pathname: "/JLPTDetail",
                  params: { level: lvl.id }
                })
              }
            >
              <View style={[styles.badge, { backgroundColor: lvl.color }]}>
                <Text style={styles.badgeText}>{idx + 1}</Text>
              </View>

              <Text style={styles.optionLabel}>{lvl.id}</Text>
            </TouchableOpacity>
          ))}

        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#dff3eeff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* Header */
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

  /* Content */
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F3B36',
    textAlign: 'center',
  },
  spacer: {
    height: 22,
  },

  /* Option rows */
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
    shadowOffset: { width: 0, height: 1 },
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
  },
});
