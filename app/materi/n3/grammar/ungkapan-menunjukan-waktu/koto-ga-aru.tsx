import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KotoGaAru() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「ことがある」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.subBoxBlue}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
      </View>
      <Text style={styles.paragraph}>
        Kata kerja bentuk kamus atau bentuk negatif (nai) + 「ことがある」 /
        「こともある」
      </Text>

      {/* Penggunaan */}
      <View style={styles.subBoxGreen}>
        <Text style={styles.subTitle}>Penggunaan 「ことがある」</Text>
      </View>

      <Text style={styles.paragraph}>
        Tata bahasa 「ことがある」 atau yang juga dapat diungkapkan dengan
        「こともある」 merupakan salah satu tata bahasa dalam JLPT N3 yang
        digunakan untuk menyatakan suatu hal yang tidak selalu terjadi atau
        dilakukan, melainkan jarang atau kadang-kadang terjadi atau dilakukan.
        Dalam bahasa Indonesia, pola ini dapat diartikan sebagai “ada waktu ketika
        terjadi atau melakukan suatu hal tertentu”, atau secara sederhana berarti
        “kadang-kadang”.
      </Text>

      <Text style={styles.paragraph}>
        Perbedaan antara 「ことがある」 dan 「こともある」 terletak pada konteks
        penjelasannya. 「ことがある」 digunakan tanpa menambahkan keterangan
        seperti “biasanya”, sedangkan 「こともある」 cenderung digunakan dalam
        kalimat yang mengandung makna “biasanya …, tetapi kadang-kadang …”.
        Oleh karena itu, 「こともある」 sering digunakan bersama kata seperti
        「たまに」 (sesekali) atau 「今でも」 (bahkan sekarang pun).
      </Text>

      <Text style={styles.paragraph}>
        Perlu diperhatikan bahwa pola ini berbeda dengan tata bahasa
        「〜たことがある」 yang menggunakan kata kerja bentuk lampau dan
        menyatakan pengalaman, yang dalam bahasa Indonesia berarti “pernah”.
      </Text>

      {/* Contoh Kalimat */}
      <View style={styles.subBoxOrange}>
        <Text style={styles.subTitle}>Contoh Kalimat</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kono kousoku douro wa juutai suru koto ga aru.
        </Text>
        <Text style={styles.jp}>
          この高速道路は渋滞することがある。
        </Text>
        <Text style={styles.id}>
          → Jalan tol ini kadang-kadang macet.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Atarashii apaato de wa, mizu ga denai koto ga aru.
        </Text>
        <Text style={styles.jp}>
          新しいアパートでは、水が出ないことがある。
        </Text>
        <Text style={styles.id}>
          → Di apartemen baru, kadang-kadang air tidak keluar.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Koko ra hen de wa, hen na koe ga kikoeru koto ga aru.
        </Text>
        <Text style={styles.jp}>
          この辺では、変な声が聞こえることがある。
        </Text>
        <Text style={styles.id}>
          → Di sekitar sini, kadang-kadang terdengar suara aneh.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Ane wa asanebou suru to, asagohan wo tabenai koto ga aru.
        </Text>
        <Text style={styles.jp}>
          姉は朝寝坊すると、朝ごはんを食べないことがある。
        </Text>
        <Text style={styles.id}>
          → Kakak perempuan kalau kesiangan, kadang-kadang tidak sarapan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kare wa itsumo hayaku meeru wo henshin suru kedo,
          osokunatte shimau koto ga aru.
        </Text>
        <Text style={styles.jp}>
          彼はいつも早くメールを返信するけど、遅くなってしまうことがある。
        </Text>
        <Text style={styles.id}>
          → Dia biasanya membalas email dengan cepat, tetapi kadang-kadang
          balasannya terlambat.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kousoku douro de jiko ga attari, kuruma ga ookattari suru to,
          shachou demo chikoku suru koto ga aru.
        </Text>
        <Text style={styles.jp}>
          高速道路で事故があったり、車が多かったりすると、
          社長でも遅刻することがある。
        </Text>
        <Text style={styles.id}>
          → Jika terjadi kecelakaan atau kendaraan banyak di jalan tol,
          bahkan direktur perusahaan pun kadang-kadang terlambat.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f7ff",
  },

  titleBox: {
    backgroundColor: "#1e3a8a",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  titleText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  subBoxBlue: {
    backgroundColor: "#bfdbfe",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  subBoxGreen: {
    backgroundColor: "#bbf7d0",
    padding: 8,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 8,
  },
  subBoxOrange: {
    backgroundColor: "#fed7aa",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 8,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },

  paragraph: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
    marginBottom: 10,
    textAlign: "justify",
  },

  exampleBox: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#60a5fa",
  },

  jp: {
    fontSize: 15,
    color: "#1f2937",
  },
  id: {
    fontSize: 15,
    color: "#374151",
    marginTop: 6,
  },
});
