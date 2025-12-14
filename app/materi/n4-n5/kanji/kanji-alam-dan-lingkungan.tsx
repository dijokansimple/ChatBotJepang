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

export default function KanjiAlamN5() {
  const data = [
  {
  no: 1,
  arti: "Api",
  kanji: "火",
  onyomi: "カ",
  kunyomi: "ひ・び",
  guratan: 4,
  akar: "火（ひ）",
  kosakata:
    "火山（かざん）：Gunung berapi\n火曜日（かようび）：Selasa\n花火（はなび）：Kembang api",
},
{
  no: 2,
  arti: "Air",
  kanji: "水",
  onyomi: "スイ",
  kunyomi: "みず",
  guratan: 4,
  akar: "水（みず）",
  kosakata:
    "水道（すいどう）：Saluran air\n水曜日（すいようび）：Rabu\n水泳（すいえい）：Berenang",
},
{
  no: 3,
  arti: "Pohon, Kayu",
  kanji: "木",
  onyomi: "ボク・モク",
  kunyomi: "き・こ",
  guratan: 4,
  akar: "木（き）",
  kosakata:
    "木材（もくざい）：Kayu\n木曜日（もくようび）：Kamis\n植木（うえき）：Tanaman",
},
{
  no: 4,
  arti: "Bumi, Tanah",
  kanji: "土",
  onyomi: "ド・ト",
  kunyomi: "つち",
  guratan: 3,
  akar: "土（つち）",
  kosakata:
    "お土産（おみやげ）：Oleh-oleh\n土曜日（どようび）：Sabtu\n粘土（ねんど）：Tanah liat",
},
{
  no: 5,
  arti: "Uang, Emas",
  kanji: "金",
  onyomi: "キン・コン",
  kunyomi: "かね",
  guratan: 8,
  akar: "金（かね）",
  kosakata:
    "お金（おかね）：Uang\n金曜日（きんようび）：Jumat\n現金（げんきん）：Uang tunai",
},
{
  no: 6,
  arti: "Sungai",
  kanji: "川",
  onyomi: "セン",
  kunyomi: "かわ",
  guratan: 3,
  akar: "川（かわ）",
  kosakata:
    "川口（かわぐち）：Muara sungai\n川端（かわばた）：Tepi sungai\n谷川（たにがわ）：Arus sungai",
},
{
  no: 7,
  arti: "Bunga",
  kanji: "花",
  onyomi: "カ",
  kunyomi: "はな",
  guratan: 7,
  akar: "⺾（くさかんむり）",
  kosakata:
    "花見（はなみ）：Melihat bunga\n花びら（はなびら）：Kelopak bunga\n花粉（かふん）：Serbuk sari",
},
{
  no: 8,
  arti: "Pikiran, Semangat",
  kanji: "気",
  onyomi: "キ・ケ",
  kunyomi: "-",
  guratan: 6,
  akar: "气（きがまえ）",
  kosakata:
    "空気（くうき）：Udara\n人気（にんき）：Populer\n気分（きぶん）：Perasaan",
},
{
  no: 9,
  arti: "Kehidupan",
  kanji: "生",
  onyomi: "セイ・ショウ",
  kunyomi: "い（きる）・う（まれる）・は（える）",
  guratan: 5,
  akar: "生（うまれる）",
  kosakata:
    "生活（せいかつ）：Kehidupan\n生物（せいぶつ）：Makhluk hidup\n学生（がくせい）：Pelajar",
},
{
  no: 10,
  arti: "Ikan",
  kanji: "魚",
  onyomi: "ギョ",
  kunyomi: "さかな・うお",
  guratan: 11,
  akar: "魚（うお）",
  kosakata:
    "金魚（きんぎょ）：Ikan mas\n魚屋（さかなや）：Toko ikan\n魚釣り（さかなつり）：Memancing",
},
{
  no: 11,
  arti: "Langit, Surga",
  kanji: "天",
  onyomi: "テン",
  kunyomi: "あめ・あま",
  guratan: 4,
  akar: "大（だい）",
  kosakata:
    "天気（てんき）：Cuaca\n天災（てんさい）：Bencana alam\n天国（てんごく）：Surga",
},
{
  no: 12,
  arti: "Langit, Kosong",
  kanji: "空",
  onyomi: "クウ",
  kunyomi: "そら・あ（ける）",
  guratan: 8,
  akar: "穴（あな）",
  kosakata:
    "空（そら）：Langit\n空港（くうこう）：Bandara\n空手（からて）：Karate",
},
{
  no: 13,
  arti: "Gunung",
  kanji: "山",
  onyomi: "サン",
  kunyomi: "やま",
  guratan: 3,
  akar: "山（やま）",
  kosakata:
    "登山（とざん）：Mendaki gunung\n山林（さんりん）：Hutan\n富士山（ふじさん）：Gunung Fuji",
},
{
  no: 14,
  arti: "Hujan",
  kanji: "雨",
  onyomi: "ウ",
  kunyomi: "あめ",
  guratan: 8,
  akar: "雨（あめ）",
  kosakata:
    "大雨（おおあめ）：Hujan lebat\n雨天（うてん）：Cuaca hujan\n雨季（うき）：Musim hujan",
},
{
  no: 15,
  arti: "Listrik",
  kanji: "電",
  onyomi: "デン",
  kunyomi: "-",
  guratan: 13,
  akar: "⻗（あめかんむり）",
  kosakata:
    "電車（でんしゃ）：Kereta\n電気（でんき）：Listrik\n電話（でんわ）：Telepon",
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
      <Text style={styles.title}>Tabel Kanji Alam dan Lingkungan JLPT N5</Text>
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

