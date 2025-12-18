import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTFeeN2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biaya Tes JLPT N2</Text>

      <Text style={styles.text}>
        Biaya pendaftaran tes JLPT di Indonesia berbeda untuk setiap level ujian.
        Berdasarkan informasi terbaru tahun <Text style={styles.bold}>2024</Text>,
        biaya tes <Text style={styles.bold}>JLPT N2</Text> di Indonesia adalah:
      </Text>

      <View style={styles.card}>
        <Text style={styles.fee}>Rp250.000</Text>
        <Text style={styles.cardText}>
          (Belum termasuk biaya administrasi)
        </Text>
      </View>

      <Text style={styles.text}>
        Biaya ini tergolong lebih terjangkau jika dibandingkan dengan ujian
        kemampuan bahasa asing lainnya.
      </Text>

      <Text style={styles.subTitle}>Biaya JLPT di Jepang</Text>
      <Text style={styles.text}>
        Jika mengikuti ujian JLPT di Jepang, biaya pendaftaran berlaku sama untuk
        semua level ujian, yaitu:
      </Text>

      <View style={styles.card}>
        <Text style={styles.fee}>7.500 Yen</Text>
        <Text style={styles.cardText}>
          (Sekitar Rp770.000 pada tahun 2024, belum termasuk biaya admin)
        </Text>
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
    marginBottom: 14,
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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    alignItems: "center",
    elevation: 2,
  },
  fee: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F3B36",
  },
  cardText: {
    fontSize: 14,
    marginTop: 6,
    color: "#555",
    textAlign: "center",
  },
});
