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

export default function KanjiKataSifatN5() {
  const data = [
  {
  no: 1,
  arti: "Banyak",
  kanji: "多",
  onyomi: "タ",
  kunyomi: "おお（い）",
  guratan: 6,
  akar: "夕（ゆうべ）",
  kosakata:
    "多分（たぶん）：Mungkin\n多数（たすう）：Banyak, jumlah yang banyak\n多い（おおい）：Banyak",
},
{
  no: 2,
  arti: "Sedikit",
  kanji: "少",
  onyomi: "ショウ",
  kunyomi: "すこ（し）・すく（ない）",
  guratan: 4,
  akar: "小（しょう）",
  kosakata:
    "少し（すこし）：Sedikit\n少数（しょうすう）：Jumlah sedikit\n少々（しょうしょう）：Sebentar",
},
{
  no: 3,
  arti: "Tua, Lama",
  kanji: "古",
  onyomi: "コ",
  kunyomi: "ふる（い）",
  guratan: 5,
  akar: "口（くち）",
  kosakata:
    "中古（ちゅうこ）：Barang bekas\n古本（ふるほん）：Buku tua\n古代（こだい）：Zaman dahulu",
},
{
  no: 4,
  arti: "Baru",
  kanji: "新",
  onyomi: "シン",
  kunyomi: "あたら（しい）",
  guratan: 13,
  akar: "斤（おのづくり）",
  kosakata:
    "新年（しんねん）：Tahun baru\n最新（さいしん）：Paling baru\n新鮮（しんせん）：Segar",
},
{
  no: 5,
  arti: "Besar, Banyak",
  kanji: "大",
  onyomi: "ダイ・タイ",
  kunyomi: "おお（きい）",
  guratan: 3,
  akar: "大（だい）",
  kosakata:
    "大学（だいがく）：Universitas\n大人（おとな）：Orang dewasa\n最大（さいだい）：Paling besar, maksimal",
},
{
  no: 6,
  arti: "Kecil",
  kanji: "小",
  onyomi: "ショウ",
  kunyomi: "ちい（さい）・こ",
  guratan: 3,
  akar: "小（しょう）",
  kosakata:
    "小説（しょうせつ）：Novel\n小学校（しょうがっこう）：Sekolah dasar\n小学生（しょうがくせい）：Murid SD",
},
{
  no: 7,
  arti: "Murah, Aman",
  kanji: "安",
  onyomi: "アン",
  kunyomi: "やす（い）",
  guratan: 6,
  akar: "宀（うかんむり）",
  kosakata:
    "安全（あんぜん）：Aman\n不安（ふあん）：Cemas\n安い（やすい）：Murah",
},
{
  no: 8,
  arti: "Mahal, Tinggi",
  kanji: "高",
  onyomi: "コウ",
  kunyomi: "たか（い）",
  guratan: 10,
  akar: "高（たかい）",
  kosakata:
    "高校（こうこう）：SMA\n高校生（こうこうせい）：Murid SMA\n高価（こうか）：Mahal, bernilai tinggi",
},
{
  no: 9,
  arti: "Panjang, Pemimpin",
  kanji: "長",
  onyomi: "チョウ",
  kunyomi: "なが（い）",
  guratan: 8,
  akar: "長（ながい）",
  kosakata:
    "成長（せいちょう）：Pertumbuhan\n長期（ちょうき）：Jangka panjang\n社長（しゃちょう）：Direktur perusahaan",
},
{
  no: 10,
  arti: "Putih",
  kanji: "白",
  onyomi: "ハク・ビャク",
  kunyomi: "しろ・しろ（い）",
  guratan: 5,
  akar: "白（しろ）",
  kosakata:
    "白人（はくじん）：Orang kulit putih\n白金（しろがね）：Perak\n白鳥（はくちょう）：Angsa",
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
      <Text style={styles.title}>Tabel Kanji Kata Sifat JLPT N5</Text>
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

