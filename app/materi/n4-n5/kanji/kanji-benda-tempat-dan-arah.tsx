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

export default function KanjiBendaN5() {
  const data = [
  {
  no: 1,
  arti: "Buku, Dasar, Sumber",
  kanji: "本",
  onyomi: "ホン",
  kunyomi: "もと",
  guratan: 5,
  akar: "木（き）",
  kosakata:
    "日本（にほん）：Jepang\n基本（きほん）：Dasar\n本当（ほんとう）：Kebenaran, fakta, jujur",
},
{
  no: 2,
  arti: "Mobil, Kendaraan",
  kanji: "車",
  onyomi: "シャ",
  kunyomi: "くるま",
  guratan: 7,
  akar: "車（くるま）",
  kosakata:
    "自動車（じどうしゃ）：Mobil\n自転車（じてんしゃ）：Sepeda\n電車（でんしゃ）：Kereta",
},
{
  no: 3,
  arti: "Bahasa, Kata",
  kanji: "語",
  onyomi: "ゴ",
  kunyomi: "かた（る）",
  guratan: 14,
  akar: "言（ごんへん）",
  kosakata:
    "日本語（にほんご）：Bahasa Jepang\n英語（えいご）：Bahasa Inggris\n物語（ものがたり）：Cerita, dongeng",
},
{
  no: 4,
  arti: "Toko",
  kanji: "店",
  onyomi: "テン",
  kunyomi: "みせ",
  guratan: 8,
  akar: "广（まだれ）",
  kosakata:
    "店員（てんいん）：Pegawai toko\n喫茶店（きっさてん）：Kafe\n店（みせ）：Toko",
},
{
  no: 5,
  arti: "Stasiun",
  kanji: "駅",
  onyomi: "エキ",
  kunyomi: "-",
  guratan: 14,
  akar: "馬（うまへん）",
  kosakata:
    "駅（えき）：Stasiun\n駅前（えきまえ）：Depan stasiun\n駅員（えきいん）：Petugas stasiun",
},
{
  no: 6,
  arti: "Jalan",
  kanji: "道",
  onyomi: "ドウ",
  kunyomi: "みち",
  guratan: 12,
  akar: "⻌（しんにょう）",
  kosakata:
    "道路（どうろ）：Jalan raya\n水道（すいどう）：Saluran air\n鉄道（てつどう）：Rel kereta",
},
{
  no: 7,
  arti: "Kuil, Masyarakat",
  kanji: "社",
  onyomi: "シャ",
  kunyomi: "やしろ",
  guratan: 7,
  akar: "礻（しめすへん）",
  kosakata:
    "神社（じんじゃ）：Kuil\n会社（かいしゃ）：Perusahaan\n社員（しゃいん）：Pegawai",
},
{
  no: 8,
  arti: "Negara",
  kanji: "国",
  onyomi: "コク",
  kunyomi: "くに",
  guratan: 8,
  akar: "囗（くにがまえ）",
  kosakata:
    "外国（がいこく）：Luar negeri\n国民（こくみん）：Penduduk\n中国（ちゅうごく）：China",
},
{
  no: 9,
  arti: "Luar",
  kanji: "外",
  onyomi: "ガイ・ゲ",
  kunyomi: "そと・ほか・はず（れる）",
  guratan: 5,
  akar: "夕（ゆうべ）",
  kosakata:
    "海外（かいがい）：Luar negeri\n外出（がいしゅつ）：Pergi keluar\n以外（いがい）：Kecuali",
},
{
  no: 10,
  arti: "Sekolah, Belajar",
  kanji: "学",
  onyomi: "ガク",
  kunyomi: "まな（ぶ）",
  guratan: 8,
  akar: "子（こ）",
  kosakata:
    "学生（がくせい）：Murid\n学ぶ（まなぶ）：Belajar\n大学（だいがく）：Universitas",
},
{
  no: 11,
  arti: "Sekolah",
  kanji: "校",
  onyomi: "コウ",
  kunyomi: "-",
  guratan: 10,
  akar: "木（きへん）",
  kosakata:
    "学校（がっこう）：Sekolah\n高校（こうこう）：SMA\n小学校（しょうがっこう）：SD",
},
{
  no: 12,
  arti: "Atas",
  kanji: "上",
  onyomi: "ショウ・ジョウ",
  kunyomi: "うえ・あ（げる）",
  guratan: 3,
  akar: "一（いち）",
  kosakata:
    "売り上げ（うりあげ）：Penjualan\n上手（じょうず）：Ahli\n以上（いじょう）：Lebih dari",
},
{
  no: 13,
  arti: "Bawah",
  kanji: "下",
  onyomi: "カ・ゲ",
  kunyomi: "した・さ（げる）",
  guratan: 3,
  akar: "一（いち）",
  kosakata:
    "下手（へた）：Tidak jago\n以下（いか）：Kurang dari\n天下（てんか）：Seluruh dunia",
},
{
  no: 14,
  arti: "Dalam, Tengah",
  kanji: "中",
  onyomi: "チュウ",
  kunyomi: "なか",
  guratan: 4,
  akar: "丨（たてぼう）",
  kosakata:
    "中心（ちゅうしん）：Pusat\n水中（すいちゅう）：Di dalam air\n中（なか）：Dalam",
},
{
  no: 15,
  arti: "Utara",
  kanji: "北",
  onyomi: "ホク",
  kunyomi: "きた",
  guratan: 5,
  akar: "匕（さじ）",
  kosakata:
    "北極（ほっきょく）：Kutub Utara\n東北（とうほく）：Timur laut\n北部（ほくぶ）：Bagian utara",
},
{
  no: 16,
  arti: "Barat",
  kanji: "西",
  onyomi: "サイ・セイ",
  kunyomi: "にし",
  guratan: 6,
  akar: "襾（にし）",
  kosakata:
    "関西（かんさい）：Kansai\n西部（せいぶ）：Bagian barat\n大西洋（たいせいよう）：Samudra Atlantik",
},
{
  no: 17,
  arti: "Timur",
  kanji: "東",
  onyomi: "トウ",
  kunyomi: "ひがし",
  guratan: 8,
  akar: "木（き）",
  kosakata:
    "東京（とうきょう）：Tokyo\n中東（ちゅうとう）：Timur Tengah\n東部（とうぶ）：Bagian timur",
},
{
  no: 18,
  arti: "Selatan",
  kanji: "南",
  onyomi: "ナン",
  kunyomi: "みなみ",
  guratan: 9,
  akar: "十（じゅう）",
  kosakata:
    "南西（なんせい）：Barat daya\n南極（なんきょく）：Kutub Selatan\n南米（なんべい）：Amerika Selatan",
},
{
  no: 19,
  arti: "Kanan",
  kanji: "右",
  onyomi: "ユウ",
  kunyomi: "みぎ",
  guratan: 5,
  akar: "口（くち）",
  kosakata:
    "右手（みぎて）：Tangan kanan\n右側（みぎがわ）：Sebelah kanan\n右方（うほう）：Sisi kanan",
},
{
  no: 20,
  arti: "Kiri",
  kanji: "左",
  onyomi: "サ",
  kunyomi: "ひだり",
  guratan: 5,
  akar: "工（たくみ）",
  kosakata:
    "左手（ひだりて）：Tangan kiri\n左側（ひだりがわ）：Sebelah kiri\n左折（させつ）：Belok kiri",
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
      <Text style={styles.title}>Tabel Kanji Benda, Tempat dan Arah JLPT N5</Text>
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

