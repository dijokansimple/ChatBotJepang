import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TaKotoGaAru() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>たことがある / たことがあります (Ta Koto ga Aru)</Text>

      {/* Fungsi */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        Pola 「たことがある」 digunakan untuk menyatakan pengalaman atau sesuatu yang "pernah" terjadi.  
        Formal: 「たことがあります」  
        Non-formal: 「たことがある」  
        Bentuk negatif: 「たことがありません / ない」  
        Bentuk tanya: 「たことがありますか / ある？」
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>kata kerja bentuk ta + ことがある / あります</Text>

      {/* Hal yang Perlu Diperhatikan */}
      <Text style={styles.subTitle}>Hal yang Harus Diperhatikan</Text>
      <Text style={styles.caption}>• Tidak digunakan untuk pengalaman masa lalu yang dekat.</Text>
      <Text style={styles.caption}>• Tidak digunakan untuk pengalaman yang sering terjadi (contoh: selalu, sering, tiap hari/minggu/bulan).</Text>
      <Text style={styles.caption}>• Tidak digunakan jika waktu pengalaman diketahui secara spesifik.</Text>

      {/* Kata Keterangan yang Tidak Bisa Digunakan */}
      <Text style={styles.subTitle}>Kata Keterangan yang Tidak Bisa Digunakan</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>いつも (itsumo) - selalu</Text>
        <Text style={styles.exampleText}>よく (yoku) - sering</Text>
        <Text style={styles.exampleText}>なんども (nando mo) - berkali-kali</Text>
        <Text style={styles.exampleText}>ときどき (tokidoki) - kadang-kadang</Text>
        <Text style={styles.exampleText}>たまに (tamani) - kadang-kadang</Text>
        <Text style={styles.exampleText}>毎日 (mainichi) - setiap hari</Text>
        <Text style={styles.exampleText}>毎週 (maishuu) - setiap minggu</Text>
        <Text style={styles.exampleText}>毎月 (maitsuki) - setiap bulan</Text>
      </View>

      {/* Perubahan Kata Kerja Menjadi Bentuk Ta */}
      <Text style={styles.subTitle}>Perubahan Kata Kerja Menjadi Bentuk Ta</Text>
      
      <Text style={styles.caption}>Kelompok 1 (u, ku, su, tsu, nu, bu, mu, gu, ru)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>morau → moratta (menerima)</Text>
        <Text style={styles.exampleText}>kiku → kiita (mendengar)</Text>
        <Text style={styles.exampleText}>kurasu → kurashita (tinggal)</Text>
        <Text style={styles.exampleText}>katsu → katta (menang)</Text>
        <Text style={styles.exampleText}>shinu → shinda (mati)</Text>
        <Text style={styles.exampleText}>yobu → yonda (memanggil)</Text>
        <Text style={styles.exampleText}>yomu → yonda (membaca)</Text>
        <Text style={styles.exampleText}>oyogu → oyoida (berenang)</Text>
        <Text style={styles.exampleText}>tsukuru → tsukutta (membuat)</Text>
        <Text style={styles.exampleText}>*iku → itta (pergi, pengecualian)</Text>
      </View>

      <Text style={styles.caption}>Kelompok 2 (eru / iru)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>miseru → miseta (memperlihatkan)</Text>
        <Text style={styles.exampleText}>miru → mita (melihat)</Text>
      </View>

      <Text style={styles.caption}>Kelompok 3 / Tidak Beraturan (suru, kuru)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>benkyou suru → benkyou shita (belajar)</Text>
        <Text style={styles.exampleText}>kuru → kita (datang)</Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>姉は芸能人に会ったことがあります。</Text>
          <Text style={styles.exampleText}>Ane wa geinoujin ni atta koto ga arimasu.</Text>
          <Text style={styles.exampleText}>→ Kakak perempuan pernah bertemu dengan talenta.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>あの人をテレビで見たことがあります。</Text>
          <Text style={styles.exampleText}>Ano hito wo terebi de mita koto ga arimasu.</Text>
          <Text style={styles.exampleText}>→ (Saya) pernah melihat orang itu di televisi.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>イギリスに留学したことがありますか。</Text>
          <Text style={styles.exampleText}>Igirisu ni ryuugaku shita koto ga arimasuka?</Text>
          <Text style={styles.exampleText}>→ Apakah (Anda) pernah belajar di Inggris?</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>「大晦日」と言うことを聞いたことがありますか。</Text>
          <Text style={styles.exampleText}>“Oomisoka” to iu kotoba wo kiita koto ga arimasuka?</Text>
          <Text style={styles.exampleText}>→ Apakah (Anda) pernah mendengar kata “Oomisoka”?</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>ボランティア活動に参加したことがありますか。</Text>
          <Text style={styles.exampleText}>Borantia katsudou ni sanka shita koto ga arimasuka?</Text>
          <Text style={styles.exampleText}>→ Apakah (Anda) pernah berpartisipasi dalam kegiatan volunteer?</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>私は寿司を食べたことがありません。</Text>
          <Text style={styles.exampleText}>Watashi wa sushi wo tabeta koto ga arimasen.</Text>
          <Text style={styles.exampleText}>→ Saya tidak pernah makan sushi.</Text>
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
  examples: {
    marginBottom: 40,
  },
});
