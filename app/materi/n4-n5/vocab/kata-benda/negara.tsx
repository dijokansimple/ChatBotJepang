import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// Tipe data kosakata negara & dunia
type CountryWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

// Kosakata negara & istilah dunia
const kosakataNegara: CountryWord[] = [
  { jp: "Nihon", id: "Jepang", hira: "にほん・ニホン", kanji: "日本 *N5" },
  { jp: "Kankoku", id: "Korea", hira: "かんこく・カンコク", kanji: "韓国" },
  { jp: "Chuugoku", id: "China", hira: "ちゅうごく・チュウゴク", kanji: "中国 *N5" },

  { jp: "Amerika", id: "Amerika", hira: "アメリカ・べいこく・ベイコク", kanji: "米国 *N3" },
  { jp: "Kita Amerika", id: "Amerika Utara", hira: "きたアメリカ", kanji: "北アメリカ *N5" },
  { jp: "Minami Amerika", id: "Amerika Selatan", hira: "みなみアメリカ", kanji: "南アメリカ *N5" },

  { jp: "Afurika", id: "Afrika", hira: "アフリカ" },
  { jp: "Burajiru", id: "Brazil", hira: "ブラジル" },
  { jp: "Kanada", id: "Kanada", hira: "カナダ" },
  { jp: "Yooroppa", id: "Eropa", hira: "ヨーロッパ" },

  { jp: "Igirisu", id: "Inggris", hira: "イギリス・えいこく・エイコク", kanji: "英国 *N4" },
  { jp: "Ejiputo", id: "Mesir", hira: "エジプト" },
  { jp: "Doitsu", id: "Jerman", hira: "ドイツ" },
  { jp: "Furansu", id: "Prancis", hira: "フランス" },
  { jp: "Itaria", id: "Italia", hira: "イタリア" },
  { jp: "Roshia", id: "Rusia", hira: "ロシア" },
  { jp: "Oosutoraria", id: "Australia", hira: "オーストラリア" },

  { jp: "Ajia", id: "Asia", hira: "アジア" },
  { jp: "Indo", id: "India", hira: "インド" },
  { jp: "Shingapooru", id: "Singapura", hira: "シンガポール" },
  { jp: "Mareeshia", id: "Malaysia", hira: "マレーシア" },
  { jp: "Tai", id: "Thailand", hira: "タイ" },
  { jp: "Indonesia", id: "Indonesia", hira: "インドネシア" },
  { jp: "Firipin", id: "Filipina", hira: "フィリピン" },

  { jp: "kuni", id: "negara", hira: "くに・クニ", kanji: "国 *N5" },
  { jp: "sekai", id: "dunia", hira: "せかい・セカイ", kanji: "世界 *N4" },
  { jp: "sekaijuu", id: "seluruh dunia", hira: "せかいじゅう・セカイジュウ", kanji: "世界中 *N4" },

  { jp: "gaikoku", id: "luar negeri", hira: "がいこく・ガイコク", kanji: "外国 *N5" },
  { jp: "kaigai", id: "luar negeri (overseas)", hira: "かいがい・カイガイ", kanji: "海外 *N4" },
  { jp: "kokunai", id: "dalam negeri", hira: "こくない・コクナイ", kanji: "国内 *N4" },

  { jp: "kokusai", id: "internasional", hira: "こくさい・コクサイ", kanji: "国際 *N4" },
  { jp: "jinkou", id: "populasi penduduk", hira: "じんこう・ジンコウ", kanji: "人口 *N4" },
  { jp: "bunka", id: "budaya", hira: "ぶんか・ブンカ", kanji: "文化 *N4" },

  { jp: "seiji", id: "politik", hira: "せいじ・セイジ", kanji: "政治 *N3" },
  { jp: "keizai", id: "ekonomi", hira: "けいざい・ケイザイ", kanji: "経済 *N3" },
  { jp: "shakai", id: "masyarakat / sosial", hira: "しゃかい・シャカイ", kanji: "社会 *N4" },

  { jp: "sekai isan", id: "warisan dunia", hira: "せかいいさん・セカイイサン", kanji: "世界遺産 *N1" },
];

// Tipe contoh kalimat
type ExampleSentence = {
  jp: string;
  kanji: string;
  romaji: string;
  id: string;
};

// Contoh kalimat
const contohKalimat: ExampleSentence[] = [
  {
    jp: "Kuni e kaette kara, nani wo suru tsumori desu ka?",
    kanji: "国へ帰ってから、何をするつもりですか。",
    romaji: "くにへ　かえってから、なにを　する　つもりですか。",
    id: "Setelah pulang ke negara (Anda), apa rencana yang akan dilakukan?",
  },
  {
    jp: "Toukyou wa sekai de ichiban suteki na basho da to omoimasu.",
    kanji: "東京は世界で一番素敵な場所だと思います。",
    romaji: "とうきょうは　せかいで　いちばん　すてきな　ばしょだと　おもいます。",
    id: "Menurut saya, Tokyo adalah tempat paling indah di dunia.",
  },
  {
    jp: "Watashi wa kaigai ni itta koto ga arimasen.",
    kanji: "私は海外に行ったことがありません。",
    romaji: "わたしは　かいがいに　いった　ことが　ありません。",
    id: "Saya belum pernah pergi ke luar negeri.",
  },
  {
    jp: "Rainen, Amerika ni ryuugaku shiyou to omotte imasu.",
    kanji: "来年、アメリカに留学しようと思っています。",
    romaji: "らいねん、あめりかに　りゅうがく　しようと　おもっています。",
    id: "Tahun depan saya berencana untuk studi ke Amerika.",
  },
  {
    jp: "Watashi wa Igirisu shusshin no tomodachi ga sannin imasu.",
    kanji: "私はイギリス出身の友達が3人います。",
    romaji: "わたしは　いぎりす　しゅっしんの　ともだちが　さんにん　います。",
    id: "Saya punya tiga teman yang berasal dari Inggris.",
  },
];

// Render tabel
const renderTable = (data: CountryWord[]) => (
  <View style={styles.table}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
      <Text style={[styles.cell, styles.headerCell]}>Hiragana / Katakana</Text>
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

export default function KosakataNegara() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Negara & Dunia</Text>

      <Image
        source={require("./negara.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah kosakata nama negara dan istilah yang berkaitan dengan dunia
        dalam bahasa Jepang.
      </Text>

      {renderTable(kosakataNegara)}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Berikut contoh penggunaan kosakata negara dan dunia dalam kalimat bahasa Jepang.
      </Text>

{renderExamples(contohKalimat)}
    </ScrollView>
  );
}

const renderExamples = (examples: ExampleSentence[]) => (
  <View style={styles.examples}>
    {examples.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>
        <Text style={styles.exampleText}>Hiragana: {ex.romaji}</Text>
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

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
    maxWidth: 700,
    height: 450,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
