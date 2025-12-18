import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KazokuVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Keluarga & Hubungan</Text>
      <Text style={styles.desc}>Kosakata keluarga & hubungan (JLPT N3)</Text>

      <TableHeader />
      <Row jp="家族" id="keluarga" hira="かぞく" kanji="家族 *N4" />
      <Row jp="父" id="ayah" hira="ちち" kanji="父 *N5" />
      <Row jp="母" id="ibu" hira="はは" kanji="母 *N5" />
      <Row jp="兄" id="kakak laki-laki" hira="あに" kanji="兄 *N4" />
      <Row jp="姉" id="kakak perempuan" hira="あね" kanji="姉 *N4" />
      <Row jp="弟" id="adik laki-laki" hira="おとうと" kanji="弟 *N4" />
      <Row jp="妹" id="adik perempuan" hira="いもうと" kanji="妹 *N4" />
      <Row jp="友達" id="teman" hira="ともだち" kanji="友達 *N4" />
      <Row jp="恋人" id="pacar" hira="こいびと" kanji="恋人 *N3" />
      <Row jp="結婚" id="pernikahan" hira="けっこん" kanji="結婚 *N3" />
      <Row jp="離婚" id="perceraian" hira="りこん" kanji="離婚 *N3" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="私の家族は5人です。" id="Keluargaku berjumlah 5 orang." />
      <Example jp="兄は大学生です。" id="Kakakku laki-laki adalah mahasiswa." />
      <Example jp="友達と公園で遊びました。" id="Bermain di taman bersama teman." />
      <Example jp="恋人に手紙を書きました。" id="Menulis surat untuk pacar." />
      <Example jp="結婚式は来月です。" id="Pernikahan akan dilaksanakan bulan depan." />
      <Example jp="離婚は辛い経験です。" id="Perceraian adalah pengalaman yang menyedihkan." />
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
  container: { padding: 18, backgroundColor: "#F3E5F5" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8, textAlign: "center", color: "#6A1B9A" },
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center", color: "#8E24AA" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#4A148C" },
  headerRow: { flexDirection: "row", backgroundColor: "#E1BEE7", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14, color: "#4A148C" },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#CE93D8" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#8E24AA" },
  kanji: { flex: 1, fontSize: 14, color: "#4A148C" },
  exampleBox: { backgroundColor: "#E1BEE7", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
