import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function Profile() {
  const profilePic =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDhwZnJqcHBpeHM0enZhOTF2bmdvZWVtaTE1OTF0NW96eHVnZW4xbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DObgk0NPQh57OBQmzX/giphy.gif";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={{ uri: profilePic }} style={styles.avatar} />
        <Text style={styles.name}>Romi</Text>
        <Text style={styles.role}>Japanese Language Learner</Text>
      </View>

      {/* PROGRESS JLPT */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>JLPT N5</Text>
        <Text style={styles.cardSubtitle}>Materi dikuasai</Text>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "50%" }]} />
        </View>

        <Text style={styles.progressText}>50%</Text>
      </View>

      {/* STATS */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>120</Text>
          <Text style={styles.statLabel}>Kanji Dihafal</Text>
        </View>

        <View style={styles.statCard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.statValue}>5</Text>
            <Image
              source={{
                uri: "https://image2url.com/gifs/1765620669181-d6e913e9-2d8e-4b5e-8e55-294c412c6ed3.gif",
              }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.statLabel}>Daily Streak</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1j 23m</Text>
          <Text style={styles.statLabel}>Waktu Belajar</Text>
        </View>

        <View style={styles.statCard}>
          {/* ROW: ANGKA + GIF */}
          <View style={styles.statRow}>
            <Text style={styles.statValue}>5</Text>
            <Image
              source={{
                uri: "https://image2url.com/gifs/1765620860012-ecf72e84-567b-4316-91d3-be7ac68c9f0a.gif",
              }}
              style={styles.icon}
            />
          </View>

          {/* LABEL */}
          <Text style={styles.statLabel}>Badge</Text>
        </View>
      </View>

      {/* MENU */}
      <View style={styles.menuCard}>
        <MenuItem label="Edit Profil" />
        <MenuItem label="Pengaturan" />
        <MenuItem label="Tentang Aplikasi" />
        <MenuItem label="Logout" danger />
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

/* MENU ITEM */
function MenuItem({
  label,
  danger = false,
}: {
  label: string;
  danger?: boolean;
}) {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => router.push("/coming-soon")}
    >
      <Text style={[styles.menuText, danger && { color: "#D9534F" }]}>
        {label}
      </Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0A3",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#4A4A4A",
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2E2E2E",
  },

  role: {
    fontSize: 14,
    color: "#555",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#222",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },

  progressBar: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginTop: 14,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#6C63FF",
  },

  progressText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "700",
    color: "#444",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",
  },

  statValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#222",
  },

  statLabel: {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: 20,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  menuText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },

  arrow: {
    fontSize: 18,
    color: "#999",
  },

  fire: {
  width: 22,
  height: 22,
  marginLeft: 6,
  },

  icon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

statRow: {
  flexDirection: "row",
  alignItems: "center",
  gap: 6, // Android modern OK, kalau error ganti margin
},

});
