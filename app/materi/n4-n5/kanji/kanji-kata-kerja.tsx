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

export default function KanjiKerjaN5() {
  const data = [
  {
  no: 1,
  arti: "Melihat, Menonton, Menunjukkan",
  kanji: "見",
  onyomi: "ケン",
  kunyomi: "み（る）",
  guratan: 7,
  akar: "見（みる）",
  kosakata:
    "意見（いけん）：Pendapat\n見える（みえる）：Terlihat\n花見（はなみ）：Melihat bunga (Hanami)",
},
{
  no: 2,
  arti: "Mendengar, Bertanya",
  kanji: "聞",
  onyomi: "モン・ブン",
  kunyomi: "き（く）",
  guratan: 14,
  akar: "耳（みみ）",
  kosakata:
    "新聞（しんぶん）：Koran\n聞こえる（きこえる）：Terdengar\n聞く（きく）：Mendengar",
},
{
  no: 3,
  arti: "Menulis",
  kanji: "書",
  onyomi: "ショ",
  kunyomi: "か（く）",
  guratan: 10,
  akar: "日（ひ）",
  kosakata:
    "文書（ぶんしょ）：Dokumen\n読書（どくしょ）：Membaca\n図書館（としょかん）：Perpustakaan",
},
{
  no: 4,
  arti: "Membaca",
  kanji: "読",
  onyomi: "ドク",
  kunyomi: "よ（む）",
  guratan: 14,
  akar: "言（ごんへん）",
  kosakata:
    "読者（どくしゃ）：Pembaca\n読み方（よみかた）：Cara baca\n読み書き（よみかき）：Baca tulis",
},
{
  no: 5,
  arti: "Berbicara, Bercerita",
  kanji: "話",
  onyomi: "ワ",
  kunyomi: "はな（す）・はなし",
  guratan: 13,
  akar: "言（ごんへん）",
  kosakata:
    "電話（でんわ）：Telepon\n会話（かいわ）：Percakapan\n話題（わだい）：Topik",
},
{
  no: 6,
  arti: "Membeli, Berbelanja",
  kanji: "買",
  onyomi: "バイ",
  kunyomi: "か（う）",
  guratan: 12,
  akar: "貝（かい）",
  kosakata:
    "買い物（かいもの）：Belanja\n売買（ばいばい）：Jual beli\n購買（こうばい）：Pembelian",
},
{
  no: 7,
  arti: "Pergi, Melakukan",
  kanji: "行",
  onyomi: "コウ",
  kunyomi: "い（く）・おこな（う）",
  guratan: 6,
  akar: "彳（ぎょうにんべん）",
  kosakata:
    "旅行（りょこう）：Perjalanan\n銀行（ぎんこう）：Bank\n行う（おこなう）：Melaksanakan",
},
{
  no: 8,
  arti: "Keluar",
  kanji: "出",
  onyomi: "シュツ",
  kunyomi: "で（る）・だ（す）",
  guratan: 5,
  akar: "凵（かんにょう）",
  kosakata:
    "輸出（ゆしゅつ）：Ekspor\n出口（でぐち）：Pintu keluar\n出発（しゅっぱつ）：Keberangkatan",
},
{
  no: 9,
  arti: "Masuk",
  kanji: "入",
  onyomi: "ニュウ",
  kunyomi: "い（る）・はい（る）・い（れる）",
  guratan: 2,
  akar: "入（いる）",
  kosakata:
    "輸入（ゆにゅう）：Impor\n入口（いりぐち）：Pintu masuk\n入国（にゅうこく）：Masuk negara",
},
{
  no: 10,
  arti: "Beristirahat, Libur",
  kanji: "休",
  onyomi: "キュウ",
  kunyomi: "やす（む）・やす（み）",
  guratan: 6,
  akar: "⺅（にんべん）",
  kosakata:
    "休日（きゅうじつ）：Hari libur\n夏休み（なつやすみ）：Libur musim panas\n昼休み（ひるやすみ）：Istirahat siang",
},
{
  no: 11,
  arti: "Makan, Makanan",
  kanji: "食",
  onyomi: "ショク",
  kunyomi: "た（べる）",
  guratan: 9,
  akar: "食（しょく）",
  kosakata:
    "食品（しょくひん）：Produk makanan\n食堂（しょくどう）：Kantin\n食事（しょくじ）：Makan",
},
{
  no: 12,
  arti: "Minum, Minuman",
  kanji: "飲",
  onyomi: "イン",
  kunyomi: "の（む）",
  guratan: 12,
  akar: "⻟（しょくへん）",
  kosakata:
    "飲み物（のみもの）：Minuman\n飲食（いんしょく）：Makan minum\n水を飲む（みずをのむ）：Minum air",
},
{
  no: 13,
  arti: "Bicara, Kata",
  kanji: "言",
  onyomi: "ゲン・ゴン",
  kunyomi: "い（う）",
  guratan: 7,
  akar: "言（げん）",
  kosakata:
    "言葉（ことば）：Kata\n言語（げんご）：Bahasa\n方言（ほうげん）：Dialek",
},
{
  no: 14,
  arti: "Berdiri",
  kanji: "立",
  onyomi: "リツ",
  kunyomi: "た（つ）",
  guratan: 5,
  akar: "立（たつ）",
  kosakata:
    "独立（どくりつ）：Merdeka\n国立（こくりつ）：Nasional\n立場（たちば）：Posisi",
},
{
  no: 15,
  arti: "Bertemu, Masyarakat",
  kanji: "会",
  onyomi: "カイ・エ",
  kunyomi: "あ（う）",
  guratan: 6,
  akar: "𠆢（ひとやね）",
  kosakata:
    "社会（しゃかい）：Masyarakat\n会社（かいしゃ）：Perusahaan\n大会（たいかい）：Turnamen",
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
      <Text style={styles.title}>Tabel Kanji Kata Kerja JLPT N5</Text>
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

