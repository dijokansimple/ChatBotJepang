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

export default function KanjiKeluargadanOrangN5() {
  const data = [
  {
  no: 1,
  arti: "Orang",
  kanji: "人",
  onyomi: "ニン・ジン",
  kunyomi: "ひと・―り・―と",
  guratan: 2,
  akar: "人（ひと）",
  kosakata:
    "人口（じんこう）：Populasi\n人間（にんげん）：Manusia\n大人（おとな）：Orang dewasa",
},
{
  no: 2,
  arti: "Laki-laki",
  kanji: "男",
  onyomi: "ダン・ナン",
  kunyomi: "おとこ",
  guratan: 7,
  akar: "田（た）",
  kosakata:
    "男性（だんせい）：Laki-laki\n男の子（おとこのこ）：Anak laki-laki\n男（おとこ）：Laki-laki",
},
{
  no: 3,
  arti: "Perempuan",
  kanji: "女",
  onyomi: "ジョ・ニョ",
  kunyomi: "おんな・め",
  guratan: 3,
  akar: "女（おんな）",
  kosakata:
    "女性（じょせい）：Perempuan\n女の子（おんなのこ）：Anak perempuan\n女（おんな）：Perempuan",
},
{
  no: 4,
  arti: "Anak",
  kanji: "子",
  onyomi: "シ・ス",
  kunyomi: "こ",
  guratan: 3,
  akar: "子（こ）",
  kosakata:
    "子供（こども）：Anak\n帽子（ぼうし）：Topi\n親子（おやこ）：Orang tua dan anak",
},
{
  no: 5,
  arti: "Teman",
  kanji: "友",
  onyomi: "ユウ",
  kunyomi: "とも",
  guratan: 4,
  akar: "又（また）",
  kosakata:
    "友達（ともだち）：Teman\n友人（ゆうじん）：Teman\n学友（がくゆう）：Teman sekolah",
},
{
  no: 6,
  arti: "Nama",
  kanji: "名",
  onyomi: "メイ・ミョウ",
  kunyomi: "な",
  guratan: 6,
  akar: "口（くち）",
  kosakata:
    "名前（なまえ）：Nama\n有名（ゆうめい）：Terkenal\n名所（めいしょ）：Tempat terkenal",
},
{
  no: 7,
  arti: "Telinga",
  kanji: "耳",
  onyomi: "ジ",
  kunyomi: "みみ",
  guratan: 6,
  akar: "耳（みみ）",
  kosakata:
    "耳（みみ）：Telinga\n耳打ち（みみうち）：Berbisik\n耳目（じもく）：Mata dan telinga",
},
{
  no: 8,
  arti: "Tangan",
  kanji: "手",
  onyomi: "シュ・ズ",
  kunyomi: "て",
  guratan: 4,
  akar: "手（て）",
  kosakata:
    "下手（へた）：Tidak pandai\n上手（じょうず）：Pandai\n切手（きって）：Perangko",
},
{
  no: 9,
  arti: "Kaki",
  kanji: "足",
  onyomi: "ソク",
  kunyomi: "あし・た（りる）",
  guratan: 7,
  akar: "口（くち）",
  kosakata:
    "不足（ふそく）：Kekurangan\n足跡（あしあと）：Jejak kaki\n足りる（たりる）：Cukup",
},
{
  no: 10,
  arti: "Mata",
  kanji: "目",
  onyomi: "モク",
  kunyomi: "め",
  guratan: 5,
  akar: "目（め）",
  kosakata:
    "目的（もくてき）：Tujuan\n注目（ちゅうもく）：Perhatian\n目標（もくひょう）：Target",
},
{
  no: 11,
  arti: "Mulut",
  kanji: "口",
  onyomi: "コウ・ク",
  kunyomi: "くち",
  guratan: 3,
  akar: "口（くち）",
  kosakata:
    "悪口（わるぐち）：Ejekan\n入り口（いりぐち）：Pintu masuk\n出口（でぐち）：Pintu keluar",
},
{
  no: 12,
  arti: "Ayah",
  kanji: "父",
  onyomi: "フ",
  kunyomi: "ちち",
  guratan: 4,
  akar: "父（ちち）",
  kosakata:
    "お父さん（おとうさん）：Ayah\n祖父（そふ）：Kakek\n叔父（おじ）：Paman",
},
{
  no: 13,
  arti: "Ibu",
  kanji: "母",
  onyomi: "ボ",
  kunyomi: "はは",
  guratan: 5,
  akar: "毋（なかれ）",
  kosakata:
    "お母さん（おかあさん）：Ibu\n祖母（そぼ）：Nenek\n叔母（おば）：Bibi",
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
      <Text style={styles.title}>Tabel Kanji Keluarga dan Orang JLPT N5</Text>
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

