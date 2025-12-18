import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KakeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「kake」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pola Kalimat</Text>
        <Text style={styles.paragraph}>
          Kata kerja bentuk masu + kake / kakeru {"\n"}
          Kata kerja bentuk masu + kake no + kata benda
        </Text>
      </View>

      {/* Penggunaan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Penggunaan 「kake」</Text>
        <Text style={styles.paragraph}>
          Tata bahasa “kake” termasuk dalam pola kalimat bahasa Jepang N3 yang
          menyatakan sesuatu yang sudah mulai dilakukan atau terjadi tetapi belum
          dilakukan atau terjadi secara tuntas. Secara umum, pola ini digunakan
          untuk menunjukkan keadaan yang belum selesai atau keadaan yang hampir
          terjadi namun akhirnya tidak sampai terjadi sepenuhnya.
        </Text>
      </View>

      {/* Fungsi 1 */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>① Belum Selesai / Baru Setengah</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Fungsi ini digunakan untuk menyatakan suatu tindakan yang belum dilakukan
          sampai selesai atau suatu kondisi yang berhenti di tengah jalan. Dalam
          bahasa Indonesia, pola ini dapat diartikan sebagai “belum selesai” atau
          “baru setengah”. Bentuk yang sering digunakan adalah kata kerja bentuk
          masu + kake no + kata benda atau kata kerja bentuk masu + kake da.
        </Text>
      </View>

      {/* Contoh */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          わたしの たべかけの ピザは あにに たべられました。
        </Text>
        <Text style={styles.id}>
          → Pizza saya yang baru setengah dimakan, sudah dimakan oleh kakak laki-laki.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          彼女は読みかけの小説を図書館に返しました。
        </Text>
        <Text style={styles.id}>
          → Dia mengembalikan novel yang belum selesai dibacanya ke perpustakaan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          突然の雨で、乾きかけの服はまた濡れてしまいました。
        </Text>
        <Text style={styles.id}>
          → Karena hujan tiba-tiba, baju yang setengah kering jadi basah lagi.
        </Text>
      </View>

      {/* Fungsi 2 */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>② Hampir Terjadi</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          Fungsi ini digunakan untuk menyatakan suatu gerakan atau perubahan yang
          hampir terjadi, tetapi pada akhirnya tidak sampai terjadi. Biasanya
          digunakan dalam bentuk lampau seperti “kaketa” atau “kakete ita” dan
          dapat diterjemahkan sebagai “hampir” dalam bahasa Indonesia.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          道を渡るとき左右を確認しなかったので、車にはねられかけた。
        </Text>
        <Text style={styles.id}>
          → Karena tidak melihat kanan kiri saat menyeberang, saya hampir tertabrak mobil.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          彼は見ず知らずの人に襲われて死にかけた。
        </Text>
        <Text style={styles.id}>
          → Dia diserang orang tak dikenal dan hampir meninggal.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          ラーメンがのびかけているので、早く食べてください。
        </Text>
        <Text style={styles.id}>
          → Karena ramennya hampir mengembang, tolong cepat dimakan.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    padding: 16,
  },

  titleBox: {
    backgroundColor: "#C7D2FE",
    padding: 14,
    borderRadius: 14,
    marginBottom: 16,
  },
  titleText: {
    color: "#1E3A8A",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  section: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4338CA",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
  },

  subBox: {
    backgroundColor: "#E0F2FE",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  subTitle: {
    color: "#075985",
    fontWeight: "bold",
    fontSize: 15,
  },

  exampleBox: {
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 4,
    borderLeftColor: "#93C5FD",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  jp: {
    fontSize: 14,
    color: "#0F172A",
    marginBottom: 6,
  },
  id: {
    fontSize: 13,
    color: "#475569",
  },
});
