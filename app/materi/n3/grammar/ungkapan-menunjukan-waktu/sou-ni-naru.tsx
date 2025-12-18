import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SouNiNaru() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「〜そうになる」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.subBoxBlue}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
      </View>
      <Text style={styles.paragraph}>
        Kata kerja bentuk masu (tanpa 「ます」) + 「そうになる」
      </Text>

      {/* Penggunaan */}
      <View style={styles.subBoxGreen}>
        <Text style={styles.subTitle}>Penggunaan 「〜そうになる」</Text>
      </View>

      <Text style={styles.paragraph}>
        Pola 「そうになる」 dalam bahasa Jepang digunakan untuk menyatakan
        suatu hal yang dirasa akan terjadi, tetapi pada akhirnya tidak benar-benar
        terjadi. Pola ini juga dapat digunakan untuk menyatakan suatu keadaan
        yang kemungkinan besar akan terjadi dalam waktu dekat, namun ternyata
        tidak sampai terwujud.
      </Text>

      <Text style={styles.paragraph}>
        Pada intinya, tata bahasa 「そうになる」 berfungsi untuk menyatakan
        keadaan “hampir terjadi”. Oleh karena itu, dalam bahasa Indonesia,
        pola ini dapat diartikan sebagai “hampir”. Pola ini sering digunakan
        untuk menggambarkan situasi yang membuat pembicara merasa nyaris
        melakukan sesuatu atau mengalami suatu kejadian tertentu.
      </Text>

      <Text style={styles.paragraph}>
        Apabila ingin menyatakan kejadian “hampir” tersebut dalam bentuk lampau,
        maka pola yang digunakan adalah 「そうになった」. Penggunaan bentuk
        lampau ini menunjukkan bahwa peristiwa tersebut benar-benar hampir
        terjadi pada waktu tertentu di masa lalu.
      </Text>

      {/* Contoh Kalimat */}
      <View style={styles.subBoxOrange}>
        <Text style={styles.subTitle}>Contoh Kalimat</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Saikin, ie de yoku korobisou ni naru.
        </Text>
        <Text style={styles.jp}>
          最近、家でよく転びそうになる。
        </Text>
        <Text style={styles.id}>
          → Akhir-akhir ini, saya sering hampir jatuh di rumah.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Sakuya, takai basho kara ochisou ni naru yume wo mita.
        </Text>
        <Text style={styles.jp}>
          昨夜、高い場所から落ちそうになる夢を見た。
        </Text>
        <Text style={styles.id}>
          → Tadi malam, saya bermimpi hampir jatuh dari tempat yang tinggi.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Ano ryouri wo tabetara, hakisou ni natta.
        </Text>
        <Text style={styles.jp}>
          あの料理を食べたら、吐きそうになった。
        </Text>
        <Text style={styles.id}>
          → Saya hampir muntah setelah memakan makanan itu.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kinou, ano nisemono no kaban wo kaisou ni natta.
        </Text>
        <Text style={styles.jp}>
          昨日、あの偽物の鞄を買いそうになった。
        </Text>
        <Text style={styles.id}>
          → Kemarin, saya hampir membeli tas palsu itu.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kare wa ano tachiiri kinshi no basho ni hairisou ni natta.
        </Text>
        <Text style={styles.jp}>
          彼はあの立ち入り禁止の場所に入りそうになった。
        </Text>
        <Text style={styles.id}>
          → Dia hampir masuk ke tempat yang dilarang masuk.
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
    backgroundColor: "#7c2d12",
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
    backgroundColor: "#bae6fd",
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
    borderLeftColor: "#fb923c",
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
