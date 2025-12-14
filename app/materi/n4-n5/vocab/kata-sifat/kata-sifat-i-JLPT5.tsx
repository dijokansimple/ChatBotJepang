import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type IAdjective = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kataSifatI: IAdjective[] = [
  { jp: "ookii", id: "besar", hira: "おおきい", kanji: "大きい *N5" },
  { jp: "chiisai", id: "kecil", hira: "ちいさい", kanji: "小さい *N5" },
  { jp: "takai", id: "tinggi / mahal", hira: "たかい", kanji: "高い *N5" },
  { jp: "hikui", id: "rendah", hira: "ひくい", kanji: "低い *N2" },
  { jp: "yasui", id: "murah", hira: "やすい", kanji: "安い *N4" },
  { jp: "yoi / ii", id: "bagus", hira: "よい・いい", kanji: "良い *N3" },
  { jp: "warui", id: "buruk", hira: "わるい", kanji: "悪い *N4" },
  { jp: "tooi", id: "jauh", hira: "とおい", kanji: "遠い *N3" },
  { jp: "chikai", id: "dekat", hira: "ちかい", kanji: "近い *N4" },
  { jp: "omoi", id: "berat", hira: "おもい", kanji: "重い *N4" },
  { jp: "karui", id: "ringan", hira: "かるい", kanji: "軽い *N2" },
  // ... bisa dilanjutkan sesuai data awal
];

// Fungsi render tabel tanpa kolom No
const renderTable = (data: IAdjective[]) => (
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

// Contoh kalimat
const contohKalimat = [
  {
    jp: "Kono mise no ryouri wa oishii desu ga, nedan wa totemo takai desu.",
    kanji: "この店の料理は美味しいですが、値段はとても高いです。",
    romaji: "この　みせの　りょうりは　おいしい　ですが、　ねだんは　とても　たかいです。",
    id: "Masakan toko ini enak, tetapi harganya sangat mahal.",
  },
  {
    jp: "Kanojo wa kawaii shi, atama mo ii shi, yasashii shi, daisuki desu.",
    kanji: "彼女は可愛いし、頭もいいし、優しいし、大好きです。",
    romaji: "かのじょは　かわいいし、　あたまも　いいし、　やさしいし、　だいすきです。",
    id: "Dia (perempuan) imut, pintar, dan juga baik, sehingga (saya) sangat menyukainya.",
  },
  // ... bisa dilanjutkan sesuai data awal
];

// Render contoh kalimat
const renderExamples = () => (
  <View style={styles.examples}>
    {contohKalimat.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>
        <Text style={styles.exampleText}>Romaji: {ex.romaji}</Text>
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

export default function KataSifatI() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Sifat Berakhiran i (i-adjectives)</Text>

      {/* Gambar */}
      <Image
        source={require("./i-n5.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata kata sifat berakhiran i dalam bahasa Jepang.
      </Text>

      {renderTable(kataSifatI)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Selanjutnya, untuk lebih mudah mengingat kosakata kata sifat berakhiran i, perhatikan contoh kalimat berikut.
      </Text>

      {renderExamples()}
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
    marginBottom: 20,
    textAlign: "center",
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    color: "#0F3B36",
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
  headerRow: {
    backgroundColor: "#F7A6A6",
  },
  headerCell: {
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "100%",
    maxWidth: 450,
    height: 350,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
  exampleBox: {
    backgroundColor: "#ffffffff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
  },
  examples: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
});
