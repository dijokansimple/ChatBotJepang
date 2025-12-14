import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

type KanjiRow = {
  no: number;
  arti: string;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  guratan: number;
  akar: string;
  kosakata: string;
};

export default function KanjiWaktuN5() {
  const data = [
  {
  no: 1,
  arti: "Tanggal, Hari, Matahari",
  kanji: "日",
  onyomi: "ニチ・ジツ",
  kunyomi: "ひ・び・か",
  guratan: 4,
  akar: "日（ひ）",
  kosakata:
    "日本（にほん）：Jepang\n一日（いちにち）：Satu hari\n朝日（あさひ）：Matahari pagi",
},
{
  no: 2,
  arti: "Minggu",
  kanji: "週",
  onyomi: "シュウ",
  kunyomi: "-",
  guratan: 11,
  akar: "⻌（しんにょう）",
  kosakata:
    "一週間（いっしゅうかん）：Satu minggu\n週末（しゅうまつ）：Akhir minggu\n今週（こんしゅう）：Minggu ini",
},
{
  no: 3,
  arti: "Bulan",
  kanji: "月",
  onyomi: "ゲツ・ガツ",
  kunyomi: "つき",
  guratan: 4,
  akar: "月（つき）",
  kosakata:
    "来月（らいげつ）：Bulan depan\n一月（いちがつ）：Januari\n毎月（まいげつ／まいつき）：Setiap bulan",
},
{
  no: 4,
  arti: "Tahun",
  kanji: "年",
  onyomi: "ネン",
  kunyomi: "とし",
  guratan: 6,
  akar: "干（かん）",
  kosakata:
    "年齢（ねんれい）：Usia\n新年（しんねん）：Tahun baru\n今年（ことし）：Tahun ini",
},
{
  no: 5,
  arti: "Waktu, Jam",
  kanji: "時",
  onyomi: "ジ",
  kunyomi: "とき・どき",
  guratan: 10,
  akar: "日（ひ）",
  kosakata:
    "時間（じかん）：Waktu\n時代（じだい）：Zaman\n何時（なんじ）：Jam berapa",
},
{
  no: 6,
  arti: "Jangka waktu, Antara",
  kanji: "間",
  onyomi: "カン・ケン",
  kunyomi: "あいだ・ま",
  guratan: 12,
  akar: "門（もんがまえ）",
  kosakata:
    "仲間（なかま）：Teman\n人間（にんげん）：Manusia\n三日間（みっかかん）：Selama tiga hari",
},
{
  no: 7,
  arti: "Menit, Bagian, Membagi",
  kanji: "分",
  onyomi: "ブン・プン・ブ",
  kunyomi: "わける・わかる",
  guratan: 4,
  akar: "刀（かたな）",
  kosakata:
    "自分（じぶん）：Diri sendiri\n三十分（さんじゅっぷん）：30 menit\n分ける（わける）：Membagi",
},
{
  no: 8,
  arti: "Sebelum, Depan",
  kanji: "前",
  onyomi: "ゼン",
  kunyomi: "まえ",
  guratan: 9,
  akar: "刂（りっとう）",
  kosakata:
    "名前（なまえ）：Nama\n午前（ごぜん）：Pagi (AM)\n前後（ぜんご）：Depan belakang",
},
{
  no: 9,
  arti: "Setelah, Belakang",
  kanji: "後",
  onyomi: "ゴ・コウ",
  kunyomi: "あと・うしろ",
  guratan: 9,
  akar: "彳（ぎょうにんべん）",
  kosakata:
    "後ろ（うしろ）：Belakang\n最後（さいご）：Terakhir\n午後（ごご）：Siang (PM)",
},
{
  no: 10,
  arti: "Sekarang",
  kanji: "今",
  onyomi: "コン・キン",
  kunyomi: "いま",
  guratan: 4,
  akar: "人（ひと）",
  kosakata:
    "今朝（けさ）：Pagi ini\n今（いま）：Sekarang\n今日（きょう）：Hari ini",
},
{
  no: 11,
  arti: "Lebih dulu, Sebelumnya",
  kanji: "先",
  onyomi: "セン",
  kunyomi: "さき・まず",
  guratan: 6,
  akar: "儿（ひとあし）",
  kosakata:
    "先生（せんせい）：Guru\n先週（せんしゅう）：Minggu lalu\n先に（さきに）：Sebelumnya",
},
{
  no: 12,
  arti: "Datang, Akan datang",
  kanji: "来",
  onyomi: "ライ",
  kunyomi: "くる・き",
  guratan: 7,
  akar: "木（き）",
  kosakata:
    "来る（くる）：Datang\n来年（らいねん）：Tahun depan\n未来（みらい）：Masa depan",
},
{
  no: 13,
  arti: "Setengah",
  kanji: "半",
  onyomi: "ハン",
  kunyomi: "なかば",
  guratan: 5,
  akar: "十（じゅう）",
  kosakata:
    "半分（はんぶん）：Setengah\n一時半（いちじはん）：Jam 1.30",
},
{
  no: 14,
  arti: "Setiap",
  kanji: "毎",
  onyomi: "マイ",
  kunyomi: "ごと",
  guratan: 6,
  akar: "毋（なかれ）",
  kosakata:
    "毎日（まいにち）：Setiap hari\n毎朝（まいあさ）：Setiap pagi\n毎回（まいかい）：Setiap kali",
},
{
  no: 15,
  arti: "Apa",
  kanji: "何",
  onyomi: "カ",
  kunyomi: "なに・なん",
  guratan: 7,
  akar: "人（ひと）",
  kosakata:
    "何時（なんじ）：Jam berapa\n何（なに）：Apa\n何でも（なんでも）：Apa pun",
},

];


  const renderTable = () => (
    <View style={styles.table}>
      {/* Header */}
      <View style={[styles.row, styles.header]}>
        <Text style={[styles.cell, styles.headerText]}>No</Text>
        <Text style={[styles.cell, styles.headerText]}>Arti Kanji</Text>
        <Text style={[styles.cell, styles.headerText]}>Kanji</Text>
        <Text style={[styles.cell, styles.headerText]}>Onyomi</Text>
        <Text style={[styles.cell, styles.headerText]}>Kunyomi</Text>
        <Text style={[styles.cell, styles.headerText]}>Jumlah Guratan</Text>
        <Text style={[styles.cell, styles.headerText]}>Akar Kanji</Text>
        <Text style={[styles.cell, styles.headerText]}>Kosakata JLPT N5</Text>
      </View>

      {/* Data Rows */}
      {data.map((item, index) => (
        <View
          key={index}
          style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
        >
          <Text style={styles.cell}>{item.no}</Text>
          <Text style={styles.cell}>{item.arti}</Text>
          <Text style={styles.cell}>{item.kanji}</Text>
          <Text style={styles.cell}>{item.onyomi}</Text>
          <Text style={styles.cell}>{item.kunyomi}</Text>
          <Text style={styles.cell}>{item.guratan}</Text>
          <Text style={styles.cell}>{item.akar}</Text>
          <Text style={styles.cell}>{item.kosakata}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tabel Kanji Waktu JLPT N5</Text>
      {renderTable()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  header: {
    backgroundColor: "#d32f2f",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
  rowEven: {
    backgroundColor: "#f9f9f9",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  cell: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 4,
  },
});

