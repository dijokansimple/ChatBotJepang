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

export default function KanjiAngkaN5() {
  const data = [
  {
    no: 1,
    arti: "Satu",
    kanji: "一",
    onyomi: "イチ・イツ",
    kunyomi: "ひと（つ）・ひと",
    guratan: 1,
    akar: "一（いち）",
    kosakata:
      "一人（ひとり）：Satu orang\n一つ（ひとつ）：Satu buah\n一時（いちじ）：Pukul satu",
  },
  {
    no: 2,
    arti: "Dua",
    kanji: "二",
    onyomi: "ニ",
    kunyomi: "ふた（つ）・ふた",
    guratan: 2,
    akar: "二（に）",
    kosakata:
      "二人（ふたり）：Dua orang\n二月（にがつ）：Bulan dua/Februari\n二階（にかい）：Lantai dua",
  },
  {
    no: 3,
    arti: "Tiga",
    kanji: "三",
    onyomi: "サン",
    kunyomi: "みっ（つ）・み",
    guratan: 3,
    akar: "一（いち）",
    kosakata:
      "三度（さんど）：Tiga kali\n三月（さんがつ）：Bulan tiga\n三人（さんにん）：Tiga orang",
  },
  {
    no: 4,
    arti: "Empat",
    kanji: "四",
    onyomi: "シ",
    kunyomi: "よ（つ）・よん・よ",
    guratan: 5,
    akar: "口（くにがまえ）",
    kosakata:
      "四季（しき）：Empat musim\n四つ（よっつ）：Empat buah\n四日（よっか）：Tanggal empat",
  },
  {
    no: 5,
    arti: "Lima",
    kanji: "五",
    onyomi: "ゴ",
    kunyomi: "いつ（つ）・いつ",
    guratan: 4,
    akar: "二（に）",
    kosakata:
      "五日（いつか）：Tanggal lima\n五月（ごがつ）：Bulan Mei\n五つ（いつつ）：Lima buah",
  },
  {
    no: 6,
    arti: "Enam",
    kanji: "六",
    onyomi: "ロク",
    kunyomi: "む（つ）・む",
    guratan: 4,
    akar: "八（はちがしら）",
    kosakata:
      "六月（ろくがつ）：Bulan Juni\n六日（むいか）：Tanggal enam\n六分（ろっぷん）：Enam menit",
  },
  {
    no: 7,
    arti: "Tujuh",
    kanji: "七",
    onyomi: "シチ",
    kunyomi: "なな（つ）・なな",
    guratan: 2,
    akar: "一（いち）",
    kosakata:
      "七夕（たなばた）：Festival bintang\n七日（なのか）：Tanggal tujuh\n七月（しちがつ）：Bulan Juli",
  },
  {
    no: 8,
    arti: "Delapan",
    kanji: "八",
    onyomi: "ハチ",
    kunyomi: "や（つ）・や",
    guratan: 2,
    akar: "八（はち）",
    kosakata:
      "八月（はちがつ）：Bulan Agustus\n八百屋（やおや）：Toko sayur\n八日（ようか）：Tanggal delapan",
  },
  {
    no: 9,
    arti: "Sembilan",
    kanji: "九",
    onyomi: "キュウ・ク",
    kunyomi: "ここの（つ）・ここの",
    guratan: 2,
    akar: "乙（おつ）",
    kosakata:
      "九月（くがつ）：Bulan September\n九日（ここのか）：Tanggal sembilan\n九人（きゅうにん）：Sembilan orang",
  },
  {
    no: 10,
    arti: "Sepuluh",
    kanji: "十",
    onyomi: "ジュウ・ジッ",
    kunyomi: "とう・と",
    guratan: 2,
    akar: "十（じゅう）",
    kosakata:
      "十分（じゅっぷん）：Sepuluh menit\n十月（じゅうがつ）：Bulan Oktober\n十日（とおか）：Tanggal sepuluh",
  },
  {
    no: 11,
    arti: "Seratus",
    kanji: "百",
    onyomi: "ヒャク",
    kunyomi: "—",
    guratan: 6,
    akar: "白（しろ）",
    kosakata:
      "百万（ひゃくまん）：Satu juta\n三百（さんびゃく）：Tiga ratus\n百円（ひゃくえん）：Seratus Yen",
  },
  {
    no: 12,
    arti: "Seribu",
    kanji: "千",
    onyomi: "セン",
    kunyomi: "ち",
    guratan: 3,
    akar: "十（じゅう）",
    kosakata:
      "三千（さんぜん）：Tiga ribu\n千円（せんえん）：Seribu Yen\n千人（せんにん）：Seribu orang",
  },
  {
    no: 13,
    arti: "Sepuluh Ribu",
    kanji: "万",
    onyomi: "マン・バン",
    kunyomi: "—",
    guratan: 3,
    akar: "一（いち）",
    kosakata:
      "百万円（ひゃくまんえん）：Satu juta yen\n万年筆（まんねんひつ）：Pena\n万（まん）：Sepuluh ribu",
  },
  {
    no: 14,
    arti: "Yen, Bulat",
    kanji: "円",
    onyomi: "エン",
    kunyomi: "まる（い）",
    guratan: 4,
    akar: "冂（けいがまえ）",
    kosakata:
      "円い（まるい）：Bulat\n百円（ひゃくえん）：Seratus Yen\n円（えん）：Mata uang Yen",
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
      <Text style={styles.title}>Tabel Kanji Angka JLPT N5</Text>
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

