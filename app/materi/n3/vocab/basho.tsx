import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function BashoVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata Tempat</Text>
      <Text style={styles.desc}>Kosakata tempat (JLPT N3)</Text>

      <TableHeader />
      <Row jp="学校" id="sekolah" hira="がっこう" kanji="学校 *N5" />
      <Row jp="会社" id="perusahaan" hira="かいしゃ" kanji="会社 *N3" />
      <Row jp="駅" id="stasiun" hira="えき" kanji="駅 *N5" />
      <Row jp="店" id="toko" hira="みせ" kanji="店 *N4" />
      <Row jp="公園" id="taman" hira="こうえん" kanji="公園 *N4" />
      <Row jp="図書館" id="perpustakaan" hira="としょかん" kanji="図書館 *N3" />
      <Row jp="病院" id="rumah sakit" hira="びょういん" kanji="病院 *N3" />
      <Row jp="映画館" id="bioskop" hira="えいがかん" kanji="映画館 *N3" />
      <Row jp="郵便局" id="kantor pos" hira="ゆうびんきょく" kanji="郵便局 *N3" />
      <Row jp="駅前" id="depan stasiun" hira="えきまえ" kanji="駅前 *N3" />
      <Row jp="商店街" id="jalan perbelanjaan" hira="しょうてんがい" kanji="商店街 *N3" />
      <Row jp="図書室" id="ruang baca" hira="としょしつ" kanji="図書室 *N3" />
      <Row jp="公民館" id="balai warga" hira="こうみんかん" kanji="公民館 *N3" />
      <Row jp="体育館" id="gedung olahraga" hira="たいいくかん" kanji="体育館 *N3" />
      <Row jp="神社" id="kuil Shinto" hira="じんじゃ" kanji="神社 *N4" />

      <Text style={styles.sectionTitle}>Contoh Kalimat</Text>
      <Example jp="学校に行きます。" id="Saya pergi ke sekolah." />
      <Example jp="会社で働いています。" id="Saya bekerja di perusahaan." />
      <Example jp="駅前で友達に会いました。" id="Saya bertemu teman di depan stasiun." />
      <Example jp="公園で犬を散歩させます。" id="Saya mengajak anjing jalan-jalan di taman." />
      <Example jp="図書館で本を借りました。" id="Saya meminjam buku di perpustakaan." />
      <Example jp="病院で診察を受けました。" id="Saya diperiksa di rumah sakit." />
      <Example jp="映画館で映画を見ました。" id="Saya menonton film di bioskop." />
      <Example jp="郵便局で手紙を送りました。" id="Saya mengirim surat di kantor pos." />
      <Example jp="商店街で買い物をしました。" id="Saya belanja di jalan perbelanjaan." />
      <Example jp="神社に参拝しました。" id="Saya berkunjung ke kuil Shinto." />
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
  container: { padding: 18, backgroundColor: "#FFF7FB" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 8, textAlign: "center" },
  desc: { fontSize: 16, marginBottom: 16, textAlign: "center" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20, marginBottom: 10 },
  headerRow: { flexDirection: "row", backgroundColor: "#EDE9FE", padding: 10, borderRadius: 10 },
  headerCell: { flex: 1, fontWeight: "700", fontSize: 14 },
  row: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#F0E6FF" },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#6D28D9" },
  kanji: { flex: 1, fontSize: 14, color: "#374151" },
  exampleBox: { backgroundColor: "#E0F2FE", padding: 12, borderRadius: 12, marginTop: 8 },
  exampleJp: { fontSize: 15, fontWeight: "700" },
  exampleId: { fontSize: 14, marginTop: 4 },
});
