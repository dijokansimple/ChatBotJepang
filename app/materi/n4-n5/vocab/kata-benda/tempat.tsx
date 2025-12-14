import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type TempatWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function KeteranganWaktu() {

  const TempatUmum = [
    { jp: "gakkou", id: "sekolah", hira: "がっこう・ガッコウ", kanji: "学校 *N5" },
  { jp: "ginkou", id: "bank", hira: "ぎんこう・ギンコウ", kanji: "銀行 *N4" },
  { jp: "kaisha", id: "perusahaan", hira: "かいしゃ・カイシャ", kanji: "会社 *N5" },
  { jp: "eki", id: "stasiun", hira: "えき・エキ", kanji: "駅 *N4" },
  { jp: "eki mae", id: "depan stasiun", hira: "えきまえ・エキマエ", kanji: "駅前 *N4" },
  { jp: "chika", id: "bawah tanah", hira: "ちか・チカ", kanji: "地下 *N4" },
  { jp: "okujou", id: "atap / rooftop", hira: "おくじょう・オクジョウ", kanji: "屋上 *N4" },
  { jp: "kouban", id: "pos polisi", hira: "こうばん・コウバン", kanji: "交番 *N3" },
  { jp: "basu tei", id: "halte bus", hira: "バスてい・バステイ", kanji: "バス停 *N2" },
  { jp: "kuukou", id: "bandara", hira: "くうこう・クウコウ", kanji: "空港 *N4" },
  { jp: "minato", id: "pelabuhan", hira: "みなと・ミナト", kanji: "港 *N3" },
  { jp: "chuushajou", id: "tempat parkir", hira: "ちゅうしゃじょう・チュウシャジョウ", kanji: "駐車場 *N2" },
  { jp: "yuubinkyoku", id: "kantor pos", hira: "ゆうびんきょく・ユウビンキョク", kanji: "郵便局 *N2" },
  { jp: "byouin", id: "rumah sakit", hira: "びょういん・ビョウイン", kanji: "病院 *N4" },
  { jp: "michi", id: "jalan", hira: "みち・ミチ", kanji: "道 *N4" },
  { jp: "hashi", id: "jembatan", hira: "はし・ハシ", kanji: "橋 *N2" },
  { jp: "machi", id: "kota / kota kecil", hira: "まち・マチ", kanji: "町 *N4" },
  { jp: "ken", id: "prefektur", hira: "けん・ケン", kanji: "県 *N2" },
  { jp: "shiyakusho", id: "balai kota", hira: "しやくしょ・シヤクショ", kanji: "市役所 *N3" },
  { jp: "taishikan", id: "kedutaan besar", hira: "たいしかん・タイシカン", kanji: "大使館 *N4" },
  { jp: "biru", id: "gedung / bangunan", hira: "ビル" },
  { jp: "jinja", id: "kuil Shinto", hira: "じんじゃ・ジンジャ", kanji: "神社 *N3" },
  { jp: "(o)tera", id: "kuil Buddha", hira: "おてら・オテラ", kanji: "お寺 *N2" },
  { jp: "kyoukai", id: "gereja", hira: "きょうかい・キョウカイ", kanji: "教会 *N4" },
  { jp: "mosuku / masujido", id: "masjid", hira: "モスク・マスジド" },
  { jp: "tokai", id: "perkotaan", hira: "とかい・トカイ", kanji: "都会 *N3" },
  { jp: "inaka", id: "pedesaan", hira: "いなか・イナカ", kanji: "田舎 *N1" },
  { jp: "toshi", id: "kota (urban)", hira: "とし・トシ", kanji: "都市 *N3" },
  { jp: "kougai", id: "pinggir kota", hira: "こうがい・コウガイ", kanji: "郊外 *N2" },
  ];

  const TempatBelanja = [
    { jp: "mise", id: "toko", hira: "みせ・ミセ", kanji: "店 *N5" },
  { jp: "uriba", id: "tempat penjualan", hira: "うりば・ウリバ", kanji: "売り場 *N4" },
  { jp: "ichiba", id: "pasar", hira: "いちば・イチバ", kanji: "市場 *N3" },
  { jp: "yaoya", id: "toko sayur", hira: "やおや・ヤオヤ", kanji: "八百屋 *N4" },
  { jp: "niku-ya", id: "toko daging", hira: "にくや・ニクヤ", kanji: "肉屋 *N4" },
  { jp: "depaato", id: "pasar swalayan / department store", hira: "デパート", kanji: "-" },
  { jp: "konbini", id: "toserba / convenience store", hira: "コンビニ", kanji: "-" },
  { jp: "suupaa (maaketto)", id: "supermarket", hira: "スーパー（マーケット）", kanji: "-" },
  { jp: "mooru", id: "mall", hira: "モール", kanji: "-" },
  { jp: "koonaa", id: "corner", hira: "コーナー", kanji: "-" },
  { jp: "esukareetaa", id: "eskalator", hira: "エスカレーター", kanji: "-" },
  { jp: "erebeetaa", id: "elevator", hira: "エレベーター", kanji: "-" },
  { jp: "hana-ya", id: "toko bunga", hira: "はなや・ハナヤ", kanji: "花屋 *N4" },
  { jp: "kusuri-ya / yakkyoku", id: "toko obat / apotek", hira: "くすりや・やっきょく・クスリヤ・ヤッキョク", kanji: "薬屋・薬局 *N3",},
  { jp: "tana", id: "rak", hira: "たな・タナ", kanji: "棚 *N1" },
  { jp: "kaidan", id: "tangga", hira: "かいだん・カイダン", kanji: "階段 *N2" },
  { jp: "~kai", id: "lantai (tingkat)", hira: "かい・カイ", kanji: "～階 *N2" },
  ];

  // 4. Durasi Jam
  const TempatRekreasi = [
    { jp: "eigakan", id: "bioskop", hira: "えいがかん・エイガカン", kanji: "映画館 *N4" },
  { jp: "doubutsuen", id: "kebun binatang", hira: "どうぶつえん・ドウブツエン", kanji: "動物園 *N3" },
  { jp: "kouen", id: "taman", hira: "こうえん・コウエン", kanji: "公園 *N3" },
  { jp: "yuuenchi", id: "taman bermain", hira: "ゆうえんち・ユウエンチ", kanji: "遊園地 *N3" },
  { jp: "hakubutsukan", id: "museum (purbakala)", hira: "はくぶつかん・ハクブツカン", kanji: "博物館 *N1" },
  { jp: "bijutsukan", id: "museum seni", hira: "びじゅつかん・ビジュツカン", kanji: "美術館 *N3" },
  { jp: "shiro", id: "kastil", hira: "しろ・シロ", kanji: "城 *N2" },
  { jp: "hiroba", id: "lapangan", hira: "ひろば・ヒロバ", kanji: "広場 *N4" },
  { jp: "onsen", id: "pemandian air panas", hira: "おんせん・オンセン", kanji: "温泉 *N2" },
  { jp: "sukiijou", id: "tempat bermain ski", hira: "スキーじょう・スキージョウ", kanji: "スキー場 *N4" },
  { jp: "puuru", id: "kolam renang", hira: "プール", kanji: "-" },
  { jp: "hoteru", id: "hotel", hira: "ホテル", kanji: "-" },
  { jp: "robii", id: "lobi", hira: "ロビー", kanji: "-" },
  { jp: "geemu sentaa", id: "pusat bermain / game center", hira: "ゲームセンター", kanji: "-" },
  ];

  // Fungsi render tabel
  const renderTable = (data: TempatWord[]) => (
    <View style={styles.table}>
      {/* Header */}
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
        <Text style={[styles.cell, styles.headerCell]}>Hiragana / Katakana</Text>
        <Text style={[styles.cell, styles.headerCell]}>Kanji *JLPT</Text>
      </View>

      {/* Rows */}
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata nama-nama tempat</Text>

      {/* Gambar */}
      <Image
        source={require("./tempat.png")} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata knama-nama tempat dan beberapa kosakata lainnya dalam bahasa Jepang.
      </Text>

      <Text style={styles.subTitle}>Tempat Umum</Text>
      {renderTable(TempatUmum)}

      <Text style={styles.subTitle}>Tempat Belanja</Text>
      {renderTable(TempatBelanja)}

      <Text style={styles.subTitle}>Tempat Rekreasi</Text>
      {renderTable(TempatRekreasi)}


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
  image: {
    width: "100%",
    maxWidth: 450,
    height: 350,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
});
