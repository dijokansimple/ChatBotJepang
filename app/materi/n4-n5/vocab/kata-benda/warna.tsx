import React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";

export default function WarnaJapanese() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Penjelasan Kosakata Warna dalam Bahasa Jepang (Iro)
      </Text>

      <Text style={styles.caption}>
        Iro (warna) dalam bahasa Jepang merupakan kosakata yang sering digunakan
        dalam percakapan sehari-hari. Kosakata warna penting untuk mendeskripsikan
        benda, situasi, maupun selera pribadi seperti warna favorit.
      </Text>

      <Text style={styles.subTitle}>Arti Iro (Warna)</Text>
      <Text style={styles.caption}>
        Iro digunakan untuk menyatakan warna secara umum. Dalam kamus bahasa Jepang,
        arti iro antara lain:
      </Text>
      <Text style={styles.caption}>
        1. Kesan visual yang diterima mata berdasarkan panjang gelombang cahaya.
      </Text>
      <Text style={styles.caption}>
        2. Corak atau ragam yang menggambarkan sifat dan ekspresi.
      </Text>

      <Text style={styles.subTitle}>Penggunaan Kosakata Warna dalam Kalimat</Text>

      {/* ================= WARNA BASIC ================= */}
      <Text style={styles.caption}>
        1. <Text style={{ fontWeight: "bold" }}>Warna sebagai Kata Benda</Text>
      </Text>
      <Text style={styles.caption}>● Warna Basic</Text>

      <Image
      source={require("./warna-basic.png")} 
      style={styles.imageBasic}
      resizeMode="cover"
      />

      <Text style={[styles.caption, { color: "red", fontWeight: "bold" }]}>
        !PERHATIAN! Warna biru (ao) juga bisa digunakan untuk hijau. Contoh terkenal
        adalah lampu lalu lintas di Jepang yang disebut “ao shingo”.
      </Text>

      {/* ================= WARNA NON-BASIC ================= */}
      <Text style={styles.caption}>● Warna Non-Basic</Text>

      <Text style={styles.caption}>
        Warna non-basic termasuk meishi (kata benda). Untuk mendeskripsikan warna
        suatu benda, gunakan partikel <Text style={{ fontWeight: "bold" }}>no</Text>{" "}
        di antara warna dan kata benda.
      </Text>

      <Image
      source={require("./warna-nonbasic.png")} 
      style={styles.imageNonBasic}
      resizeMode="cover"
      />

      {/* ================= WARNA SEBAGAI KATA SIFAT ================= */}
      <Text style={styles.caption}>
        2. <Text style={{ fontWeight: "bold" }}>Warna sebagai Kata Sifat</Text>
      </Text>

      <Text style={styles.caption}>
        Beberapa warna dapat menjadi kata sifat hanya dengan menambahkan huruf
        <Text style={{ fontWeight: "bold" }}> “i” </Text>
        di akhir. Dengan bentuk ini, kalian tidak perlu menggunakan partikel
        apapun, cukup pola <Text style={{ fontWeight: "bold" }}>kata sifat + kata benda</Text>.
      </Text>

      <Image
      source={require("./warna-kata-sifat.png")} 
      style={styles.imageKataSifat}
      resizeMode="cover"
      />

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
    textAlign: "left",
    marginBottom: 12,
    color: "#333",
  },
  imageBasic: {
    width: "50%",
    maxWidth: 450,
    height: 450,
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  imageNonBasic: {
    width: "50%",
    maxWidth: 450,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  imageKataSifat: {
    width: "50%",
    maxWidth: 400,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
});
