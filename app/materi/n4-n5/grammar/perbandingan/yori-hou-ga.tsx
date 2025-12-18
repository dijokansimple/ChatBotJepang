import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function YoriHouGa() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>より〜ほうが</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Tata bahasa 「より〜ほうが」 digunakan untuk menyatakan
        perbandingan dua hal dengan makna “dibandingkan …, lebih …”.
      </Text>
      <Text style={styles.caption}>
        Secara sederhana, pola ini bermakna:
        「A より B のほうが C」= “Dibandingkan A, B lebih C”.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kata benda 1 + より + kata benda 2 + のほうが + predikat
        </Text>
        <Text style={styles.exampleText}>
          Kata kerja 1 (bentuk kamus) + より + kata kerja 2 + ほうが + predikat
        </Text>
        <Text style={styles.exampleText}>
          Kata sifat i / na 1 + より + kata sifat i / na 2 + ほうが + predikat
        </Text>
      </View>

      {/* Hal yang Perlu Diperhatikan */}
      <Text style={styles.subTitle}>Hal yang Perlu Diperhatikan</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          • Digunakan untuk membandingkan dua hal, bukan lebih dari dua
        </Text>
        <Text style={styles.exampleText}>
          • Mengandung penilaian subjektif dari pembicara
        </Text>
        <Text style={styles.exampleText}>
          • Harus ada perbedaan tingkat antara dua hal yang dibandingkan
        </Text>
        <Text style={styles.exampleText}>
          • Bisa terkesan menilai satu hal lebih baik dan yang lain lebih buruk
        </Text>
        <Text style={styles.exampleText}>
          • Dalam situasi sangat formal, perlu kehati-hatian dalam penggunaannya
        </Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            英語より、中国語のほうが難しいと思います。
          </Text>
          <Text style={styles.exampleText}>
            Ei-go yori, chuugoku-go no hou ga muzukashii to omoimasu.
          </Text>
          <Text style={styles.exampleText}>
            → Menurut saya, dibandingkan bahasa Inggris, bahasa Mandarin lebih sulit.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            仕事より、家族のほうが大切だと思っている人が多いですか。
          </Text>
          <Text style={styles.exampleText}>
            Shigoto yori, kazoku no hou ga taisetsu da to omotte iru hito ga ooi desu ka?
          </Text>
          <Text style={styles.exampleText}>
            → Apakah banyak orang yang menganggap keluarga lebih penting daripada pekerjaan?
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            私の部屋より、彼女の部屋のほうが広いです。
          </Text>
          <Text style={styles.exampleText}>
            Watashi no heya yori, kanojo no heya no hou ga hiroi desu.
          </Text>
          <Text style={styles.exampleText}>
            → Dibandingkan kamar saya, kamar dia lebih luas.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            私は犬より、猫のほうが好きです。
          </Text>
          <Text style={styles.exampleText}>
            Watashi wa inu yori, neko no hou ga suki desu.
          </Text>
          <Text style={styles.exampleText}>
            → Dibandingkan anjing, saya lebih suka kucing.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            田舎に住むより都会に住むほうが便利です。
          </Text>
          <Text style={styles.exampleText}>
            Inaka ni sumu yori tokai ni sumu hou ga benri desu.
          </Text>
          <Text style={styles.exampleText}>
            → Dibandingkan tinggal di desa, tinggal di kota lebih nyaman.
          </Text>
        </View>
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
    marginBottom: 16,
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
  },
  table: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
    alignItems: "center",
  },
  headerRow: {
    backgroundColor: "#F7A6A6",
  },
  headerCell: {
    fontWeight: "bold",
    color: "white",
  },
  rowEven: {
    backgroundColor: "#eaf1ff",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 2,
  },
  examples: {
    marginBottom: 40,
  },
  exampleBox: {
    backgroundColor: "#ffffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 2,
    color: "#333",
  },
});