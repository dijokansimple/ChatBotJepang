import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function KanjiFolder() {
  const router = useRouter();

  const folders = [
    { title: "🏠 Kehidupan Sehari-hari", path: "/materi/n3/kanji/kehidupan", color: "#FFE4E9" },
    { title: "🎒 Kanji Sekolah", path: "/materi/n3/kanji/sekolah", color: "#E8F3FF" },
    { title: "💼 Kanji Dunia Kerja", path: "/materi/n3/kanji/kerja", color: "#FFF2CC" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kanji JLPT N3</Text>
      <Text style={styles.sub}>Pilih kategori kanji ✨</Text>

      {folders.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.card, { backgroundColor: item.color }]}
          onPress={() => router.push(item.path)}
        >
          <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#dff3ee",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0F3B36",
    marginBottom: 6,
  },
  sub: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
  },
  card: {
    width: "90%",
    padding: 22,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
