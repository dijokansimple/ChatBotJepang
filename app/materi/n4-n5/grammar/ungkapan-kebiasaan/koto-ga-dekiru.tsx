import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KotoGaDekiru() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>～ことができる / ～ことができます</Text>

      {/* Penjelasan */}
      <Text style={styles.subTitle}>Fungsi</Text>
      <Text style={styles.caption}>
        「～ことができる」 digunakan untuk menyatakan kemampuan atau kebisaan, yang
        dalam bahasa Indonesia artinya "bisa". Pola ini ditempatkan setelah kata kerja
        bentuk kamus.
      </Text>
      <Text style={styles.caption}>
        Dalam percakapan formal, gunakan 「ことができます」, sedangkan untuk non-formal,
        bisa menggunakan 「ことができる」.
      </Text>

      {/* Catatan penting */}
      <Text style={styles.subTitle}>Catatan Penting</Text>
      <Text style={styles.caption}>
        - Tidak semua kata kerja memiliki bentuk potensial, misalnya kata kerja intransitif
          seperti ふる (furu – turun), いる / ある (ada), くずれる (kuzureru – hancur), dll.
      </Text>
      <Text style={styles.caption}>
        - Pola ini digunakan untuk menyatakan kemampuan positif, bukan untuk hal yang buruk.
      </Text>

      {/* Pola Kalimat */}
      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>Kata kerja bentuk kamus + ことができる / ことができます</Text>
        <Text style={styles.exampleText}>Kata kerja suru + suru dihilangkan + dekiru / dekimasu</Text>
      </View>

      {/* Contoh Kata Kerja */}
      <Text style={styles.subTitle}>Contoh Kata Kerja Bentuk Kamus</Text>
      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>Kelompok 1: u, ku, su, tsu, nu, bu, mu, gu, ru</Text>
        <Text style={styles.exampleText}>Kau, Aruku, Nokosu, Matsu, Shinu, Yobu, Sumu, Oyogu, Hashiru</Text>
        <Text style={styles.exampleText}>Kelompok 2: eru & iru → Kaeru, Miru</Text>
        <Text style={styles.exampleText}>Kelompok 3 / tidak beraturan: suru → Unten suru, kuru → Kuru</Text>
      </View>

      {/* Contoh Kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <View style={styles.examples}>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>ここで様々な外国語を学ぶことができます。</Text>
          <Text style={styles.exampleText}>Koko de sama-zama na gaikoku-go wo manabu koto ga dekimasu.</Text>
          <Text style={styles.exampleText}>→ Di sini bisa belajar berbagai bahasa asing.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>彼は5年間くらいドイツに住んでいたから、ドイツ語で話すことができます。</Text>
          <Text style={styles.exampleText}>Kare wa gonen-kan kurai Doitsu ni sunde ita kara, Doitsu-go de hanasu koto ga dekimasu.</Text>
          <Text style={styles.exampleText}>→ Karena dia telah tinggal di Jerman selama sekitar 5 tahun, dia bisa berbicara bahasa Jerman.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>学生証があれば、この部屋のパソコンを使うことができます。</Text>
          <Text style={styles.exampleText}>Gakuseisho ga areba, kono heya no pasokon wo tsukau koto ga dekimasu.</Text>
          <Text style={styles.exampleText}>→ Jika ada kartu pelajar, bisa menggunakan komputer di ruangan ini.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>インターネットがないから、メールを送ることができません。</Text>
          <Text style={styles.exampleText}>Intaanetto ga nai kara, meeru wo okuru koto ga dekimasen.</Text>
          <Text style={styles.exampleText}>→ Karena tidak ada internet, tidak bisa mengirim email.</Text>
        </View>

        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>その資格があれば、日本で働くことができる。</Text>
          <Text style={styles.exampleText}>Sono shikaku ga areba, Nihon de hataraku koto ga dekiru.</Text>
          <Text style={styles.exampleText}>→ Jika memiliki kualifikasi itu, bisa bekerja di Jepang.</Text>
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
});
