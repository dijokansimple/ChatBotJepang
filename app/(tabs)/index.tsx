import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const myProfile = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwZnJqcHBpeHM0enZhOTF2bmdvZWVtaTE1OTF0NW96eHVnZW4xbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DObgk0NPQh57OBQmzX/giphy.gif";
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>MY APLIKASI</Text>
          <Text style={styles.title}>JAV LEARNING</Text>
          <Text style={styles.subtitle}>Mulai petualanganmu hari ini! ROMI</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image
            source={{ uri: myProfile }} // Menggunakan URL yang sudah didefinisikan
            style={styles.profileImage}         // Menggunakan style baru (didefinisikan di bawah)
          /></TouchableOpacity>
      </View>

      {/* Category Buttons */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => router.push("/materi")}>
          <Text style={styles.categoryText}>Kosakata</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => router.push("/grammar")}>
          <Text style={styles.categoryText}>Tata Bahasa</Text>
        </TouchableOpacity>
      </View>

      {/* Card 1 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#C7F5D6" }]}
        onPress={() => router.push("/coming-soon")}
      >
        <Text style={styles.cardTitle}>FITUR 1</Text>
        <Text style={styles.cardDesc}>KAMING SAN</Text>
        <Image
          source={{
            uri: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGIyNjEwNTFybjl2Z3l1YmhudjJza2x2eGZqdmZxdnRza29zNHN6NyZlcD12MV9naWZzX3NlYXJjaCZjdD1z/xULW8Bkaqz0Y57MH3a/giphy.gif",
          }}
          style={styles.cardImage}
        />
      </TouchableOpacity>

      {/* Card 2 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FAD4D8" }]}
        onPress={() => router.push("/coming-soon")}
      >
        <Text style={styles.cardTitle}>FLIP CARD</Text>
        <Text style={styles.cardDesc}>AYO HAPAL KANJI!</Text>
        <Image
          source={{
            uri: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN3NmV4bzBvNGNoanFuajZiNWk3a3F1NGpxNHhka2RuYmRrMTRpMiZlcD12MV9naWZzX3NlYXJjaCZjdD1z/26gsjCZpPolPr3sBy/giphy.gif",
          }}
          style={styles.cardImage}
        />
      </TouchableOpacity>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0A3",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#2E2E2E",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    color: "#555",
  },
  profileImage: {
    width: 62,           // Ukuran harus sama dengan size={42} Ionicons sebelumnya
    height: 62,
    borderRadius: 31,    // Setengah dari 42 agar berbentuk lingkaran
    borderWidth: 2,      // Opsional: Batas agar lebih jelas
    borderColor: '#4A4A4A',
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  categoryButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    shadowColor: "#000",
    elevation: 3,
  },
  categoryText: {
    fontWeight: "700",
    fontSize: 14,
  },

  card: {
    width: "100%",
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
  },
  cardDesc: {
    marginTop: 5,
    fontSize: 13,
    color: "#444",
  },
  cardImage: {
    width: 130,
    height: 130,
    alignSelf: "flex-end",
    marginTop: -10,
    borderRadius: 15,
  },
});
