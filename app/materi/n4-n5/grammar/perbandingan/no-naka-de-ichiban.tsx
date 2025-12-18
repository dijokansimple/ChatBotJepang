import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NoNakaDeIchiban() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>の中で一番</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Pola 「の中で一番」 digunakan untuk menyatakan makna
        “di antara …, yang paling …”. Pola ini dipakai untuk
        membandingkan tiga hal atau lebih.
      </Text>
      <Text style={styles.caption}>
        Kata 「中（なか）」 berarti “di dalam / di antara”, sedangkan
        「一番（いちばん）」 berarti “nomor satu” atau “yang paling”.
        Selain 「一番」, dapat juga menggunakan sinonim 「最も（もっとも）」.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kata benda 1 + の中で + kata benda 2 + が / は + 一番 + penjelas
        </Text>
        <Text style={styles.exampleText}>
          Kata benda 2 + は + kata benda 1 + の中で + 一番 + penjelas
        </Text>
      </View>

      {/* Catatan Penting */}
      <Text style={styles.subTitle}>Penting untuk Diingat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          • Jika hanya membandingkan dua hal, gunakan pola 「A は B より～です」
        </Text>
        <Text style={styles.exampleText}>
          • 「の中で一番」 digunakan untuk perbandingan tiga atau lebih
        </Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            日本料理の中で、お寿司が一番好きです。
          </Text>
          <Text style={styles.exampleText}>
            Nihon ryouri no naka de, osushi ga ichiban suki desu.
          </Text>
          <Text style={styles.exampleText}>
            → Di antara masakan Jepang, saya paling suka sushi.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            果物の中で、バナナが一番よく食べます。
          </Text>
          <Text style={styles.exampleText}>
            Kudamono no naka de, banana ga ichiban yoku tabemasu.
          </Text>
          <Text style={styles.exampleText}>
            → Di antara buah-buahan, saya paling sering makan pisang.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            洋食の中で一番好きなものはパスタです。
          </Text>
          <Text style={styles.exampleText}>
            Youshoku no naka de ichiban suki na mono wa pasuta desu.
          </Text>
          <Text style={styles.exampleText}>
            → Di antara masakan barat, yang paling saya suka adalah pasta.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            兄は家族の中で一番背が高いです。
          </Text>
          <Text style={styles.exampleText}>
            Ani wa kazoku no naka de ichiban se ga takai desu.
          </Text>
          <Text style={styles.exampleText}>
            → Kakak laki-laki paling tinggi di dalam keluarga.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            ブランド品の中で、これが一番安い。
          </Text>
          <Text style={styles.exampleText}>
            Burando hin no naka de, kore ga ichiban yasui.
          </Text>
          <Text style={styles.exampleText}>
            → Di antara barang bermerek, ini yang paling murah.
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
