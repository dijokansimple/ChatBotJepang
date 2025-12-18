import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function GaArimasuGaImasu() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～があります / ～がいます</Text>

      {/* Penjelasan */}
      <Text style={styles.subTitle}>Penjelasan</Text>
      <Text style={styles.caption}>
        「～があります」 dan 「～がいます」 adalah pola kalimat dalam bahasa Jepang
        yang digunakan untuk menyatakan keberadaan sesuatu.
        Dalam bahasa Indonesia, keduanya berarti “ada”.
      </Text>
      <Text style={styles.caption}>
        Perbedaannya terletak pada jenis benda yang keberadaannya dinyatakan,
        yaitu apakah benda tersebut hidup atau tidak hidup.
      </Text>

      {/* Perbedaan */}
      <Text style={styles.subTitle}>Perbedaan ～があります dan ～がいます</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          ～があります (ga arimasu)
        </Text>
        <Text style={styles.exampleText}>
          Digunakan untuk benda mati dan tumbuhan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          ～がいます (ga imasu)
        </Text>
        <Text style={styles.exampleText}>
          Digunakan untuk makhluk hidup seperti manusia dan hewan.
        </Text>
      </View>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Keterangan tempat + に + benda mati + が + あります
        </Text>
        <Text style={styles.exampleText}>
          Keterangan tempat + に + benda hidup + が + います
        </Text>
        <Text style={styles.exampleText}>
          ---
        </Text>
        <Text style={styles.exampleText}>
          Benda mati + が + あります
        </Text>
        <Text style={styles.exampleText}>
          Benda hidup + が + います
        </Text>
      </View>

      {/* Aru & Iru */}
      <Text style={styles.subTitle}>Catatan tentang 「ある」 dan 「いる」</Text>
      <Text style={styles.caption}>
        「あります」 dan 「います」 adalah bentuk sopan (masu-form) dari kata kerja
        「ある」 dan 「いる」. Bentuk dasar ini biasa digunakan dalam percakapan kasual
        atau di tengah kalimat.
      </Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>授業がある。</Text>
        <Text style={styles.exampleText}>Jugyou ga aru.</Text>
        <Text style={styles.exampleText}>→ Ada kelas.</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>犬がいる。</Text>
        <Text style={styles.exampleText}>Inu ga iru.</Text>
        <Text style={styles.exampleText}>→ Ada anjing.</Text>
      </View>

      {/* Perubahan Bentuk */}
      <Text style={styles.subTitle}>Perubahan Bentuk</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Bentuk</Text>
          <Text style={[styles.cell, styles.headerCell]}>aru</Text>
          <Text style={[styles.cell, styles.headerCell]}>iru</Text>
        </View>

        <View style={[styles.row, styles.rowOdd]}>
          <Text style={styles.cell}>Masu</Text>
          <Text style={styles.cell}>arimasu</Text>
          <Text style={styles.cell}>imasu</Text>
        </View>

        <View style={[styles.row, styles.rowEven]}>
          <Text style={styles.cell}>Negatif</Text>
          <Text style={styles.cell}>nai / arimasen</Text>
          <Text style={styles.cell}>inai / imasen</Text>
        </View>

        <View style={[styles.row, styles.rowOdd]}>
          <Text style={styles.cell}>Lampau</Text>
          <Text style={styles.cell}>atta / arimashita</Text>
          <Text style={styles.cell}>itta / imashita</Text>
        </View>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat ～があります</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>本があります。</Text>
          <Text style={styles.exampleText}>Hon ga arimasu.</Text>
          <Text style={styles.exampleText}>→ Ada buku.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>桜の木があります。</Text>
          <Text style={styles.exampleText}>Sakura no ki ga arimasu.</Text>
          <Text style={styles.exampleText}>→ Ada pohon sakura.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            かばんの中に教科書があります。
          </Text>
          <Text style={styles.exampleText}>
            Kaban no naka ni kyoukasho ga arimasu.
          </Text>
          <Text style={styles.exampleText}>
            → Di dalam tas ada buku pelajaran.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            学校のとなりに花屋があります。
          </Text>
          <Text style={styles.exampleText}>
            Gakkou no tonari ni hanaya ga arimasu.
          </Text>
          <Text style={styles.exampleText}>
            → Di sebelah sekolah ada toko bunga.
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