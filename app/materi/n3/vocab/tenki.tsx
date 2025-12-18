import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TenkiVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Cuaca & Alam</Text>
      <Text style={styles.desc}>Kosakata cuaca & alam (JLPT N3)</Text>

      <TableHeader />
      <Row jp="晴れ" id="cerah" hira="はれ" kanji="晴れ *N4" />
      <Row jp="雨" id="hujan" hira="あめ" kanji="雨 *N5" />
      <Row jp="曇り" id="berawan" hira="くもり" kanji="曇り *N4" />
      <Row jp="雪" id="salju" hira="ゆき" kanji="雪 *N5" />
      <Row jp="雷" id="guntur" hira="かみなり" kanji="雷 *N3" />
      <Row jp="風" id="angin" hira="かぜ" kanji="風 *N3" />
      <Row jp="台風" id="topan" hira="たいふう" kanji="台風 *N3" />
      <Row jp="虹" id="pelangi" hira="にじ" kanji="虹 *N2" />
      <Row jp="山" id="gunung" hira="やま" kanji="山 *N4" />
      <Row jp="川" id="sungai" hira="かわ" kanji="川 *N4" />
      <Row jp="森" id="hutan" hira="もり" kanji="森 *N3" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="今日は晴れです。" id="Hari ini cerah." />
      <Example jp="昨日は雨が降りました。" id="Kemarin hujan turun." />
      <Example jp="明日は台風が来るそうです。" id="Besok katanya akan ada topan." />
      <Example jp="山の上から川が見えます。" id="Dari atas gunung terlihat sungai." />
      <Example jp="森で散歩をしました。" id="Berjalan-jalan di hutan." />
      <Example jp="空に虹が出ています。" id="Ada pelangi di langit." />
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
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center", color: "#0288D1" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#01579B" },
  headerRow: { flexDirection: "row", backgroundColor: "#B3E5FC", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14, color: "#01579B" },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#81D4FA" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#0288D1" },
  kanji: { flex: 1, fontSize: 14, color: "#01579B" },
  exampleBox: { backgroundColor: "#B3E5FC", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
