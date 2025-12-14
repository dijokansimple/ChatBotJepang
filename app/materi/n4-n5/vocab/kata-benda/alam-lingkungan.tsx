import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type AnimalWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kosakataHewan: AnimalWord[] = [
    { jp: "keshiki", id: "pemandangan", hira: "けしき・ケシキ", kanji: "景色 *N3" },
    { jp: "kuuki", id: "udara", hira: "くうき・クウキ", kanji: "空気 *N4" },
    { jp: "shizen", id: "alam", hira: "しぜん・シゼン", kanji: "自然 *N3" },
    { jp: "kankyou", id: "lingkungan", hira: "かんきょう・カンキョウ", kanji: "環境 *N2" },
    { jp: "umi", id: "pantai / laut", hira: "うみ・ウミ", kanji: "海 *N4" },
    { jp: "ike", id: "kolam", hira: "いけ・イケ", kanji: "池 *N2" },
    { jp: "kawa", id: "sungai", hira: "かわ・カワ", kanji: "川 *N5" },
    { jp: "mizu", id: "air", hira: "みず・ミズ", kanji: "水 *N5" },
    { jp: "mizuumi", id: "danau", hira: "みずうみ・ミズウミ", kanji: "湖 *N2" },
    { jp: "nami", id: "ombak", hira: "なみ・ナミ", kanji: "波 *N2" },
    { jp: "yama", id: "gunung", hira: "やま・ヤマ", kanji: "山 *N5" },
    { jp: "hi", id: "api", hira: "ひ・ヒ", kanji: "火 *N5" },
    { jp: "kaze", id: "angin", hira: "かぜ・カゼ", kanji: "風 *N4" },
    { jp: "hana", id: "bunga", hira: "はな・ハナ", kanji: "花 *N4" },
    { jp: "ha", id: "daun", hira: "は・ハ", kanji: "葉 *N3" },
    { jp: "eda", id: "cabang pohon", hira: "えだ・エダ", kanji: "枝 *N2" },
    { jp: "ki", id: "pohon", hira: "き・キ", kanji: "木 *N5" },
    { jp: "hayashi", id: "hutan", hira: "はやし・ハヤシ", kanji: "林 *N2" },
    { jp: "mori", id: "hutan", hira: "もり・モリ", kanji: "森 *N2" },
    { jp: "kusa", id: "rumput", hira: "くさ・クサ", kanji: "草 *N3" },
    { jp: "sora", id: "langit", hira: "そら・ソラ", kanji: "空 *N4" },
    { jp: "tsuki", id: "bulan", hira: "つき・ツキ", kanji: "月 *N5" },
    { jp: "kumo", id: "awan", hira: "くも・クモ", kanji: "雲 *N2" },
    { jp: "hoshi", id: "bintang", hira: "ほし・ホシ", kanji: "星 *N2" },
    { jp: "taiyou", id: "matahari", hira: "たいよう・タイヨウ", kanji: "太陽 *N3" },
    { jp: "hikari", id: "cahaya", hira: "ひかり・ヒカリ", kanji: "光 *N3" },
    { jp: "oto", id: "bunyi", hira: "おと・オト", kanji: "音 *N4" },
    { jp: "uchuu", id: "luar angkasa", hira: "うちゅう・ウチュウ", kanji: "宇宙 *N2" },
    { jp: "chikyuu", id: "bumi", hira: "ちきゅう・チキュウ", kanji: "地球 *N3" },
    { jp: "shima", id: "pulau", hira: "しま・シマ", kanji: "島 *N2" },
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
    jp: "Uki ni, kawa de asobu no wa totemo kiken desu.",
    kanji: "雨季に、川で遊ぶのはとても危険です。",
    romaji: "うきに、　かわで　あそぶのは　とても　きけんです。",
    id: "Di musim hujan, bermain di sungai sangat berbahaya.",
    },
    {
    jp: "Hoshi ga yozora ni kagayaite imasu.",
    kanji: "星が夜空に輝いています。",
    romaji: "ほしが　よぞらに　かがやいて　います。",
    id: "Bintang bersinar di langit malam.",
    },
    {
    jp: "Umi to yama to, dochira ga suki desuka?",
    kanji: "海と山と、どちらが好きですか。",
    romaji: "うみと　やまと、どちらが　すきですか。",
    id: "Di antara gunung dan pantai, suka yang mana?",
    },
    {
    jp: "Indonesia wa shima ga ooi kuni desu.",
    kanji: "インドネシアは島が多い国です。",
    romaji: "いんどねしあは　しまが　おおい　くにです。",
    id: "Indonesia adalah negara yang pulaunya banyak.",
    },
    {
    jp: "Kouen no hana ga saite imasu.",
    kanji: "公園の花が咲いています。",
    romaji: "こうえんの　はなが　さいて　います。",
    id: "Bunga di taman sedang bermekaran.",
    },
    {
    jp: "Kyou wa tsuki ga totemo kirei desu.",
    kanji: "今日は月がとてもきれいです。",
    romaji: "きょうは　つきが　とても　きれいです。",
    id: "Hari ini bulannya sangat cantik.",
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
      <Text style={styles.title}>Kosakata Alam dan Lingkungan dalam Bahasa Jepang</Text>

      <Image
        source={require("./alam-dan-lingkungan.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah daftar kosakata alam dan lingkungan dalam bahasa Jepang
        beserta hiragana dan kanjinya.
      </Text>

      {renderTable(kosakataHewan)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Perhatikan contoh penggunaan kosakata alam dan lingkungan berikut dalam kalimat bahasa Jepang.
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
    height: 400,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
