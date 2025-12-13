import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const profilePic =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwZnJqcHBpeHM0enZhOTF2bmdvZWVtaTE1OTF0NW96eHVnZW4xbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DObgk0NPQh57OBQmzX/giphy.gif";

  const streakGif =
    "https://image2url.com/gifs/1765620669181-d6e913e9-2d8e-4b5e-8e55-294c412c6ed3.gif";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>MY APLIKASI</Text>
          <Text style={styles.title}>JAV LEARNING</Text>
          <Text style={styles.subtitle}>
            Mulai petualanganmu hari ini! ROMI 🇯🇵
          </Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image source={{ uri: profilePic }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* 🔥 STREAK CARD */}
      <TouchableOpacity
        style={styles.streakCard}
        onPress={() => router.push("/materi")}
        activeOpacity={0.9}
      >
        <Image source={{ uri: streakGif }} style={styles.streakGif} />
        <View>
          <Text style={styles.streakCount}>5 Hari Streak</Text>
          <Text style={styles.streakText}>
            Belajar hari ini untuk lanjut streak
          </Text>
        </View>
      </TouchableOpacity>

      {/* 📊 PROGRESS */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>📘 Kanji N5</Text>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "40%" }]} />
        </View>

        <Text style={styles.progressText}>40% dikuasai</Text>
      </View>

      {/* QUICK ACTION */}
      <View style={styles.quickAction}>
        <TouchableOpacity
          style={styles.quickBtn}
          onPress={() => router.push("/coming-soon")}
        >
          <Text style={styles.quickText}>Kosakata</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.quickBtn}
          onPress={() => router.push("/coming-soon")}
        >
          <Text style={styles.quickText}>Tata Bahasa</Text>
        </TouchableOpacity>
      </View>

      {/* FEATURE CARD */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FAD4D8" }]}
        onPress={() => router.push("/flashcard")}
      >
        <Text style={styles.cardTitle}>FLASHCARD</Text>
        <Text style={styles.cardDesc}>Ayo hapal kanji dengan swipe!</Text>

        <Image
          source={{
            uri: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN3NmV4bzBvNGNoanFuajZiNWk3a3F1NGpxNHhka2RuYmRrMTRpMiZlcD12MV9naWZzX3NlYXJjaCZjdD1z/26gsjCZpPolPr3sBy/giphy.gif",
          }}
          style={styles.cardImage}
        />
      </TouchableOpacity>

      <View style={{ height: 90 }} />
    </ScrollView>
  );
}

/* ================== STYLE ================== */

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
    fontSize: 30,
    fontWeight: "900",
    color: "#2E2E2E",
  },

  subtitle: {
    fontSize: 14,
    marginTop: 6,
    color: "#555",
  },

  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "#4A4A4A",
  },

  /* STREAK */
  streakCard: {
    marginTop: 25,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 4,
  },

  streakGif: {
    width: 48,
    height: 48,
    marginRight: 14,
  },

  streakCount: {
    fontSize: 18,
    fontWeight: "800",
  },

  streakText: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },

  /* PROGRESS */
  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginTop: 20,
  },

  progressTitle: {
    fontWeight: "700",
    marginBottom: 10,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },

  progressText: {
    fontSize: 12,
    color: "#555",
    marginTop: 6,
  },

  /* QUICK ACTION */
  quickAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  quickBtn: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: "48%",
    alignItems: "center",
    elevation: 3,
  },

  quickText: {
    fontWeight: "700",
  },

  /* FEATURE CARD */
  card: {
    borderRadius: 25,
    padding: 20,
    marginTop: 25,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
  },

  cardDesc: {
    marginTop: 6,
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
