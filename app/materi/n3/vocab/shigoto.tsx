import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ShigotoVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Pekerjaan</Text>
      <Text style={styles.desc}>Kosakata pekerjaan (JLPT N3)</Text>

      <TableHeader />
      <Row jp="仕事" id="pekerjaan" hira="しごと" kanji="仕事 *N5" />
      <Row jp="会社員" id="karyawan" hira="かいしゃいん" kanji="会社員 *N4" />
      <Row jp="上司" id="atasan" hira="じょうし" kanji="上司 *N3" />
      <Row jp="部下" id="bawahan" hira="ぶか" kanji="部下 *N3" />
      <Row jp="同僚" id="rekan kerja" hira="どうりょう" kanji="同僚 *N3" />
      <Row jp="会議" id="rapat" hira="かいぎ" kanji="会議 *N3" />
      <Row jp="出張" id="perjalanan dinas" hira="しゅっちょう" kanji="出張 *N3" />
      <Row jp="残業" id="lembur" hira="ざんぎょう" kanji="残業 *N3" />
      <Row jp="給料" id="gaji" hira="きゅうりょう" kanji="給料 *N3" />
      <Row jp="職場" id="tempat kerja" hira="しょくば" kanji="職場 *N3" />
      <Row jp="面接" id="wawancara kerja" hira="めんせつ" kanji="面接 *N3" />
      <Row jp="履歴書" id="CV / daftar riwayat hidup" hira="りれきしょ" kanji="履歴書 *N3" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="私は会社員です。" id="Saya seorang karyawan." />
      <Example jp="上司に報告しました。" id="Saya melapor kepada atasan." />
      <Example jp="毎日残業しています。" id="Saya lembur setiap hari." />
      <Example jp="会議は午後3時に始まります。" id="Rapat dimulai pukul 3 sore." />
      <Example jp="出張で東京に行きます。" id="Saya pergi ke Tokyo untuk perjalanan dinas." />
    </ScrollView>
  );
}

/* ===== COMPONENTS ===== */
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

/* ===== STYLE ===== */
const styles = StyleSheet.create({
  container: { padding: 18, backgroundColor: "#FFF0F0" }, // tema merah muda
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8, textAlign: "center", color: "#B91C1C" },
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center", color: "#7F1D1D" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#B91C1C" },
  headerRow: { flexDirection: "row", backgroundColor: "#FECACA", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14, color: "#7F1D1D" },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#FECACA" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#B91C1C" },
  kanji: { flex: 1, fontSize: 14, color: "#7F1D1D" },
  exampleBox: { backgroundColor: "#FEE2E2", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
