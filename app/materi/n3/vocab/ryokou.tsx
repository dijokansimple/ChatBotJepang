import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function RyokouVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Wisata / Liburan</Text>
      <Text style={styles.desc}>Kosakata liburan (JLPT N3)</Text>

      <TableHeader />
      <Row jp="旅行" id="perjalanan / liburan" hira="りょこう" kanji="旅行 *N3" />
      <Row jp="観光" id="wisata" hira="かんこう" kanji="観光 *N3" />
      <Row jp="宿泊" id="menginap" hira="しゅくはく" kanji="宿泊 *N3" />
      <Row jp="温泉" id="pemandian air panas" hira="おんせん" kanji="温泉 *N3" />
      <Row jp="飛行機" id="pesawat" hira="ひこうき" kanji="飛行機 *N4" />
      <Row jp="電車" id="kereta" hira="でんしゃ" kanji="電車 *N4" />
      <Row jp="切符" id="tiket" hira="きっぷ" kanji="切符 *N3" />
      <Row jp="旅行会社" id="agen perjalanan" hira="りょこうがいしゃ" kanji="旅行会社 *N2" />
      <Row jp="地図" id="peta" hira="ちず" kanji="地図 *N4" />
      <Row jp="観光名所" id="tempat wisata terkenal" hira="かんこうめいしょ" kanji="観光名所 *N2" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="夏休みに家族と旅行します。" id="Liburan musim panas saya pergi dengan keluarga." />
      <Example jp="温泉でゆっくり休みたいです。" id="Saya ingin beristirahat santai di pemandian air panas." />
      <Example jp="旅行会社でツアーを申し込みました。" id="Saya mendaftar tur di agen perjalanan." />
      <Example jp="観光名所をたくさん回りました。" id="Kami berkeliling banyak tempat wisata terkenal." />
      <Example jp="切符を忘れないようにしてください。" id="Jangan lupa membawa tiket." />
    </ScrollView>
  );
}

// COMPONENTS
function TableHeader() {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerCell}>Jepang</Text>
      <Text style={styles.headerCell}>Indonesia</Text>
      <Text style={styles.headerCell}>Hiragana</Text>
      <Text style={styles.headerCell}>Kanji</Text>
    </View>
  );
}
function Row({ jp, id, hira, kanji }: { jp: string; id: string; hira: string; kanji: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.jp}>{jp}</Text>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.hira}>{hira}</Text>
      <Text style={styles.kanji}>{kanji}</Text>
    </View>
  );
}
function Example({ jp, id }: { jp: string; id: string }) {
  return (
    <View style={styles.exampleBox}>
      <Text style={styles.exampleJp}>{jp}</Text>
      <Text style={styles.exampleId}>{id}</Text>
    </View>
  );
}

// STYLE
const styles = StyleSheet.create({
  container: { padding: 18, backgroundColor: "#E1F5FE" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8, textAlign: "center", color: "#0277BD" },
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center", color: "#01579B" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#0277BD" },
  headerRow: { flexDirection: "row", backgroundColor: "#B3E5FC", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14, color: "#01579B" },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#B3E5FC" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#0288D1" },
  kanji: { flex: 1, fontSize: 14, color: "#01579B" },
  exampleBox: { backgroundColor: "#B3E5FC", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
