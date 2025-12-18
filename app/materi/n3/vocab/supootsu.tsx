import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

/* ===== TYPE DEFINITIONS ===== */
interface RowProps {
  jp: string;
  translation: string;
  hira: string;
  kanji: string;
}

interface ExampleProps {
  jp: string;
  translation: string;
}

/* ===== MAIN COMPONENT ===== */
export default function SupootsuGeijutsuVocab() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* JUDUL */}
      <Text style={styles.title}>Daftar Pemahaman Olahraga & Seni</Text>
      <Text style={styles.desc}>
        Berikut ini adalah beberapa contoh kosakata yang berkaitan dengan olahraga dan seni dalam bahasa Jepang yang tergolong tingkat menengah (JLPT N3).
      </Text>

      {/* ================= OLAHRAGA ================= */}
      <Text style={styles.sectionTitle}>🏃 Olahraga</Text>
      <TableHeader />
      <Row jp="活躍する" translation="aktif beraktivitas" hira="かつやく（する）" kanji="活躍 *N1" />
      <Row jp="前半" translation="babak pertama" hira="ぜんはん" kanji="前半 *N5" />
      <Row jp="後半" translation="babak terakhir" hira="こうはん" kanji="後半 *N5" />
      <Row jp="拍手する" translation="bertepuk tangan" hira="はくしゅ（する）" kanji="拍手 *N1" />
      <Row jp="握手する" translation="bersalaman" hira="あくしゅ（する）" kanji="握手 *N1" />
      <Row jp="体操する" translation="senam" hira="たいそう（する）" kanji="体操 *N1" />
      <Row jp="引き分け" translation="seri / skor sama" hira="ひきわけ" kanji="引き分け *N3" />
      <Row jp="日課" translation="aktivitas rutin" hira="にっか" kanji="日課 *N2" />
      <Row jp="トレーニング" translation="latihan" hira="—" kanji="—" />
      <Row jp="キャプテン" translation="kapten" hira="—" kanji="—" />
      <Row jp="プロ" translation="profesional" hira="—" kanji="—" />
      <Row jp="ファン" translation="penggemar" hira="—" kanji="—" />

      {/* ================= SENI ================= */}
      <Text style={styles.sectionTitle}>🎨 Seni</Text>
      <TableHeader />
      <Row jp="芸術" translation="seni" hira="げいじゅつ" kanji="芸術 *N2" />
      <Row jp="絵画" translation="lukisan" hira="かいが" kanji="絵画 *N3" />
      <Row jp="名作" translation="mahakarya" hira="めいさく" kanji="名作 *N4" />
      <Row jp="登場する" translation="muncul" hira="とうじょう（する）" kanji="登場 *N3" />
      <Row jp="演奏する" translation="pertunjukan musik" hira="えんそう（する）" kanji="演奏 *N1" />
      <Row jp="才能" translation="bakat" hira="さいのう" kanji="才能 *N3" />
      <Row jp="好奇心" translation="keingintahuan" hira="こうきしん" kanji="好奇心 *N1" />
      <Row jp="ストーリー" translation="cerita" hira="—" kanji="—" />
      <Row jp="シリーズ" translation="seri" hira="—" kanji="—" />

      {/* ================= CONTOH KALIMAT ================= */}
      <Text style={styles.sectionTitle}>📌 Contoh Kalimat</Text>
      <Example jp="彼は若い頃、スポーツ選手として活躍した。" translation="Dia aktif beraktivitas sebagai atlet saat muda." />
      <Example jp="この試合は引き分けになりそうだ。" translation="Sepertinya pertandingan ini akan berakhir seri." />
      <Example jp="日課として、毎朝、簡単な体操をしている。" translation="Sebagai aktivitas rutin, setiap pagi melakukan senam sederhana." />
    </ScrollView>
  );
}

/* ===== SUB COMPONENTS ===== */
function TableHeader() {
  return (
    <View style={styles.headerRow}>
      <Text style={styles.headerCell}>Bahasa Jepang</Text>
      <Text style={styles.headerCell}>Indonesia</Text>
      <Text style={styles.headerCell}>Hiragana</Text>
      <Text style={styles.headerCell}>Kanji</Text>
    </View>
  );
}

function Row({ jp, translation, hira, kanji }: RowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.jp}>{jp}</Text>
      <Text style={styles.id}>{translation}</Text>
      <Text style={styles.hira}>{hira}</Text>
      <Text style={styles.kanji}>{kanji}</Text>
    </View>
  );
}

function Example({ jp, translation }: ExampleProps) {
  return (
    <View style={styles.exampleBox}>
      <Text style={styles.exampleJp}>{jp}</Text>
      <Text style={styles.exampleId}>{translation}</Text>
    </View>
  );
}

/* ===== STYLES ===== */
const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#FFF7FB",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    color: "#7A2EFF",
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 10,
    color: "#2E1065",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#EDE9FE",
    borderRadius: 10,
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "800",
    fontSize: 14,
    color: "#4C1D95",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#F0E6FF",
  },
  jp: { flex: 1, fontSize: 16, fontWeight: "700" },
  id: { flex: 1, fontSize: 15 },
  hira: { flex: 1, fontSize: 14, color: "#6D28D9" },
  kanji: { flex: 1, fontSize: 14, color: "#374151" },
  exampleBox: {
    backgroundColor: "#E0F2FE",
    padding: 14,
    borderRadius: 14,
    marginTop: 10,
  },
  exampleJp: { fontSize: 16, fontWeight: "700" },
  exampleId: { fontSize: 15, marginTop: 6 },
});
