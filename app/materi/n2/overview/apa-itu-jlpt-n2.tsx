import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTN2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Apa Itu JLPT N2?</Text>

      <Text style={styles.caption}>
        JLPT (Japanese Language Proficiency Test) adalah ujian kemampuan bahasa Jepang resmi
        yang diselenggarakan oleh Japan Foundation dan Japan Educational Exchanges and Services.
        Ujian ini memiliki lima level, yaitu N5 (paling dasar), N4 (dasar menengah), N3 (menengah),
        N2 (mahir), dan N1 (sangat mahir). JLPT N2 termasuk dalam level mahir, yang lebih sulit
        dibandingkan N3.
      </Text>

      <Text style={styles.subTitle}>Persyaratan Sebelum Mengikuti N2</Text>
      <Text style={styles.caption}>
        Agar bisa lulus JLPT N2, peserta diharapkan:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>• Menguasai sekitar 6.000 kosakata bahasa Jepang.</Text>
        <Text style={styles.listItem}>• Menguasai sekitar 1.000 huruf kanji.</Text>
        <Text style={styles.listItem}>• Pernah belajar bahasa Jepang lebih dari 600 jam.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#dff3ee",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 12,
    color: "#0F3B36",
  },
  caption: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
    lineHeight: 22,
  },
  list: {
    marginLeft: 12,
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
});
