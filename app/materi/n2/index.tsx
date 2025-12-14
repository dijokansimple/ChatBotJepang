import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function N4N5Detail() {
  const { level } = useLocalSearchParams();
  const router = useRouter();

  // Mapping module → route
  const modules = [
    { title: "Vocabulary", desc: "Kosakata penting untuk JLPT.", color: "#F7A6A6", icon: "📘", path: "/materi/n4-n5/vocabulary" },
    { title: "Kanji", desc: "Kanji wajib beserta contohnya.", color: "#D6EEF8", icon: "🈶", path: "/materi/n4-n5/kanji" },
    { title: "Grammar", desc: "Pola tata bahasa level JLPT.", color: "#FCE8B8", icon: "📚", path: "/materi/n4-n5/grammar" },
    { title: "Reading", desc: "Latihan membaca JLPT.", color: "#FFF48C", icon: "📝", path: "/materi/n4-n5/reading" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity style={styles.hamButton} onPress={() => router.back()}>
             <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>


        </View>

        <Text style={styles.levelTitle}>N2</Text>
        <Text style={styles.subTitle}>Modul Pembelajaran JLPT Level N2</Text>

        <View style={styles.grid}>
          {modules.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => router.push(item.path)}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
},

  hamButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
