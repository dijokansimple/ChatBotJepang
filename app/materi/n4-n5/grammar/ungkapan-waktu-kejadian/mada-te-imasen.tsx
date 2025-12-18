import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MadaTeImasen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>まだ～ていません (mada ~te imasen)</Text>

      {/* Penjelasan */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        「まだ～ていません」 digunakan untuk menyatakan “masih belum melakukan”.
        Pola ini mengungkapkan bahwa suatu tindakan atau keadaan belum selesai atau terjadi sampai saat ini.
        Bentuk kasual: 「まだ～ていない」 atau 「まだ～てない」.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        まだ + kata kerja bentuk て + いません / いない
      </Text>

      {/* Perubahan Kata Kerja menjadi Bentuk Te */}
      <Text style={styles.subTitle}>Perubahan Kata Kerja Menjadi Bentuk Te</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>Kelompok 1 (u, ku, su, tsu, nu, bu, mu, gu, ru)</Text>
        <Text style={styles.exampleText}>warau → waratte, kiku → kiite, kaesu → kaeshite</Text>
        <Text style={styles.exampleText}>tatsu → tatte, shinu → shinde, tobu → tonde, nomu → nonde</Text>
        <Text style={styles.exampleText}>kogu → koide, okuru → okutte, iku → itte (khusus)</Text>

        <Text style={styles.exampleText}>Kelompok 2 (eru, iru)</Text>
        <Text style={styles.exampleText}>makeru → makete, okiru → okite</Text>

        <Text style={styles.exampleText}>Kelompok 3 / tidak beraturan</Text>
        <Text style={styles.exampleText}>suru → shite, kuru → kite</Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>私はまだ朝ごはんを食べていません。</Text>
        <Text style={styles.exampleText}>Watashi wa mada asagohan wo tabete imasen.</Text>
        <Text style={styles.exampleText}>→ Saya masih belum sarapan.</Text>

        <Text style={styles.exampleText}>ひらがなは大丈夫ですけど、カタカナはまだ覚えていません。</Text>
        <Text style={styles.exampleText}>Hiragana wa daijoubu desukedo, katakana wa mada oboete imasen.</Text>
        <Text style={styles.exampleText}>→ Hiragana tidak masalah, tetapi masih belum ingat Katakana.</Text>

        <Text style={styles.exampleText}>あの映画をまだ見ていません。</Text>
        <Text style={styles.exampleText}>Ano eiga wo mada mite imasen.</Text>
        <Text style={styles.exampleText}>→ Masih belum menonton film itu.</Text>

        <Text style={styles.exampleText}>そのこと、まだ親に伝えていません。</Text>
        <Text style={styles.exampleText}>Sono koto, mada oya ni tsutaete imasen.</Text>
        <Text style={styles.exampleText}>→ Hal itu masih belum disampaikan kepada orang tua.</Text>

        <Text style={styles.exampleText}>まだデータを確認していません。</Text>
        <Text style={styles.exampleText}>Mada deeta wo kakunin shite imasen.</Text>
        <Text style={styles.exampleText}>→ Masih belum memeriksa data.</Text>

        <Text style={styles.exampleText}>結局どこの大学に行くのかはまだ決まっていません。</Text>
        <Text style={styles.exampleText}>Kekkyoku doko no daigaku ni iku no ka wa mada kimatte imasen.</Text>
        <Text style={styles.exampleText}>→ Masih belum ditentukan universitas mana yang akan dituju.</Text>

        <Text style={styles.exampleText}>もう9時なのに、彼らはまだ来ていません。</Text>
        <Text style={styles.exampleText}>Mou ku-ji nanoni, karera wa mada kite imasen.</Text>
        <Text style={styles.exampleText}>→ Padahal sudah jam 9, tetapi mereka masih belum datang.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#0B3D91",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#0B3D91",
  },
  caption: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
  },
  exampleBox: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 4,
    color: "#333",
  },
});
