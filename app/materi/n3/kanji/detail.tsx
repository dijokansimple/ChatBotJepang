import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function KanjiDetail() {
  const { kanji, arti, onyomi, kunyomi } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.kanji}>{kanji}</Text>
      </View>

      <Text style={styles.arti}>{arti}</Text>

      <View style={styles.box}>
        <Text style={styles.label}>On-yomi</Text>
        <Text style={styles.value}>{onyomi}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Kun-yomi</Text>
        <Text style={styles.value}>{kunyomi}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Contoh</Text>
        <Text style={styles.value}>{kanji}する</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff3ee",
    padding: 24,
    alignItems: "center",
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  kanji: {
    fontSize: 64,
    fontWeight: "bold",
  },
  arti: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  box: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
  },
});
