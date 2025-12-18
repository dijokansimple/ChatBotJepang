import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiKuNaru() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～に/く なる (ni/ku naru)</Text>

      {/* Penjelasan */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        「～に/くなる」 digunakan untuk menyatakan perubahan suatu keadaan atau menjadi sesuatu.
        Digunakan pada kata sifat, kata benda, atau kata kerja. 
        Dalam percakapan formal: 「に/くなります」, non-formal: 「に/くなる」.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        - Kata sifat i + く + naru <br/>
        - Kata sifat na + に + naru <br/>
        - Kata benda + に + naru <br/>
        - Kata kerja bentuk nai/tai + ku + naru
      </Text>

      {/* Contoh Kata Sifat */}
      <Text style={styles.subTitle}>Contoh Kata Sifat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>Kata sifat i: atsui → atsuku naru (menjadi panas)</Text>
        <Text style={styles.exampleText}>samui → samuku naru (menjadi dingin)</Text>
        <Text style={styles.exampleText}>Kata sifat na: yuumei → yuumei ni naru (menjadi terkenal)</Text>
        <Text style={styles.exampleText}>rippa → rippa ni naru (menjadi megah)</Text>
      </View>

      {/* Contoh Kalimat Kata Sifat */}
      <Text style={styles.subTitle}>Contoh Kalimat (Kata Sifat)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>窓を開けてから、部屋が涼しくなりました。</Text>
        <Text style={styles.exampleText}>Mado wo akete kara, heya ga suzushiku narimashita.</Text>
        <Text style={styles.exampleText}>→ Setelah membuka jendela, ruangan menjadi sejuk.</Text>

        <Text style={styles.exampleText}>電気をつけたら、部屋が明るくなる。</Text>
        <Text style={styles.exampleText}>Denki wo tsuketara, heya ga akaruku naru.</Text>
        <Text style={styles.exampleText}>→ Jika menyalakan lampu, ruangan akan menjadi terang.</Text>
      </View>

      {/* Contoh Kalimat Kata Kerja */}
      <Text style={styles.subTitle}>Contoh Kalimat (Kata Kerja)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>雪が降ってしまったから、遊びに行かなくなった。</Text>
        <Text style={styles.exampleText}>Yuki ga futte shimatta kara, asobi ni ikenaku natta.</Text>
        <Text style={styles.exampleText}>→ Karena turun salju, tidak bisa pergi bermain.</Text>

        <Text style={styles.exampleText}>たくさん旅行したから、お金がなくなった。</Text>
        <Text style={styles.exampleText}>Takusan ryokou shita kara, okane ga naku natta.</Text>
        <Text style={styles.exampleText}>→ Karena banyak berwisata, uang menjadi habis.</Text>

        <Text style={styles.exampleText}>それについて、もっと知りたくなった。</Text>
        <Text style={styles.exampleText}>Sore ni tsuite, motto shiritaku natta.</Text>
        <Text style={styles.exampleText}>→ Mengenai hal itu, menjadi lebih ingin tahu.</Text>
      </View>

      {/* Contoh Kalimat Kata Benda */}
      <Text style={styles.subTitle}>Contoh Kalimat (Kata Benda)</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>今年、20歳になります。</Text>
        <Text style={styles.exampleText}>Kotoshi, hatachi ni narimasu.</Text>
        <Text style={styles.exampleText}>→ Tahun ini, akan berusia 20 tahun.</Text>

        <Text style={styles.exampleText}>私は医者になりたいです。</Text>
        <Text style={styles.exampleText}>Watashi wa isha ni naritai desu.</Text>
        <Text style={styles.exampleText}>→ Saya ingin menjadi dokter.</Text>

        <Text style={styles.exampleText}>もう11時になりました。</Text>
        <Text style={styles.exampleText}>Mou juuichi ji ni narimashita.</Text>
        <Text style={styles.exampleText}>→ Sudah jam 11.</Text>
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
