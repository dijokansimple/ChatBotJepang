import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type AnimalWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

// Kosakata hewan
const kosakataBadan: AnimalWord[] = [
    { jp: "karada", id: "tubuh / badan (keseluruhan)", hira: "からだ・カラダ", kanji: "体 *N4" },
    { jp: "atama", id: "kepala", hira: "あたま・アタマ", kanji: "頭 *N3" },
    { jp: "kao", id: "wajah", hira: "かお・カオ", kanji: "顔 *N3" },
    { jp: "kami", id: "rambut", hira: "かみ・カミ", kanji: "髪 *N3" },
    { jp: "odeko / hitai", id: "dahi", hira: "おでこ・ひたい・オデコ・ヒタイ", kanji: "額 *N2" },
    { jp: "me", id: "mata", hira: "め・メ", kanji: "目 *N4" },
    { jp: "hitomi", id: "pupil mata", hira: "ひとみ・ヒトミ", kanji: "瞳 *N1" },
    { jp: "mimi", id: "telinga", hira: "みみ・ミミ", kanji: "耳 *N3" },
    { jp: "hana", id: "hidung", hira: "はな・ハナ", kanji: "鼻 *N2" },
    { jp: "hoo / hoho / hoppeta", id: "pipi", hira: "ほお・ほほ・ほっぺた・ホオ・ホホ・ホッペタ", kanji: "頬・頬っぺた *N1" },
    { jp: "kuchi", id: "mulut", hira: "くち・クチ", kanji: "口 *N5" },
    { jp: "kuchibiru", id: "bibir", hira: "くちびる・クチビル", kanji: "唇 *N1" },
    { jp: "shita", id: "lidah", hira: "した・シタ", kanji: "舌 *N1" },
    { jp: "ha", id: "gigi", hira: "は・ハ", kanji: "歯 *N3" },
    { jp: "ago", id: "dagu", hira: "あご・アゴ", kanji: "顎" },
    { jp: "hige", id: "jenggot", hira: "ひげ・ヒゲ", kanji: "髭" },
    { jp: "kubi", id: "leher", hira: "くび・クビ", kanji: "首 *N3" },
    { jp: "nodo", id: "kerongkongan", hira: "のど・ノド", kanji: "喉" },
    { jp: "se", id: "badan (tinggi / pendek)", hira: "せ・セ", kanji: "背 *N3" },
    { jp: "senaka", id: "punggung", hira: "せなか・セナカ", kanji: "背中 *N3" },
    { jp: "kata", id: "pundak", hira: "かた・カタ", kanji: "肩 *N2" },
    { jp: "ude", id: "lengan", hira: "うで・ウデ", kanji: "腕 *N2" },
    { jp: "hiji", id: "siku", hira: "ひじ・ヒジ", kanji: "肘" },
    { jp: "te", id: "tangan", hira: "て・テ", kanji: "手 *N4" },
    { jp: "yubi", id: "jari", hira: "ゆび・ユビ", kanji: "指 *N3" },
    { jp: "tsume", id: "kuku", hira: "つめ・ツメ", kanji: "爪" },
    { jp: "mune", id: "dada", hira: "むね・ムネ", kanji: "胸 *N2" },
    { jp: "onaka", id: "perut", hira: "おなか・オナカ", kanji: "お腹 *N3" },
    { jp: "i", id: "lambung", hira: "い・イ", kanji: "胃 *N2" },
    { jp: "koshi", id: "pinggang", hira: "こし・コシ", kanji: "腰 *N2" },
    { jp: "hone", id: "tulang", hira: "ほね・ホネ", kanji: "骨 *N2" },
    { jp: "hiza", id: "lutut", hira: "ひざ・ヒザ", kanji: "膝" },
    { jp: "ashi", id: "kaki", hira: "あし・アシ", kanji: "足 *N4" },
    { jp: "chikara", id: "kekuatan", hira: "ちから・チカラ", kanji: "力 *N5" },
    { jp: "shinchou", id: "tinggi badan", hira: "しんちょう・シンチョウ", kanji: "身長 *N3" },
    { jp: "taijuu", id: "berat badan", hira: "たいじゅう・タイジュウ", kanji: "体重 *N4" },
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
    jp: "Ane wa kami ga kurokute mijikai desu.",
    kanji: "姉は髪が黒くて短いです。",
    romaji: "あねは　かみが　くろくて　みじかいです。",
    id: "Kakak perempuan rambutnya hitam dan pendek.",
    },
    {
    jp: "Watashi wa ani yori se ga hikui desu.",
    kanji: "私は兄より背が低いです。",
    romaji: "わたしは　あにより　せが　ひくいです。",
    id: "Saya badannya lebih pendek dibandingkan dengan kakak laki-laki.",
    },
    {
    jp: "Chichi wa watashi no kata wo karuku tataita.",
    kanji: "父は私の肩を軽くたたいた。",
    romaji: "ちちは　わたしの　かたを　かるく　たたいた。",
    id: "Ayah menepuk pundak saya dengan ringan.",
    },
    {
    jp: "Haha wa imouto no hoo ni kisu shita.",
    kanji: "母は妹の頬にキスした。",
    romaji: "ははは　いもうとの　ほおに　きす　した。",
    id: "Ibu mencium pipi adik perempuan.",
    },
    {
    jp: "Onaka suita! Nani tabeyou kana.",
    kanji: "お腹空いた！何食べようかな。",
    romaji: "おなか　すいた！なに　たべよう　かな。",
    id: "Lapar! Makan apa ya.",
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

export default function kosakataAnggotaBadan() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Anggota Badan dalam Bahasa Jepang</Text>

      <Image
        source={require("./anggota-badan.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah daftar kosakata nama-nama anggota badan dalam bahasa Jepang
        beserta hiragana dan kanjinya.
      </Text>

      {renderTable(kosakataBadan)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Perhatikan contoh penggunaan kosakata anggota badan berikut dalam kalimat bahasa Jepang.
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
