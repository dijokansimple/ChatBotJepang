import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function JLPTN2Overview() {
  const router = useRouter();

  const kategori = [
    { id: "Apa Itu JLPT N2?", path: "/materi/n2/overview/apa-itu-jlpt-n2" },
    { id: "Kapan Waktu Ujian dan Masa Pendaftarannya?", path: "/materi/n2/overview/waktu-dan-pendaftaran" },
    { id: "Di Mana Lokasi JLPT di Indonesia?", path: "/materi/n2/overview/lokasi" },
    { id: "Berapa Biaya Tes JLPT N2?", path: "/materi/n2/overview/biaya" },
    { id: "Sesi dan Durasi JLPT N2", path: "/materi/n2/overview/sesi-dan-durasi" },
    { id: "Syarat Lulus Skor Minimal JLPT N2", path: "/materi/n2/overview/syarat-lulus" },
    { id: "Hal yang Mungkin Mudah dan Susah pada JLPT N2", path: "/materi/n2/overview/mudah-dan-susah" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>JLPT N2 Overview</Text>
        </View>

        <Text style={styles.pageTitle}>Pilih Topik</Text>

        {/* Kartu Topik */}
        {kategori.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push(item.path)}
          >
            <Text style={styles.cardText}>{item.id}</Text>
            <Ionicons name="chevron-forward" size={20} color="#444" />
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#dff3eeff",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F3B36",
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F3B36',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A2D2A",
  },
});
