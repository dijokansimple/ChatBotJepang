import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LEVELS = ["N5", "N4", "N3", "N2", "N1"];

export default function FlashcardIndex() {
  const router = useRouter();

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.push("/");
  };

  const handlePress = (level: string) => {
    if (level === "N5") router.push("/flashcard/select");
    else router.push("/coming-soon");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={goBack}>
          <Ionicons name="arrow-back" size={22} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flashcard Kanji</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Pilih level JLPT</Text>

        {LEVELS.map((lvl) => (
          <TouchableOpacity
            key={lvl}
            style={styles.card}
            onPress={() => handlePress(lvl)}
          >
            <Text style={styles.cardText}>{lvl}</Text>
          </TouchableOpacity>
        ))}
      </View>
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

  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
  },

  cardText: { fontSize: 20, fontWeight: "700" },
});
