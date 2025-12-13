import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
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

export default function FlashcardSelect() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
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
        <Text style={styles.headerTitle}>Pilih Kanji (N5)</Text>
      </View>

      {/* LIST */}
      <View style={styles.content}>
        {N5_KANJI.map((k) => {
          const active = selected.includes(k.id);
          return (
            <TouchableOpacity
              key={k.id}
              style={[styles.item, active && styles.active]}
              onPress={() => toggle(k.id)}
            >
              <Text style={styles.kanji}>{k.kanji}</Text>
              <Text>{k.meaning}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* PLAY */}
      <TouchableOpacity
        style={[
          styles.playBtn,
          { opacity: selected.length ? 1 : 0.5 },
        ]}
        disabled={!selected.length}
        onPress={() =>
          router.push({
            pathname: "/flashcard/play",
            params: { ids: selected.join(",") },
          })
        }
      >
        <Text style={styles.playText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E6F4F1" },

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

  headerTitle: { fontSize: 18, fontWeight: "700" },

  content: { padding: 20 },

  item: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },

  active: { backgroundColor: "#bdeee3" },

  kanji: { fontSize: 26, fontWeight: "700" },

  playBtn: {
    backgroundColor: "#4e8cff",
    margin: 20,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
  },

  playText: { color: "#fff", fontWeight: "700" },
});
