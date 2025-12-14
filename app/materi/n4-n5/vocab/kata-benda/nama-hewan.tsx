import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// Tipe data kosakata hewan
type AnimalWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

// Kosakata hewan
const kosakataHewan: AnimalWord[] = [
  { jp: "inu", id: "anjing", hira: "いぬ・イヌ", kanji: "犬 *N4" },
  { jp: "koinu", id: "anak anjing", hira: "こいぬ・コイヌ", kanji: "子犬" },

  { jp: "neko", id: "kucing", hira: "ねこ・ネコ", kanji: "猫 *N3" },
  { jp: "koneko", id: "anak kucing", hira: "こねこ・コネコ", kanji: "子猫" },

  { jp: "tori", id: "burung", hira: "とり・トリ", kanji: "鳥 *N4" },
  { jp: "kotori", id: "anak burung", hira: "ことり・コトリ", kanji: "小鳥" },

  { jp: "uma", id: "kuda", hira: "うま・ウマ", kanji: "馬 *N3" },
  { jp: "buta", id: "babi", hira: "ぶた・ブタ", kanji: "豚 *N1" },
  { jp: "ushi", id: "sapi", hira: "うし・ウシ", kanji: "牛 *N4" },

  { jp: "niwatori", id: "ayam", hira: "にわとり・ニワトリ", kanji: "鶏 *N1" },
  { jp: "zou", id: "gajah", hira: "ぞう・ゾウ", kanji: "象 *N3" },
  { jp: "sakana", id: "ikan", hira: "さかな・サカナ", kanji: "魚 *N4" },

  { jp: "mushi", id: "serangga", hira: "むし・ムシ", kanji: "虫 *N2" },
  { jp: "iruka", id: "lumba-lumba", hira: "いるか・イルカ", kanji: "海豚 (jarang digunakan)" },

  { jp: "panda", id: "panda", hira: "パンダ" },
  { jp: "usagi", id: "kelinci", hira: "うさぎ・ウサギ", kanji: "兎 *N2" },

  { jp: "ookami", id: "serigala", hira: "おおかみ・オオカミ", kanji: "狼 (jarang digunakan)" },
  { jp: "kuma", id: "beruang", hira: "くま・クマ", kanji: "熊 *N1" },

  { jp: "koara", id: "koala", hira: "コアラ" },
  { jp: "saru", id: "monyet", hira: "さる・サル", kanji: "猿 *N2" },

  { jp: "shika", id: "rusa", hira: "しか・シカ", kanji: "鹿 *N1" },
  { jp: "shima-uma", id: "zebra", hira: "しまうま・シマウマ", kanji: "縞馬 (jarang digunakan)" },

  { jp: "tora", id: "harimau", hira: "とら・トラ", kanji: "虎 *N2" },
  { jp: "nezumi", id: "tikus", hira: "ねずみ・ネズミ", kanji: "鼠 *N2" },

  { jp: "hitsuji", id: "domba / biri-biri", hira: "ひつじ・ヒツジ", kanji: "羊 (jarang digunakan)" },
];

// Tipe contoh kalimat
type ExampleSentence = {
  jp: string;
  kanji?: string;
  romaji?: string;
  id: string;
};

// Contoh kalimat
const contohKalimat: ExampleSentence[] = [
  {
    jp: "Isu no shita ni neko ga imasu.",
    kanji: "椅子の下に猫がいます。",
    romaji: "いすの　したに　ねこが　います。",
    id: "Di bawah kursi ada kucing.",
  },
  {
    jp: "Watashi wa inu wo katte imasu.",
    kanji: "私は犬を飼っています。",
    romaji: "わたしは　いぬを　かって　います。",
    id: "Saya memelihara anjing.",
  },
  {
    jp: "Ano koneko wa kawaii desu.",
    kanji: "あの子猫はかわいいです。",
    romaji: "あの　こねこは　かわいい　です。",
    id: "Anak kucing itu lucu.",
  },
  {
    jp: "Uma ni noru no ga suki desu ka?",
    kanji: "馬に乗るのが好きですか。",
    romaji: "うまに　のる　のが　すきですか。",
    id: "Apakah (Anda) suka naik kuda?",
  },
  {
    jp: "Nihon de wa neko kafe dake de wa naku, buta kafe mo ninki desu.",
    kanji: "日本では猫カフェだけではなく、豚カフェも人気です。",
    romaji: "にほんでは　ねこ　かふぇ　だけ　ではなく、ぶた　かふぇも　にんきです。",
    id: "Di Jepang tidak hanya kafe kucing, tetapi kafe babi juga terkenal.",
  },
];

// Render tabel
const renderTable = (data: AnimalWord[]) => (
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

// Render contoh kalimat
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

export default function KosakataHewan() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Hewan dalam Bahasa Jepang</Text>

      <Image
        source={require("./nama-hewan.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah daftar kosakata nama-nama hewan dalam bahasa Jepang
        beserta hiragana dan kanjinya.
      </Text>

      {renderTable(kosakataHewan)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Perhatikan contoh penggunaan kosakata hewan berikut dalam kalimat bahasa Jepang.
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
    backgroundColor: "#ffffff",
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
    height: 450,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
