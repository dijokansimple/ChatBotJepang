import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TeIruTeImasu() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～ている / ～ています</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Pola 「～ている / ～ています」 digunakan untuk menyatakan
        ungkapan “sedang melakukan”. Dalam percakapan formal, bentuk
        pernyataan menggunakan 「～ています」 dan bentuk tanya
        menggunakan 「～ていますか」. Dalam percakapan non-formal,
        digunakan 「～ている」 atau bentuk singkat 「～てる」.
      </Text>

      {/* Padanan Makna */}
      <Text style={styles.subTitle}>Padanan Makna</Text>
      <Text style={styles.caption}>Pola ini memiliki beberapa makna utama:</Text>
      <Text style={styles.caption}>• Menunjukkan kegiatan yang sedang dilakukan.</Text>
      <Text style={styles.caption}>• Menunjukkan keadaan atau kondisi yang sedang berlangsung.</Text>
      <Text style={styles.caption}>
        • Menunjukkan tindakan yang sudah dilakukan, tetapi hasilnya masih
        berlanjut.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Pola biasa: Kata kerja bentuk 「て」 + いる / います
      </Text>
      <Text style={styles.caption}>
        Pola penjelas kata benda: Kata kerja bentuk 「て」 + いる + kata benda + keterangan
      </Text>

      {/* Perubahan Kata Kerja */}
      <Text style={styles.subTitle}>Perubahan Kata Kerja ke Bentuk 「て」</Text>

      {/* Tabel */}
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Kelompok</Text>
          <Text style={[styles.cell, styles.headerCell]}>Perubahan</Text>
          <Text style={[styles.cell, styles.headerCell]}>Contoh</Text>
        </View>

        {[
          ["U / Tsu / Ru", "～って", "待つ → 待って"],
          ["Ku", "～いて", "着く → 着いて"],
          ["Su", "～して", "探す → 探して"],
          ["Mu / Bu / Nu", "～んで", "飲む → 飲んで"],
          ["Gu", "～いで", "脱ぐ → 脱いで"],
          ["Iku", "～って", "行く → 行って"],
          ["Eru / Iru", "～て", "止める → 止めて"],
          ["Suru", "～して", "勉強する → 勉強して"],
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
            山田さんは今田中さんと電話で話しています。
          </Text>
          <Text style={styles.exampleText}>
            Yamada-san wa ima Tanaka-san to denwa de hanashite imasu.
          </Text>
          <Text style={styles.exampleText}>
            → Yamada sekarang sedang berbicara dengan Tanaka di telepon.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            今、私は友達と一緒にレストランで食べています。
          </Text>
          <Text style={styles.exampleText}>
            Ima, watashi wa tomodachi to isshoni resutoran de tabete imasu.
          </Text>
          <Text style={styles.exampleText}>
            → Sekarang saya sedang makan di restoran bersama teman.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>彼女はめがねをかけています。</Text>
          <Text style={styles.exampleText}>
            Kanojo wa megane wo kakete imasu.
          </Text>
          <Text style={styles.exampleText}>
            → Dia (perempuan) sedang memakai kacamata.
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            あそこでコーヒーを飲んでいる人は田中さんですか。
          </Text>
          <Text style={styles.exampleText}>
            Asoko de koohii wo nonde iru hito wa Tanaka-san desuka?
          </Text>
          <Text style={styles.exampleText}>
            → Apakah orang yang sedang minum kopi di sana adalah Tanaka?
          </Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>
            あの黒い服を着ている人は誰ですか。
          </Text>
          <Text style={styles.exampleText}>
            Ano kuroi fuku wo kite iru hito wa dare desuka?
          </Text>
          <Text style={styles.exampleText}>
            → Siapa orang yang sedang memakai baju hitam itu?
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
