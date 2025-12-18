import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DezainVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Desain & Fashion</Text>
      <Text style={styles.desc}>Kosakata desain & fashion (JLPT N3)</Text>

      <TableHeader />
      <Row jp="服" id="pakaian" hira="ふく" kanji="服 *N4" />
      <Row jp="ワイシャツ" id="kemeja" hira="—" kanji="—" />
      <Row jp="ドレス" id="gaun" hira="—" kanji="—" />
      <Row jp="靴" id="sepatu" hira="くつ" kanji="靴 *N4" />
      <Row jp="帽子" id="topi" hira="ぼうし" kanji="帽子 *N4" />
      <Row jp="アクセサリー" id="aksesori" hira="—" kanji="—" />
      <Row jp="デザイン" id="desain" hira="—" kanji="—" />
      <Row jp="ファッション" id="fashion" hira="—" kanji="—" />
      <Row jp="色" id="warna" hira="いろ" kanji="色 *N5" />
      <Row jp="柄" id="motif" hira="がら" kanji="柄 *N3" />
      <Row jp="素材" id="material / bahan" hira="そざい" kanji="素材 *N3" />
      <Row jp="流行" id="tren / mode" hira="りゅうこう" kanji="流行 *N3" />
      <Row jp="ブランド" id="merek" hira="—" kanji="—" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="この服はとてもおしゃれです。" id="Pakaian ini sangat modis." />
      <Example jp="ドレスを買いました。" id="Aku membeli gaun." />
      <Example jp="新しいデザインの靴が欲しいです。" id="Aku ingin sepatu dengan desain baru." />
      <Example jp="帽子は色がきれいです。" id="Topi ini warnanya cantik." />
      <Example jp="流行のアクセサリーを使っています。" id="Aku memakai aksesori yang sedang tren." />
      <Example jp="ブランドのバッグは高いです。" id="Tas bermerek itu mahal." />
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
  container: { padding: 18, backgroundColor: "#FFF0F5" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8, textAlign: "center", color: "#C2185B" },
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center", color: "#D81B60" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10, color: "#880E4F" },
  headerRow: { flexDirection: "row", backgroundColor: "#F8BBD0", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14, color: "#880E4F" },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#F48FB1" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#AD1457" },
  kanji: { flex: 1, fontSize: 14, color: "#880E4F" },
  exampleBox: { backgroundColor: "#F8BBD0", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
