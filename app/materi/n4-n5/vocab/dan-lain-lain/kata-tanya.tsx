import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// Tipe data untuk kosakata kata tanya
type QuestionWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

// Kosakata kata tanya
const kataTanya: QuestionWord[] = [
  { jp: "nan / nani", id: "apa", hira: "なん・なに", kanji: "何 *N5" },
  { jp: "dare", id: "siapa", hira: "だれ", kanji: "誰" },
  { jp: "doko", id: "di mana", hira: "どこ" },
  { jp: "itsu", id: "kapan", hira: "いつ" },
  { jp: "dore / dono", id: "yang mana", hira: "どれ・どの" },
  { jp: "dochira", id: "di mana / yang mana", hira: "どちら" },
  { jp: "doushite / nande", id: "mengapa / kenapa", hira: "どうして・なんで" },
  { jp: "dou", id: "bagaimana", hira: "どう" },
  { jp: "ikura", id: "berapa harganya", hira: "いくら" },
  { jp: "ikutsu", id: "berapa banyak", hira: "いくつ" },
];

// Contoh kalimat
type ExampleSentence = {
  jp: string;
  kanji?: string;
  romaji?: string;
  id: string;
};

const contohKalimat: ExampleSentence[] = [
  {
    jp: "Nani wo nomimasuka?",
    kanji: "何を飲みますか？",
    romaji: "なにを　のみますか？",
    id: "Minum apa?",
  },
  {
    jp: "Kore wa nan no hon desuka?",
    kanji: "これは何の本ですか？",
    romaji: "これは　なんの　ほんですか？",
    id: "Ini buku apa?",
  },
  {
    jp: "Kore wa dare no kasa desuka?",
    kanji: "これは誰の傘ですか？",
    romaji: "これは　だれの　かさですか？",
    id: "Ini payung milik siapa?",
  },
  {
    jp: "Dore ga hoshii desuka?",
    kanji: "どれがほしいですか？",
    romaji: "どれが　ほしいですか？",
    id: "Mau yang mana?",
  },
  {
    jp: "Dono kaban wo kaitai desuka?",
    kanji: "どのかばんを買いたいですか？",
    romaji: "どの　かばんを　かいたいですか？",
    id: "Ingin membeli tas yang mana?",
  },
];

// Fungsi render tabel
const renderTable = (data: QuestionWord[]) => (
  <View style={styles.table}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
      <Text style={[styles.cell, styles.headerCell]}>Hiragana</Text>
      <Text style={[styles.cell, styles.headerCell]}>Kanji *JLPT</Text>
    </View>
    {data.map((item, index) => (
      <View
        key={index}
        style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
      >
        <Text style={styles.cell}>{item.jp}</Text>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.hira}</Text>
        <Text style={styles.cell}>{item.kanji || "-"}</Text>
      </View>
    ))}
  </View>
);

// Fungsi render contoh kalimat
const renderExamples = (examples: ExampleSentence[]) => (
  <View style={styles.examples}>
    {examples.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        {ex.kanji && <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>}
        {ex.romaji && <Text style={styles.exampleText}>Romaji: {ex.romaji}</Text>}
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

export default function KataTanya() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Tanya Bahasa Jepang</Text>

      {/* Gambar */}
      <Image
        source={require("./kata-tanya.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah kata tanya dalam bahasa Jepang.
      </Text>


      {renderTable(kataTanya)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Selanjutnya, untuk bisa lebih mudah mengingat kosakata kata tanya dalam
        bahasa Jepang, perhatikan contoh kalimat berikut ini.
      </Text>

      {renderExamples(contohKalimat)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#dff3ee",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    color: "#0F3B36",
  },
  caption: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
  },
  table: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
    alignItems: "center",
  },
  headerRow: {
    backgroundColor: "#F7A6A6",
  },
  headerCell: {
    fontWeight: "bold",
    color: "white",
  },
  rowEven: {
    backgroundColor: "#eaf1ff",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 2,
  },
  examples: {
    marginBottom: 40,
  },
  exampleBox: {
    backgroundColor: "#ffffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 2,
    color: "#333",
  },
  image: {
    width: "100%",
    maxWidth: 450,
    height: 350,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
