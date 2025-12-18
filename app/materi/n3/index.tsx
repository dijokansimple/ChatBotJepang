import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function N4N5Detail() {
  const router = useRouter();

  const modules = [
    {
      title: "Vocabulary",
      desc: "Kosakata penting untuk JLPT.",
      color: "#F7A6A6",
      icon: "📘",
      path: "/materi/n3/vocab",
    },
    {
      title: "Kanji",
      desc: "Kanji wajib beserta contohnya.",
      color: "#D6EEF8",
      icon: "🈶",
      path: "/materi/n3/kanji",
    },
    {
      title: "Grammar",
      desc: "Pola tata bahasa level JLPT.",
      color: "#FCE8B8",
      icon: "📚",
      path: "/materi/n3/grammar",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.hamButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>
          <Text style={styles.levelTitle}>N3</Text>
          <Text style={styles.subTitle}>Modul Pembelajaran JLPT</Text>
        </View>

        {/* CARD VERTIKAL */}
        {modules.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.box, { marginBottom: 16 }]}
            onPress={() => router.push(item.path)}
            activeOpacity={0.85}
          >
            <View style={[styles.smallBox, { backgroundColor: item.color }]}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>

            <Text style={styles.boxTitle}>{item.title}</Text>
            <Text style={styles.boxDesc}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#dff3ee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  hamButton: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  levelTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F3B36",
    marginTop: 10,
  },

  subTitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 20,
    color: "#265f57",
  },

  box: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  smallBox: {
    height: 90,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  icon: {
    fontSize: 38,
  },

  boxTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F3B36",
    marginBottom: 6,
    textAlign: "center",
  },

  boxDesc: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
  },
});
