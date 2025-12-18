import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiKurabete() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>Fungsi 「ni kurabete」</Text>
      </View>

      {/* Pengertian */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Pengertian</Text>
        <Text style={styles.caption}>
          「ni kurabete」 adalah ungkapan untuk membandingkan dua hal yang berbeda.
          Artinya “dibandingkan dengan” atau “kalau dibandingkan dengan”.
        </Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
        <Text style={styles.list}>• Kata benda + ni kurabete</Text>
        <Text style={styles.list}>• Kata benda + ni kurabe</Text>
        <Text style={styles.list}>• Kata benda + ni kuraberu to</Text>
        <Text style={styles.list}>• Kata benda + ni kurabereba</Text>
      </View>

      {/* Catatan */}
      <View style={styles.sectionNote}>
        <Text style={styles.subTitle}>Catatan</Text>
        <Text style={styles.caption}>
          Pola ini mirip dengan 「yori ~ hou ga」, hanya berbeda susunan kalimatnya.
        </Text>
      </View>

      {/* Contoh Kalimat */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Contoh Kalimat</Text>
      </View>

      {[
        [
          "Nihon ni kurabete, Indonesia wa hiroi.",
          "日本に比べて、インドネシアは広い。",
          "→ Dibandingkan Jepang, Indonesia lebih luas.",
        ],
        [
          "Yamada sensei ni kurabete, Tanaka sensei wa kibishii desu.",
          "山田先生に比べて、田中先生は厳しいです。",
          "→ Dibandingkan Pak Yamada, Pak Tanaka lebih disiplin.",
        ],
        [
          "Otouto wa osanai koro ni kuraberu to, otonashii.",
          "弟は幼い頃に比べると、おとなしい。",
          "→ Dibandingkan waktu kecil, sekarang dia lebih pendiam.",
        ],
        [
          "Dansei ni kuraberu to, josei wa jumyou ga nagai.",
          "男性に比べると、女性は寿命が長い。",
          "→ Perempuan umurnya lebih panjang dibanding laki-laki.",
        ],
        [
          "Shingapooru ni kurabete, Indonesia wa bukka ga yasui.",
          "シンガポールに比べて、インドネシアは物価が安い。",
          "→ Biaya hidup Indonesia lebih murah.",
        ],
        [
          "Inaka ni kurabereba, tokai wa kuuki ga yogorete iru.",
          "田舎に比べれば、都会は空気が汚れている。",
          "→ Udara kota lebih kotor dibanding desa.",
        ],
        [
          "Gonen mae ni kurabete, kono machi wa hatten shita.",
          "五年前に比べて、この街は発展した。",
          "→ Kota ini berkembang dibanding lima tahun lalu.",
        ],
      ].map((item, index) => (
        <View key={index} style={styles.exampleBox}>
          <Text style={styles.exampleRomaji}>{item[0]}</Text>
          <Text style={styles.exampleJP}>{item[1]}</Text>
          <Text style={styles.caption}>{item[2]}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F4F1",
    padding: 16,
  },

  titleBox: {
    backgroundColor: "#CFFAFE",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#064E3B",
  },

  section: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 14,
  },

  sectionNote: {
    backgroundColor: "#F0FDFA",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: "#2DD4BF",
  },

  subTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#065F46",
    marginBottom: 8,
  },

  caption: {
    fontSize: 16,
    color: "#1F2937",
    lineHeight: 24,
  },

  list: {
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 6,
  },

  subHeader: {
    backgroundColor: "#99F6E4",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 12,
  },

  subHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#064E3B",
  },

  exampleBox: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#5EEAD4",
  },

  exampleRomaji: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  exampleJP: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 6,
  },
});
