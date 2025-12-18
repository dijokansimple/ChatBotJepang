import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TeIru() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>ている / ています (Te Iru / Te Imasu)</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Pola 「ている」 atau 「ています」 digunakan untuk menyatakan kegiatan yang sedang berlangsung, keadaan yang sedang terjadi, atau hasil dari tindakan yang masih berlanjut.
      </Text>
      <Text style={styles.caption}>
        Dalam percakapan formal: 「te imasu」 / 「te imasuka」 (tanya)  
        Dalam percakapan non-formal: 「te iru」 / 「teru」 (biasa), 「te iru?」 / 「teru?」 (tanya)
      </Text>

      {/* Makna dalam Bahasa Indonesia */}
      <Text style={styles.subTitle}>Padanan Makna</Text>
      <Text style={styles.caption}>• Sedang melakukan sesuatu: Menunjukkan kegiatan yang sedang dilakukan.</Text>
      <Text style={styles.caption}>• Berada dalam suatu keadaan: Menunjukkan keadaan atau kondisi yang sedang berlangsung.</Text>
      <Text style={styles.caption}>• Sudah melakukan sesuatu dan hasilnya masih berlanjut: Tindakan telah selesai tetapi hasilnya masih terlihat.</Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>• Biasa: kata kerja bentuk te + iru / imasu</Text>
      <Text style={styles.caption}>• Penjelas kata benda: kata kerja bentuk te + iru + kata benda + keterangan</Text>

      {/* Perubahan Kata Kerja */}
      <Text style={styles.subTitle}>Perubahan Kata Kerja Menjadi Bentuk Te</Text>
      <View style={styles.table}>
        <Text style={styles.caption}>Kelompok 1 (u, ku, su, tsu, nu, bu, mu, gu, ru)</Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>tetsudau → tetsudatte (membantu)</Text>
          <Text style={styles.exampleText}>tsuku → tsuite (tiba)</Text>
          <Text style={styles.exampleText}>sagasu → sagashite (mencari)</Text>
          <Text style={styles.exampleText}>matsu → matte (menunggu)</Text>
          <Text style={styles.exampleText}>shinu → shinde (mati)</Text>
          <Text style={styles.exampleText}>hakobu → hakonde (membawa)</Text>
          <Text style={styles.exampleText}>kamu → kande (menggigit)</Text>
          <Text style={styles.exampleText}>nugu → nuide (melepas)</Text>
          <Text style={styles.exampleText}>nokoru → nokotte (tersisa)</Text>
          <Text style={styles.exampleText}>*iku → itte (pergi)</Text>
        </View>

        <Text style={styles.caption}>Kelompok 2 (eru / iru)</Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>tomeru → tomete (memberhentikan)</Text>
          <Text style={styles.exampleText}>ireru → irete (memasukkan)</Text>
        </View>

        <Text style={styles.caption}>Kelompok 3 / tidak beraturan (suru, kuru)</Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>suru → shite (berpartisipasi) </Text>
          <Text style={styles.exampleText}>kuru → kite (datang)</Text>
        </View>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>山田さんは今田中さんと電話で話しています。</Text>
          <Text style={styles.exampleText}>Yamada san wa ima Tanaka-san to denwa de hanashite imasu.</Text>
          <Text style={styles.exampleText}>→ Yamada sekarang sedang berbicara dengan Tanaka di telepon.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>今、私は友達と一緒にレストランで食べています。</Text>
          <Text style={styles.exampleText}>Ima, watashi wa tomodachi to isshoni resutoran de tabete imasu.</Text>
          <Text style={styles.exampleText}>→ Sekarang, saya sedang makan di restoran bersama teman.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>今は家で勉強しています。</Text>
          <Text style={styles.exampleText}>Ima wa uchi de benkyou shite imasu.</Text>
          <Text style={styles.exampleText}>→ Sekarang (saya) sedang belajar di rumah.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>彼女はめがねをかけています。</Text>
          <Text style={styles.exampleText}>Kanojo wa megane wo kakete imasu.</Text>
          <Text style={styles.exampleText}>→ Dia (perempuan) sedang memakai kacamata.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>あそこでコーヒーを飲んでいる人は田中さんですか。</Text>
          <Text style={styles.exampleText}>Asoko de koohii wo nonde iru hito wa Tanaka-san desuka?</Text>
          <Text style={styles.exampleText}>→ Apakah orang yang sedang minum kopi di sana adalah Tanaka?</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>あの黒い服を着ている人は誰ですか。</Text>
          <Text style={styles.exampleText}>Ano kuroi fuku wo kite iru hito wa dare desuka?</Text>
          <Text style={styles.exampleText}>→ Siapa orang yang sedang memakai baju hitam itu?</Text>
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
  examples: {
    marginBottom: 40,
  },
  exampleBox: {
    backgroundColor: "#ffffff",
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
