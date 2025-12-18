import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MadaTeImasen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>まだ～ていません</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Tata bahasa 「まだ～ていません」 digunakan untuk menyatakan
        “masih belum melakukan”. Pola ini menunjukkan bahwa suatu tindakan
        atau keadaan belum selesai atau belum terjadi sampai saat ini.
      </Text>
      <Text style={styles.caption}>
        Dalam bentuk kasual, pola ini dapat diungkapkan dengan
        「まだ～ていない」 atau bentuk singkat 「まだ～てない」.
        Kata 「まだ」 dapat diletakkan sebelum atau sesudah objek kalimat
        dan umum digunakan baik dalam percakapan maupun tulisan.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        まだ + kata kerja (bentuk て) + いません / いない
      </Text>

      {/* Perubahan Kata Kerja */}
      <Text style={styles.subTitle}>Perubahan Kata Kerja ke Bentuk 「て」</Text>

      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Kelompok</Text>
          <Text style={[styles.cell, styles.headerCell]}>Perubahan</Text>
          <Text style={[styles.cell, styles.headerCell]}>Contoh</Text>
        </View>

        {[
          ["U / Tsu / Ru", "～って", "送る → 送って"],
          ["Ku", "～いて", "聞く → 聞いて"],
          ["Su", "～して", "返す → 返して"],
          ["Mu / Bu / Nu", "～んで", "飲む → 飲んで"],
          ["Gu", "～いで", "漕ぐ → 漕いで"],
          ["Iku", "～って", "行く → 行って"],
          ["Eru / Iru", "～て", "負ける → 負けて"],
          ["Suru", "～して", "説明する → 説明して"],
          ["Kuru", "～て", "来る → 来て"],
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

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            私はまだ朝ごはんを食べていません。
          </Text>
          <Text style={styles.exampleText}>
            Watashi wa mada asagohan wo tabete imasen.
          </Text>
          <Text style={styles.exampleText}>
            → Saya masih belum sarapan.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            ひらがなは大丈夫ですけど、カタカナはまだ覚えていません。
          </Text>
          <Text style={styles.exampleText}>
            Hiragana wa daijoubu desukedo, katakana wa mada oboete imasen.
          </Text>
          <Text style={styles.exampleText}>
            → Hiragana tidak masalah, tetapi masih belum ingat Katakana.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            あの映画をまだ見ていません。
          </Text>
          <Text style={styles.exampleText}>
            Ano eiga wo mada mite imasen.
          </Text>
          <Text style={styles.exampleText}>
            → Saya masih belum menonton film itu.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            そのこと、まだ親に伝えていません。
          </Text>
          <Text style={styles.exampleText}>
            Sono koto, mada oya ni tsutaete imasen.
          </Text>
          <Text style={styles.exampleText}>
            → Hal itu masih belum saya sampaikan kepada orang tua.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            まだデータを確認していません。
          </Text>
          <Text style={styles.exampleText}>
            Mada deeta wo kakunin shite imasen.
          </Text>
          <Text style={styles.exampleText}>
            → Saya masih belum memastikan data.
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