import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function KanjiKehidupan() {
  const router = useRouter();

  const kanjiList = [
    { kanji: "決", arti: "memutuskan", onyomi: "ケツ", kunyomi: "きめる" },
    { kanji: "感", arti: "perasaan", onyomi: "カン", kunyomi: "かんじる" },
    { kanji: "配", arti: "membagikan", onyomi: "ハイ", kunyomi: "くばる" },
    { kanji: "変", arti: "berubah", onyomi: "ヘン", kunyomi: "かわる" },
    { kanji: "続", arti: "lanjut", onyomi: "ゾク", kunyomi: "つづく" },
    { kanji: "比", arti: "membandingkan", onyomi: "ヒ", kunyomi: "くらべる" },
    { kanji: "選", arti: "memilih", onyomi: "セン", kunyomi: "えらぶ" },
    { kanji: "守", arti: "melindungi", onyomi: "シュ", kunyomi: "まもる" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏠 Kanji Kehidupan</Text>

      {kanjiList.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={styles.item}
          onPress={() =>
            router.push({
              pathname: "/materi/n3/kanji/detail",
              params: item,
            })
          }
        >
          <Text style={styles.kanji}>{item.kanji}</Text>
          <View>
            <Text style={styles.arti}>{item.arti}</Text>
            <Text style={styles.reading}>{item.kunyomi}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#dff3ee",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    width: "95%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  kanji: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0F3B36",
  },
  arti: {
    fontSize: 16,
    fontWeight: "600",
  },
  reading: {
    fontSize: 14,
    color: "#666",
  },
});
