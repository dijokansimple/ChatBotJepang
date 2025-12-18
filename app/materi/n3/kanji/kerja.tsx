import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function KanjiKerja() {
  const router = useRouter();

  const kanjiList = [
    { kanji: "働", arti: "bekerja", onyomi: "ドウ", kunyomi: "はたらく" },
    { kanji: "職", arti: "pekerjaan / jabatan", onyomi: "ショク", kunyomi: "-" },
    { kanji: "給", arti: "gaji / memberi", onyomi: "キュウ", kunyomi: "-" },
    { kanji: "料", arti: "biaya / gaji", onyomi: "リョウ", kunyomi: "-" },
    { kanji: "残", arti: "sisa / lembur", onyomi: "ザン", kunyomi: "のこる" },
    { kanji: "勤", arti: "rajin / bekerja", onyomi: "キン", kunyomi: "つとめる" },
    { kanji: "務", arti: "tugas / dinas", onyomi: "ム", kunyomi: "つとめる" },
    { kanji: "休", arti: "libur / istirahat", onyomi: "キュウ", kunyomi: "やすむ" },
    { kanji: "退", arti: "keluar / resign", onyomi: "タイ", kunyomi: "しりぞく" },
    { kanji: "辞", arti: "mengundurkan diri", onyomi: "ジ", kunyomi: "やめる" },
    { kanji: "昇", arti: "naik jabatan", onyomi: "ショウ", kunyomi: "のぼる" },
    { kanji: "給", arti: "gaji", onyomi: "キュウ", kunyomi: "-" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💼 Kanji Dunia Kerja</Text>
      <Text style={styles.sub}>Kanji yang sering muncul di kantor & pekerjaan</Text>

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
    backgroundColor: "#f0f7f5",
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
