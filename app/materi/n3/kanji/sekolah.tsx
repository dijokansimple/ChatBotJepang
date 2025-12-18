import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function KanjiSekolah() {
  const router = useRouter();

  const kanjiList = [
    { kanji: "授", arti: "mengajar / memberi", onyomi: "ジュ", kunyomi: "さずける" },
    { kanji: "業", arti: "pelajaran / pekerjaan", onyomi: "ギョウ", kunyomi: "わざ" },
    { kanji: "課", arti: "tugas / bagian", onyomi: "カ", kunyomi: "-" },
    { kanji: "試", arti: "ujian / mencoba", onyomi: "シ", kunyomi: "ためす" },
    { kanji: "験", arti: "pengalaman / ujian", onyomi: "ケン", kunyomi: "-" },
    { kanji: "績", arti: "prestasi", onyomi: "セキ", kunyomi: "-" },
    { kanji: "単", arti: "satuan / sederhana", onyomi: "タン", kunyomi: "-" },
    { kanji: "位", arti: "peringkat", onyomi: "イ", kunyomi: "くらい" },
    { kanji: "研", arti: "meneliti", onyomi: "ケン", kunyomi: "とぐ" },
    { kanji: "究", arti: "menyelidiki", onyomi: "キュウ", kunyomi: "きわめる" },
    { kanji: "表", arti: "presentasi / permukaan", onyomi: "ヒョウ", kunyomi: "あらわす" },
    { kanji: "論", arti: "teori / diskusi", onyomi: "ロン", kunyomi: "-" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎒 Kanji Sekolah</Text>
      <Text style={styles.sub}>Kanji yang sering muncul di dunia pendidikan</Text>

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
            <Text style={styles.reading}>
              {item.onyomi} ・ {item.kunyomi}
            </Text>
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
    marginBottom: 6,
    color: "#0F3B36",
  },
  sub: {
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    width: "95%",
    backgroundColor: "#ffffff",
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
