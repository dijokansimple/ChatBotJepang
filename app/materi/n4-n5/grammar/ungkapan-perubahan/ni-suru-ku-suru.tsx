import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiKuSuru() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～に/く する (ni/ku suru)</Text>

      {/* Penjelasan */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        「～に/くする」 digunakan untuk menyatakan “membuat menjadi” atau “menjadikan”.
        Pola ini digunakan untuk menambahkan keterangan kata sifat dari kata kerja “suru”.
        Dalam percakapan formal: 「に/くします」, non-formal: 「に/くする」.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        - Kata sifat i + く + suru <br/>
        - Kata sifat na + に + suru
      </Text>

      {/* Contoh Kata Sifat */}
      <Text style={styles.subTitle}>Contoh Kata Sifat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>Kata sifat i: atatakai → atatakaku suru (membuat menjadi hangat)</Text>
        <Text style={styles.exampleText}>suzushii → suzushiku suru (membuat menjadi sejuk)</Text>
        <Text style={styles.exampleText}>Kata sifat na: kirei → kirei ni suru (membuat menjadi bersih/cantik)</Text>
        <Text style={styles.exampleText}>shizuka → shizuka ni suru (membuat menjadi sepi)</Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>冷房で部屋を涼しくします。</Text>
        <Text style={styles.exampleText}>Reibou de heya wo suzushiku shimasu.</Text>
        <Text style={styles.exampleText}>→ Membuat ruangan menjadi sejuk dengan pendingin.</Text>

        <Text style={styles.exampleText}>辛いものが好きだから、料理をいつも辛くする。</Text>
        <Text style={styles.exampleText}>Karai mono ga suki dakara, ryouri wo itsumo karaku suru.</Text>
        <Text style={styles.exampleText}>→ Selalu membuat masakan menjadi pedas.</Text>

        <Text style={styles.exampleText}>家の壁の色を白くしたい。</Text>
        <Text style={styles.exampleText}>Ie no kabe no iro wo shiroku shitai.</Text>
        <Text style={styles.exampleText}>→ Ingin membuat warna tembok rumah menjadi putih.</Text>

        <Text style={styles.exampleText}>砂糖を入れて、紅茶を甘くする。</Text>
        <Text style={styles.exampleText}>Satou wo irete, koucha wo amaku suru.</Text>
        <Text style={styles.exampleText}>→ Membuat teh menjadi manis dengan menambahkan gula.</Text>

        <Text style={styles.exampleText}>テレビを見るとき、部屋を明るくしましょう。</Text>
        <Text style={styles.exampleText}>Terebi wo miru toki, heya wo akaruku shimashou.</Text>
        <Text style={styles.exampleText}>→ Saat menonton TV, mari buat ruangan menjadi terang.</Text>

        <Text style={styles.exampleText}>部屋をきれいにします。</Text>
        <Text style={styles.exampleText}>Heya wo kirei ni shimasu.</Text>
        <Text style={styles.exampleText}>→ Membuat ruangan menjadi bersih.</Text>

        <Text style={styles.exampleText}>音を小さくしてください。</Text>
        <Text style={styles.exampleText}>Oto wo chiisaku shite kudasai.</Text>
        <Text style={styles.exampleText}>→ Tolong kecilkan bunyi / buat bunyi menjadi lebih kecil.</Text>
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
