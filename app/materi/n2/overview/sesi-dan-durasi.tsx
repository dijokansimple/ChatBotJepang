import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTSesiDurasiN2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sesi dan Durasi JLPT N2</Text>

      <Text style={styles.text}>
        Berbeda dengan ujian JLPT level N5 hingga N3, jumlah sesi pada
        <Text style={styles.bold}> JLPT N2 </Text>
        lebih sedikit, tetapi memiliki durasi yang lebih lama.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sesi 1</Text>
        <Text style={styles.cardText}>
          Pengetahuan Bahasa (Moji / Goi / Bunpou){"\n"}
          + Membaca (Dokkai)
        </Text>
        <Text style={styles.duration}>Durasi: 105 menit</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sesi 2</Text>
        <Text style={styles.cardText}>
          Mendengarkan (Choukai)
        </Text>
        <Text style={styles.duration}>Durasi: 50 menit</Text>
      </View>

      <Text style={styles.text}>
        Jika dibandingkan dengan JLPT N5–N3, ujian JLPT N2 memiliki
        <Text style={styles.bold}> durasi yang lebih panjang</Text>.
        Selain itu, sesi pengetahuan bahasa dan membaca digabung menjadi satu
        sesi.
      </Text>

      <Text style={styles.text}>
        Karena hanya terdapat dua sesi dan sesi pertama berlangsung cukup lama,
        peserta ujian diharapkan mampu menjaga
        <Text style={styles.bold}> fokus dan konsentrasi </Text>
        selama ujian berlangsung.
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
    marginBottom: 14,
    textAlign: "center",
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
    borderRadius: 14,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
    color: "#0F3B36",
  },
  cardText: {
    fontSize: 15,
    marginBottom: 6,
    color: "#444",
  },
  duration: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F3B36",
  },
});
