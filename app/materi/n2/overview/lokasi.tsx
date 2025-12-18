import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTLocation() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lokasi Pelaksanaan JLPT</Text>

      <Text style={styles.text}>
        Ujian kemampuan bahasa Jepang JLPT diadakan di lebih dari{" "}
        <Text style={styles.bold}>85 negara</Text> hingga tahun 2024 dan
        diselenggarakan di seluruh prefektur di Jepang.
      </Text>

      <Text style={styles.text}>
        Di Indonesia, JLPT tidak diadakan di semua kota, melainkan hanya di
        beberapa wilayah tertentu.
      </Text>

      <Text style={styles.subTitle}>Bulan Juli dan Desember</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Bandung</Text>
        <Text style={styles.listItem}>• Cirebon</Text>
        <Text style={styles.listItem}>• D. I. Yogyakarta</Text>
        <Text style={styles.listItem}>• Jakarta</Text>
        <Text style={styles.listItem}>• Makassar</Text>
        <Text style={styles.listItem}>• Malang</Text>
        <Text style={styles.listItem}>• Manado</Text>
        <Text style={styles.listItem}>• Medan</Text>
        <Text style={styles.listItem}>• Padang</Text>
        <Text style={styles.listItem}>• Palembang</Text>
        <Text style={styles.listItem}>• Semarang</Text>
        <Text style={styles.listItem}>• Surabaya</Text>
      </View>

      <Text style={styles.subTitle}>Hanya Bulan Desember</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Denpasar</Text>
      </View>

      <Text style={styles.note}>
        Karena JLPT tidak tersedia di setiap kota di Indonesia, pastikan memilih
        lokasi tes yang paling sesuai dengan kebutuhanmu.
      </Text>
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
    marginTop: 16,
    marginBottom: 8,
    color: "#0F3B36",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  list: {
    marginLeft: 12,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  note: {
    fontSize: 16,
    marginTop: 16,
    fontStyle: "italic",
    color: "#444",
  },
});
