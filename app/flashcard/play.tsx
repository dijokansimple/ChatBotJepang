import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { N5_KANJI } from "./data/n5";

export default function FlashcardPlay() {
  const router = useRouter();
  const { ids } = useLocalSearchParams<{ ids?: string }>();

  const selected = N5_KANJI.filter((k) =>
    ids?.split(",").includes(k.id)
  );

  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);

  if (!selected.length) {
    return (
      <View style={styles.container}>
        <Text>Tidak ada kanji dipilih</Text>
      </View>
    );
  }

  const kanji = selected[index];

  const next = () => {
    setShowDetail(false);
    setIndex((prev) => (prev + 1) % selected.length);
  };

  const prev = () => {
    setShowDetail(false);
    setIndex((prev) =>
      prev - 1 < 0 ? selected.length - 1 : prev - 1
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {index + 1} / {selected.length}
        </Text>
      </View>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.kanji}>{kanji.kanji}</Text>

        {showDetail && (
          <View style={styles.detail}>
            <Text style={styles.detailText}>
              Romaji: {kanji.romaji}
            </Text>
            <Text style={styles.detailText}>
              Arti: {kanji.meaning}
            </Text>
            {kanji.example && (
              <Text style={styles.example}>{kanji.example}</Text>
            )}
          </View>
        )}
      </View>

      {/* ACTION */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.navBtn} onPress={prev}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.detailBtn}
          onPress={() => setShowDetail(!showDetail)}
        >
          <Text style={styles.detailBtnText}>
            {showDetail ? "Sembunyikan" : "Lihat Detail"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navBtn} onPress={next}>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F4F1",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 22,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ffffffcc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  kanji: {
    fontSize: 96,
    fontWeight: "800",
  },

  detail: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    width: "80%",
  },

  detailText: {
    fontSize: 16,
    marginBottom: 4,
  },

  example: {
    marginTop: 8,
    fontStyle: "italic",
    color: "#555",
  },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  navBtn: {
    backgroundColor: "#4e8cff",
    padding: 14,
    borderRadius: 50,
  },

  detailBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  detailBtnText: {
    fontWeight: "700",
    color: "#333",
  },
});
