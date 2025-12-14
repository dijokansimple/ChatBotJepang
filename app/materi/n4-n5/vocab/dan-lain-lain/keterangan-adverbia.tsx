import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

// Definisikan tipe data untuk adverbia
type Adverb = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function Adverbia() {
  const adverbia: Adverb[] = [
    { jp: "itsumo", id: "selalu", hira: "いつも", kanji: "-" },
    { jp: "taitei", id: "sering", hira: "たいてい", kanji: "-" },
    { jp: "yoku", id: "cukup sering", hira: "よく", kanji: "-" },
    { jp: "toki doki", id: "kadang-kadang", hira: "ときどき", kanji: "-" },
    { jp: "tama ni", id: "jarang / sesekali", hira: "たまに", kanji: "-" },
    { jp: "amari", id: "tidak terlalu", hira: "あまり", kanji: "-" },
    { jp: "totemo", id: "sangat", hira: "とても", kanji: "-" },
    { jp: "zenzen", id: "sama sekali tidak", hira: "ぜんぜん", kanji: "全然 *N3" },
    { jp: "motto", id: "lebih", hira: "もっと", kanji: "-" },
    { jp: "takusan", id: "banyak", hira: "たくさん", kanji: "-" },
    { jp: "oozei", id: "banyak (untuk orang)", hira: "おおぜい", kanji: "大勢 *N2" },
    { jp: "sukoshi", id: "sedikit", hira: "すこし", kanji: "少し *N4" },
    { jp: "chotto", id: "agak / sedikit", hira: "ちょっと", kanji: "-" },
    { jp: "yukkuri", id: "pelan-pelan", hira: "ゆっくり", kanji: "-" },
    { jp: "mousugu", id: "sebentar lagi / segera", hira: "もうすぐ", kanji: "-" },
    { jp: "mou ichido", id: "satu kali lagi", hira: "もういちど", kanji: "-" },
    { jp: "mou sukoshi", id: "sedikit lagi", hira: "もうすこし", kanji: "-" },
    { jp: "daitai", id: "hampir semua / kebanyakannya", hira: "だいたい", kanji: "大体 *N4" },
    { jp: "hotondo", id: "hampir semua / kebanyakannya", hira: "ほとんど", kanji: "-" },
    { jp: "ichido mo", id: "satu kali pun", hira: "いちども", kanji: "一度も *N4" },
    { jp: "hontou ni", id: "sungguh-sungguh", hira: "ほんとうに", kanji: "本当に *N3" },
    { jp: "mochiron", id: "tentu saja", hira: "もちろん", kanji: "-" },
    { jp: "zutto", id: "terus menerus", hira: "ずっと", kanji: "-" },
    { jp: "saikin", id: "akhir-akhir ini", hira: "さいきん", kanji: "最近 *N3" },
    { jp: "mou", id: "sudah", hira: "もう", kanji: "-" },
    { jp: "mada", id: "masih / masih belum", hira: "まだ", kanji: "-" },
    { jp: "mata", id: "lagi", hira: "また", kanji: "-" },
    { jp: "dan dan", id: "perlahan-lahan", hira: "だんだん", kanji: "-" },
    { jp: "tatta ima", id: "baru sekarang", hira: "たったいま", kanji: "たった今 *N5" },
    { jp: "ima ni mo", id: "sekarang pun", hira: "いまにも", kanji: "今にも *N5" },
    { jp: "itsudemo", id: "kapan saja", hira: "いつでも", kanji: "-" },
    { jp: "itsuka", id: "suatu saat nanti", hira: "いつか", kanji: "-" },
    { jp: "saki ni", id: "lebih dulu / duluan", hira: "さきに", kanji: "先に *N5" },
    { jp: "shikkari (to)", id: "dengan baik / dengan kuat", hira: "しっかり（と）", kanji: "-" },
    { jp: "kichinto", id: "dengan tepat / sesuai", hira: "きちんと", kanji: "-" },
    { jp: "tabun", id: "mungkin (dugaan)", hira: "たぶん", kanji: "多分 *N4" },
    { jp: "kitto", id: "pasti (dugaan)", hira: "きっと", kanji: "-" },
    { jp: "zettai (ni)", id: "pasti (keinginan kuat)", hira: "ぜったい（に）", kanji: "絶対（に） *N3" },
    { jp: "kanarazu", id: "pasti (keyakinan)", hira: "かならず", kanji: "必ず *N3" },
    { jp: "zehi", id: "pasti (keinginan)", hira: "ぜひ", kanji: "-" },
    { jp: "dekiru dake", id: "sebisa mungkin", hira: "できるだけ", kanji: "-" },
    { jp: "hakkiri (to)", id: "dengan jelas", hira: "はっきり（と）", kanji: "-" },
    { jp: "zuibun (to)", id: "lumayan", hira: "ずいぶん（と）", kanji: "-" },
    { jp: "kanari", id: "lumayan", hira: "かなり", kanji: "-" },
    { jp: "daibu", id: "lumayan", hira: "だいぶ", kanji: "-" },
    { jp: "kesshite", id: "(tidak) akan", hira: "けっして", kanji: "決して *N3" },
    { jp: "chittomo", id: "sedikit pun (tidak)", hira: "ちっとも", kanji: "-" },
    { jp: "naka naka", id: "lumayan", hira: "なかなか", kanji: "-" },
    { jp: "kyuu ni", id: "tiba-tiba", hira: "きゅうに", kanji: "急に *N4" },
    { jp: "shibaraku", id: "sebentar", hira: "しばらく", kanji: "-" },
    { jp: "sono mama", id: "tetap seperti itu", hira: "そのまま", kanji: "-" },
    { jp: "soro soro", id: "sudah waktunya untuk", hira: "そろそろ", kanji: "-" },
    { jp: "tou tou", id: "akhirnya", hira: "とうとう", kanji: "-" },
    { jp: "yatto", id: "akhirnya", hira: "やっと", kanji: "-" },
    { jp: "tashika", id: "kalau tidak salah", hira: "たしか", kanji: "-" },
    { jp: "doumo", id: "sangat", hira: "どうも", kanji: "-" },
    { jp: "tatoeba", id: "misalnya", hira: "たとえば", kanji: "例えば *N3" },
    { jp: "chokusetsu", id: "secara langsung", hira: "ちょくせつ", kanji: "直接 *N3" },
    { jp: "toku ni", id: "khususnya", hira: "とくに", kanji: "特に *N4" },
    { jp: "don don", id: "bertubi-tubi / berkelanjutan", hira: "どんどん", kanji: "-" },
    { jp: "naruhodo", id: "tentunya / saya paham", hira: "なるほど", kanji: "-" },
    { jp: "hajimete", id: "pertama kali", hira: "はじめて", kanji: "初めて *N3" },
    { jp: "hajime ni", id: "pertama-tama", hira: "はじめに", kanji: "初めに *N3" },
    { jp: "moshi", id: "seandainya", hira: "もし", kanji: "-" },
    { jp: "yahari / yappari", id: "seperti yang diduga", hira: "やはり・やっぱり", kanji: "-" },
    { jp: "jitsu wa", id: "sebenarnya", hira: "じつは", kanji: "実は *N3" },
    { jp: "ikaga", id: "bagaimana", hira: "いかが", kanji: "-" },
  ];

  // Fungsi render table
  const renderTable = (data: Adverb[]) => (
    <View style={styles.table}>
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
        <Text style={[styles.cell, styles.headerCell]}>Hiragana / Katakana</Text>
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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Adverbia Bahasa Jepang</Text>

      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata adverbia dalam bahasa Jepang.
      </Text>

      {renderTable(adverbia)}

      <Text style={styles.subTitle}>Catatan Perbedaan</Text>
      <View style={styles.note}>
        <Text><Text style={{ fontWeight: "bold" }}>Kitto:</Text> perkiraan/dugaan pasti terjadi.</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Kanarazu:</Text> kepastian karena percaya.</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Zehi:</Text> keinginan kuat agar terjadi.</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Zettai:</Text> keinginan kuat lebih dari zehi.</Text>

        <Text></Text>

        <Text><Text style={{ fontWeight: "bold" }}>Daitai:</Text> hampir semua, digunakan kalimat positif.</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Hotondo:</Text> hampir semua, digunakan kalimat negatif.</Text>

        <Text></Text>

        <Text><Text style={{ fontWeight: "bold" }}>Totemo:</Text> sangat, tertinggi.</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Zuibun, Kanari, Daibu:</Text> lumayan, menunjukkan perubahan kecil ke besar.</Text>
      </View>
    </ScrollView>
  );
}

// Styles
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
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
  note: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
    marginBottom: 40,
  },
});
