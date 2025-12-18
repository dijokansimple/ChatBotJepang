import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function etc() {
  const router = useRouter();

  const kategori = [
    { id: "ni-kurabete", path: "/materi/n3/grammar/membandingkan/ni-kurabete" },
    { id: "kepada-iu-yori", path: "/materi/n3/grammar/membandingkan/kepada-iu-yori" },
    { id: "wari-ni", path: "/materi/n3/grammar/membandingkan/wari-ni" },
    { id: "hodo-wa-nai", path: "/materi/n3/grammar/membandingkan/hodo-wa-nai" },

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
          <Text style={styles.headerTitle}>Membandingkan</Text>
        </View>

        <Text style={styles.pageTitle}>Pilih Sub-Kategori</Text>

        {/* Card */}
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
  spacer: { height: 22 },

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
