import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTSkorLulusN2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Syarat Lulus Skor Minimal JLPT N2</Text>

      <Text style={styles.paragraph}>
        Skor minimal yang harus diperoleh agar dapat lulus ujian JLPT berbeda
        untuk setiap level. Pada <Text style={styles.bold}>JLPT N2</Text>, peserta
        harus mendapatkan minimal{" "}
        <Text style={styles.bold}>90 dari total 180 poin</Text>.
      </Text>

      <Text style={styles.paragraph}>
        Namun, kelulusan tidak hanya ditentukan oleh total skor. Setiap bagian
        ujian juga memiliki{" "}
        <Text style={styles.bold}>batas nilai minimal</Text>. Jika salah satu
        bagian tidak memenuhi standar, maka peserta tetap dinyatakan{" "}
        <Text style={styles.bold}>tidak lulus</Text>.
      </Text>

      <View style={styles.box}>
        <Text style={styles.subTitle}>Standar Kelulusan per Bagian</Text>

        <Text style={styles.listItem}>
          • Kosakata dan Kanji: minimal <Text style={styles.bold}>19 dari 60</Text>
        </Text>

        <Text style={styles.listItem}>
          • Tata Bahasa dan Membaca: minimal{" "}
          <Text style={styles.bold}>19 dari 60</Text>
        </Text>

        <Text style={styles.listItem}>
          • Mendengarkan: minimal <Text style={styles.bold}>19 dari 60</Text>
        </Text>
      </View>

      <Text style={styles.paragraph}>
        Dengan demikian, standar kelulusan JLPT N2 setara dengan{" "}
        <Text style={styles.bold}>50% dari total nilai</Text> pada masing-masing
        bagian ujian.
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
    marginBottom: 16,
    textAlign: "center",
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#0F3B36",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    marginVertical: 12,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
});
