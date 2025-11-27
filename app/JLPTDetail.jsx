import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function JLPTDetail() {
  const { level } = useLocalSearchParams();
  const router = useRouter(); // untuk navigasi

  const modules = [
    { title: "Vocabulary", desc: "Kosakata penting untuk JLPT.", color: "#F7A6A6", icon: "📘" },
    { title: "Kanji", desc: "Kanji wajib beserta contohnya.", color: "#D6EEF8", icon: "🈶" },
    { title: "Grammar", desc: "Pola tata bahasa level JLPT.", color: "#FCE8B8", icon: "📚" },
    { title: "Reading", desc: "Latihan membaca JLPT.", color: "#FFF48C", icon: "📝" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.levelTitle}>{level}</Text>
        <Text style={styles.subTitle}>Modul Pembelajaran JLPT Level {level}</Text>

        <View style={styles.grid}>
          {modules.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() =>
                router.push({
                  pathname: "/JLPTDetailKanji",
                  params: { level: level, module: item.title },
                })
              }
            >
              <View style={[styles.smallBox, { backgroundColor: item.color }]}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>

              <Text style={styles.boxTitle}>{item.title}</Text>
              <Text style={styles.boxDesc}>{item.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    padding: 20,
    paddingBottom: 40,
  },

  levelTitle: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 50,
    color: "#265f57",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  box: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 22,
    paddingTop: 18,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 150,
  },

  smallBox: {
    width: "100%",
    height: 70,
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 32,
  },

  boxTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F3B36",
    marginBottom: 6,
  },
  boxDesc: {
    fontSize: 13,
    color: "#555",
  },
});
