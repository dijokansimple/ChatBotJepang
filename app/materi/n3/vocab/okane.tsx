import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function OkaneVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Uang & Belanja</Text>
      <Text style={styles.desc}>Kosakata uang dan belanja (JLPT N3)</Text>

      <TableHeader />
      <Row jp="お金" id="uang" hira="おかね" kanji="お金 *N4" />
      <Row jp="買い物" id="belanja" hira="かいもの" kanji="買い物 *N4" />
      <Row jp="現金" id="tunai" hira="げんきん" kanji="現金 *N3" />
      <Row jp="カード" id="kartu" hira="—" kanji="—" />
      <Row jp="支払い" id="pembayaran" hira="しはらい" kanji="支払い *N3" />
      <Row jp="割引" id="diskon" hira="わりびき" kanji="割引 *N3" />
      <Row jp="領収書" id="struk" hira="りょうしゅうしょ" kanji="領収書 *N3" />
      <Row jp="返金" id="pengembalian uang" hira="へんきん" kanji="返金 *N3" />
      <Row jp="買い替え" id="membeli pengganti" hira="かいかえ" kanji="買い替え *N3" />
      <Row jp="貯金" id="menabung" hira="ちょきん" kanji="貯金 *N3" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="現金で支払いました。" id="Saya membayar dengan tunai." />
      <Example jp="割引があるので買いました。" id="Karena ada diskon, saya membelinya." />
      <Example jp="領収書をください。" id="Tolong berikan struknya." />
      <Example jp="毎月少しずつ貯金しています。" id="Saya menabung sedikit demi sedikit setiap bulan." />
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
