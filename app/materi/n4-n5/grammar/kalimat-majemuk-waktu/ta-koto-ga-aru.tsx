import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TaKotoGaAru() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～たことがある</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Pola 「～たことがある」 digunakan untuk menyatakan pengalaman di masa lalu
        dengan arti “pernah”. Dalam percakapan formal digunakan bentuk
        「～たことがあります」, sedangkan dalam percakapan non-formal
        digunakan 「～たことがある」. Bentuk negatifnya adalah
        「～たことがありません / ない」, dan bentuk tanya
        「～たことがありますか」.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata kerja bentuk 「た」 + ことがある / あります
      </Text>

      {/* Perhatian */}
      <Text style={styles.subTitle}>Hal yang Harus Diperhatikan</Text>

      <Text style={styles.caption}>
        1. Tidak dapat digunakan untuk masa lalu yang dekat.
      </Text>
      <Text style={styles.caption}>✖ Watashi wa senshuu Amerika e itta koto ga aru.</Text>
      <Text style={styles.caption}>○ Watashi wa senshuu Amerika e ikimashita.</Text>

      <Text style={styles.caption}>
        2. Tidak dapat digunakan untuk pengalaman yang sering terjadi, karena
        「～たことがある」 hanya dipakai untuk pengalaman yang jarang.
      </Text>

      {/* Tabel Kata Keterangan */}
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Jepang</Text>
          <Text style={[styles.cell, styles.headerCell]}>Romaji</Text>
          <Text style={[styles.cell, styles.headerCell]}>Arti</Text>
        </View>

        {[
          ["いつも", "itsumo", "selalu"],
          ["よく", "yoku", "sering"],
          ["なんども", "nandomo", "berkali-kali"],
          ["ときどき", "tokidoki", "kadang-kadang"],
          ["たまに", "tamani", "kadang-kadang"],
          ["毎日", "mainichi", "setiap hari"],
          ["毎週", "maishuu", "setiap minggu"],
          ["毎月", "maitsuki", "setiap bulan"],
        ].map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index % 2 === 0 ? styles.rowEven : styles.rowOdd,
            ]}
          >
            <Text style={styles.cell}>{item[0]}</Text>
            <Text style={styles.cell}>{item[1]}</Text>
            <Text style={styles.cell}>{item[2]}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.caption}>
        3. Tidak dapat digunakan dengan kata yang menunjukkan waktu spesifik.
      </Text>
      <Text style={styles.caption}>
        ✖ 10-nen mae no san-gatsu youka ni furansu ni itta koto ga aru.
      </Text>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>姉は芸能人に会ったことがあります。</Text>
          <Text style={styles.exampleText}>
            Ane wa geinoujin ni atta koto ga arimasu.
          </Text>
          <Text style={styles.exampleText}>
            → Kakak perempuan pernah bertemu artis.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            イギリスに留学したことがありますか。
          </Text>
          <Text style={styles.exampleText}>
            Igirisu ni ryuugaku shita koto ga arimasuka?
          </Text>
          <Text style={styles.exampleText}>
            → Apakah Anda pernah belajar di Inggris?
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            私は寿司を食べたことがありません。
          </Text>
          <Text style={styles.exampleText}>
            Watashi wa sushi wo tabeta koto ga arimasen.
          </Text>
          <Text style={styles.exampleText}>
            → Saya tidak pernah makan sushi.
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
