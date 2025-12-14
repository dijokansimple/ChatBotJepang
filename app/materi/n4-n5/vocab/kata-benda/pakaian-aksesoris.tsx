import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type AnggotaKeluarga = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function AnggotaKeluarga() {
 
  const pakaian = [
    { jp: "fuku", id: "pakaian / baju", hira: "ふく・フク", kanji: "服 *N4" },
    { jp: "kimono", id: "kimono (salah satu baju tradisional Jepang)", hira: "きもの・キモノ", kanji: "着物 *N4" },
    { jp: "youfuku", id: "pakaian gaya barat", hira: "ようふく・ヨウフク", kanji: "洋服 *N4" },
    { jp: "wafuku", id: "pakaian gaya Jepang", hira: "わふく・ワフク", kanji: "和服 *N3" },
    { jp: "uwagi", id: "atasan", hira: "うわぎ・ウワギ", kanji: "上着 *N4" },
    { jp: "shitagi", id: "dalaman", hira: "したぎ・シタギ", kanji: "下着 *N4" },
    { jp: "suutsu", id: "jas", hira: "スーツ", kanji: "–" },
    { jp: "jakketto", id: "jaket", hira: "ジャケット", kanji: "–" },
    { jp: "seetaa", id: "sweter", hira: "セーター", kanji: "–" },
    { jp: "kooto", id: "coat", hira: "コート", kanji: "–" },
    { jp: "shatsu", id: "kemeja", hira: "シャツ", kanji: "–" },
    { jp: "T-shatsu", id: "baju kaos", hira: "ティーシャツ", kanji: "–" },
    { jp: "doresu", id: "dress", hira: "ドレス", kanji: "–" },
    { jp: "zubon", id: "celana panjang", hira: "ズボン", kanji: "–" },
    { jp: "pantsu", id: "celana pendek", hira: "パンツ", kanji: "–" },
    { jp: "sukaato", id: "rok", hira: "スカート", kanji: "–" },
    { jp: "jiinzu", id: "jeans", hira: "ジーンズ", kanji: "–" },

  ];

  const aksesoris = [
    { jp: "akusesarii", id: "aksesoris", hira: "アクセサリー", kanji: "–" },
    { jp: "boushi", id: "topi", hira: "ぼうし・ボウシ", kanji: "帽子 *N2" },
    { jp: "hijabu / jirubabu", id: "hijab / jilbab", hira: "ヒジャブ・ジルバブ", kanji: "–" },
    { jp: "megane", id: "kacamata", hira: "めがね・メガネ", kanji: "眼鏡 *N1" },
    { jp: "sangurasu", id: "sunglass / kacamata hitam", hira: "サングラス", kanji: "–" },
    { jp: "iyaringu", id: "anting-anting", hira: "イヤリング", kanji: "–" },
    { jp: "nekkuresu", id: "kalung", hira: "ネックレス", kanji: "–" },
    { jp: "nekutai", id: "dasi", hira: "ネクタイ", kanji: "–" },
    { jp: "mafuraa", id: "scarf", hira: "マフラー", kanji: "–" },
    { jp: "beruto", id: "sabuk", hira: "ベルト", kanji: "–" },
    { jp: "tebukuro", id: "sarung tangan", hira: "てぶくろ・テブクロ", kanji: "手袋 *N2" },
    { jp: "udedokei", id: "jam tangan", hira: "うでどけい・ウデドケイ", kanji: "腕時計 *N2" },
    { jp: "yubiwa", id: "cincin", hira: "ゆびわ・ユビワ", kanji: "指輪 *N2" },
    { jp: "kutsushita", id: "kaos kaki", hira: "くつした・クツシタ", kanji: "靴下 *N3" },
    { jp: "kutsu", id: "sepatu", hira: "くつ・クツ", kanji: "靴 *N3" },
    { jp: "sandaru", id: "sandal", hira: "サンダル", kanji: "–" },
    { jp: "buutsu", id: "sepatu boots", hira: "ブーツ", kanji: "–" },
    { jp: "suniikaa", id: "sneaker", hira: "スニーカー", kanji: "–" },
    { jp: "haihiiru", id: "high heels", hira: "ハイヒール", kanji: "–" },
  ];

  const barangBawaan =[
    { jp: "kaban", id: "tas", hira: "かばん・カバン", kanji: "鞄 *N1" },
    { jp: "saifu", id: "dompet", hira: "さいふ・サイフ", kanji: "財布 *N2" },
    { jp: "kasa", id: "payung", hira: "かさ・カサ", kanji: "傘 *N1" },
    { jp: "meishi", id: "kartu nama", hira: "めいし・メイシ", kanji: "名刺 *N2" },
    { jp: "hankachi", id: "sapu tangan", hira: "ハンカチ", kanji: "–" },
    { jp: "keitai denwa", id: "telepon genggam", hira: "けいたいでんわ・ケイタイデンワ", kanji: "携帯電話 *N1" },
    { jp: "sumaho", id: "smartphone", hira: "スマホ", kanji: "–" },
    { jp: "denchi", id: "baterai HP", hira: "でんち・デンチ", kanji: "電池 *N2" },
    { jp: "pasupooto", id: "paspor", hira: "パスポート", kanji: "–" },
    { jp: "biza", id: "visa", hira: "ビザ", kanji: "–" },
    { jp: "poketto", id: "kantong", hira: "ポケット", kanji: "–" },
    { jp: "saizu", id: "ukuran", hira: "サイズ", kanji: "–" },
    { jp: "dezain", id: "desain", hira: "デザイン", kanji: "–" },
    { jp: "kamigata", id: "model rambut", hira: "かみがた・カミガタ", kanji: "髪型 *N3" },
    { jp: "biyouin", id: "salon", hira: "びよういん・ビヨウイン", kanji: "美容院 *N3" },
    { jp: "kagami", id: "cermin", hira: "かがみ・カガミ", kanji: "鏡 *N1" },
  ];

  // Fungsi render tabel
  const renderTable = (data: AnggotaKeluarga[]) => (
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
      <Text style={styles.title}>Kosakata Pakaian dan Aksesoris</Text>

      {/* Gambar */}
      <Image
        source={require("./pakaian-dan-aksesoris.png")} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata pakaian dan aksesoris dalam bahasa Jepang.
      </Text>

      <Text style={styles.subTitle}>Kosakata Pakaian</Text>
      {renderTable(pakaian)}

      <Text style={styles.subTitle}>Kosakata Aksesoris</Text>
      {renderTable(aksesoris)}

      <Text style={styles.subTitle}>Kosakata Barang Bawaan</Text>
      {renderTable(barangBawaan)}

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
    maxWidth: 300,
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
