import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// Tipe data kosakata hewan
type AnimalWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kosakataMusim: AnimalWord[] = [
  { jp: "kisetsu", id: "musim", hira: "きせつ・キセツ", kanji: "季節 *N2" },
{ jp: "haru", id: "musim semi", hira: "はる・ハル", kanji: "春 *N4" },
{ jp: "natsu", id: "musim panas", hira: "なつ・ナツ", kanji: "夏 *N4" },
{ jp: "aki", id: "musim gugur", hira: "あき・アキ", kanji: "秋 *N4" },
{ jp: "fuyu", id: "musim dingin", hira: "ふゆ・フユ", kanji: "冬 *N4" },
{ jp: "atatakai", id: "hangat", hira: "あたたかい・アタタカイ", kanji: "暖かい *N1" },
{ jp: "atsui", id: "panas", hira: "あつい・アツイ", kanji: "暑い *N1" },
{ jp: "suzushii", id: "sejuk", hira: "すずしい・スズシイ", kanji: "涼しい *N2" },
{ jp: "samui", id: "dingin", hira: "さむい・サムイ", kanji: "寒い *N3" },
{ jp: "hanami", id: "aktivitas melihat bunga sakura", hira: "はなみ・ハナミ", kanji: "花見 *N4" },
{ jp: "kouyou", id: "warna daun musim gugur / momiji", hira: "こうよう・コウヨウ", kanji: "紅葉 *N2" },
{ jp: "hanabi", id: "kembang api", hira: "はなび・ハナビ", kanji: "花火 *N4" },
{ jp: "tenki", id: "cuaca", hira: "てんき・テンキ", kanji: "天気 *N5" },
{ jp: "tenki yohou", id: "ramalan cuaca", hira: "てんきよほう・テンキヨホウ", kanji: "天気予報 *N3" },
{ jp: "kaze", id: "angin", hira: "かぜ・カゼ", kanji: "風 *N4" },
{ jp: "hare", id: "cerah", hira: "はれ・ハレ", kanji: "晴れ *N3" },
{ jp: "kumori", id: "mendung / berawan", hira: "くもり・クモリ", kanji: "曇り *N2" },
{ jp: "ame", id: "hujan", hira: "あめ・アメ", kanji: "雨 *N5" },
{ jp: "yuki", id: "salju", hira: "ゆき・ユキ", kanji: "雪 *N3" },
{ jp: "tsuyu", id: "musim hujan di Jepang (Mei–Juli)", hira: "つゆ・ツユ", kanji: "梅雨 *N1" },
{ jp: "aozora", id: "langit biru", hira: "あおぞら・アオゾラ", kanji: "青空 *N4" },
{ jp: "kion", id: "suhu / temperatur", hira: "きおん・キオン", kanji: "気温 *N2" },
{ jp: "taifuu", id: "angin topan", hira: "たいふう・タイフウ", kanji: "台風 *N4" },
{ jp: "nami", id: "ombak", hira: "なみ・ナミ", kanji: "波 *N2" },
{ jp: "kaminari", id: "petir", hira: "かみなり・カミナリ", kanji: "雷 *N1" },
{ jp: "kasa", id: "payung", hira: "かさ・カサ", kanji: "傘 *N1" },
{ jp: "reinkooto", id: "jas hujan", hira: "レインコート", kanji: "" },

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
    jp: "Nihon no aki wa sugoshiyasui desu.",
    kanji: "日本の秋は過ごしやすいです。",
    romaji: "にほんの　あきは　すごしやすい　です。",
    id: "Musim gugur di Jepang mudah untuk dilewati.",
    },
    {
    jp: "Kyou wa hare desu ne. Dokoka e sanpo ni ikimasenka?",
    kanji: "今日は晴れですね。どこかへ散歩に行きませんか。",
    romaji: "きょうは　はれですね。どこかへ　さんぽに　いきませんか。",
    id: "Hari ini cerah ya. Mau pergi berjalan-jalan ke suatu tempat?",
    },
    {
    jp: "Ichiban suki na kisetsu wa nan desuka?",
    kanji: "一番好きな季節は何ですか。",
    romaji: "いちばん　すきな　きせつは　なんですか。",
    id: "Musim yang paling (Anda) suka apa?",
    },
    {
    jp: "Nihon wa shiki ga hakkiri shite iru kara, itsu ryokou ni itte mo tanoshimeru yo ne. Haru wa sakura, aki wa kouyou wo mi ni ikitai na.",
    kanji: "日本は四季がはっきりしているから、いつ旅行に行っても楽しめるよね。春は桜、秋は紅葉を見に行きたいな。",
    romaji: "にほんは　しきが　はっきり　して　いるから、いつ　りょこうに　いっても　たのしめる　よね。はるは　さくら、あきは　こうようを　みに　いきたいな。",
    id: "Jepang memiliki empat musim yang berbeda, jadi kita bisa menikmati wisata kapan saja. Aku ingin melihat bunga sakura di musim semi dan dedaunan berguguran di musim gugur.",
    },
    {
    jp: "Watashi wa yuki wo mita koto ga nai kara, yuki ga furu basho ni itte mitai desu.",
    kanji: "私は雪を見たことがないから、雪が降る場所に行ってみたいです。",
    romaji: "わたしは　ゆきを　みた　ことが　ないから、　ゆきが　ふる　ばしょに　いって　みたいです。",
    id: "Karena (saya) belum pernah melihat salju, (saya) ingin mencoba pergi ke tempat yang turun salju.",
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

export default function KosakataMusim() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Musim dan Cuaca dalam Bahasa Jepang</Text>

      <Image
        source={require("./musim-cuaca.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah daftar kosakata musim dan cuaca dalam bahasa Jepang
        beserta hiragana dan kanjinya.
      </Text>

      {renderTable(kosakataMusim)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Perhatikan contoh penggunaan kosakata musim dan cuaca berikut dalam kalimat bahasa Jepang.
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
    width: "80%",
    maxWidth: 600,
    height: 450,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
