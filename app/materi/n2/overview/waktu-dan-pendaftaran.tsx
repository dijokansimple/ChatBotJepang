import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTRegistration() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kapan Waktu Ujian dan Masa Pendaftarannya?</Text>

      <Text style={styles.caption}>
        JLPT diselenggarakan dua kali dalam setahun, yaitu pada minggu pertama bulan Juli dan Desember.
      </Text>

      <Text style={styles.subTitle}>Masa Pendaftaran di Indonesia</Text>
      <Text style={styles.caption}>
        • Untuk ujian bulan Juli: pendaftaran biasanya dilakukan pada bulan Maret-April.{"\n"}
        • Untuk ujian bulan Desember: pendaftaran biasanya dilakukan pada bulan Agustus-September.
      </Text>

      <Text style={styles.subTitle}>Prosedur Pendaftaran Online</Text>
      <Text style={styles.caption}>
        Pendaftaran dilakukan melalui situs resmi:{" "}
        <Text style={{ fontWeight: "bold", color: "#0F3B36" }}>jlptonline.or.id</Text>.  
        Saat mendaftar, biasanya dibutuhkan:
      </Text>

      <View style={styles.list}>
        <Text style={styles.listItem}>• Identitas diri</Text>
        <Text style={styles.listItem}>• Foto terbaru</Text>
        <Text style={styles.listItem}>• Scan bukti pembayaran (memuat nama lengkap dan level JLPT)</Text>
      </View>

      <Text style={styles.caption}>
        Jangan lupa untuk mencetak kartu ujian JLPT, karena perlu ditunjukkan saat ujian.  
        Pastikan selalu mengecek situs resmi agar tidak ketinggalan informasi terbaru!
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
    marginVertical: 10,
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
