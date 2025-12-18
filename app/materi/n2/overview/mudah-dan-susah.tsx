import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function JLPTEasyHardN2() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Hal yang Mungkin Mudah dan Susah pada JLPT N2
      </Text>

      <Text style={styles.text}>
        Tingkat kesulitan JLPT N2 dapat dirasakan berbeda oleh setiap peserta.
        Ada yang merasa sesi mendengarkan tergolong mudah, namun ada juga yang
        merasa sebaliknya.
      </Text>

      <Text style={styles.text}>
        Perlu diketahui bahwa tingkat kesulitan JLPT N2
        <Text style={styles.bold}> jauh lebih tinggi dibandingkan JLPT N3</Text>.
        Kosakata yang digunakan lebih rumit dan beragam, sehingga meskipun lulus
        N3, belum tentu peserta dapat mengerjakan soal N2 dengan mudah.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bagian yang Relatif Lebih Mudah</Text>
        <Text style={styles.cardText}>
          Berdasarkan pengalaman beberapa peserta yang berhasil lulus JLPT N2,
          sesi <Text style={styles.bold}>mendengarkan (choukai)</Text> sering
          dianggap sebagai bagian yang paling mudah. Mereka merasa soal
          mendengarkan tidak sesulit yang dibayangkan.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bagian yang Paling Sulit</Text>
        <Text style={styles.cardText}>
          Sebaliknya, sesi pertama yang meliputi
          <Text style={styles.bold}>
            {" "}
            kanji, kosakata, tata bahasa, dan membaca
          </Text>{" "}
          dianggap sangat sulit. Bahkan, untuk menjawab sepertiga dari total soal
          pada sesi ini saja terasa cukup berat.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Strategi yang Banyak Digunakan</Text>
        <Text style={styles.cardText}>
          Karena sulitnya sesi pertama, banyak peserta berusaha
          <Text style={styles.bold}> memaksimalkan skor pada sesi mendengarkan</Text>.
          Dengan nilai mendengarkan yang tinggi, peluang lulus tetap terbuka
          meskipun nilai sesi pertama tidak terlalu tinggi.
        </Text>
      </View>

      <Text style={styles.text}>
        Jika sudah terbiasa mendengarkan audio bahasa Jepang dan berkomunikasi
        dengan penutur asli, sesi mendengarkan JLPT N2 cenderung lebih mudah.
        Namun, untuk mendapatkan nilai yang memuaskan pada sesi pertama,
        dibutuhkan <Text style={styles.bold}>usaha belajar yang intensif</Text>.
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
    marginVertical: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#0F3B36",
    textAlign: "center",
  },
  cardText: {
    fontSize: 15,
    lineHeight: 21,
    color: "#444",
    textAlign: "justify",
  },
});
