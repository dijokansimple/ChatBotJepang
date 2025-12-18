import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiYotte() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜によって」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda + によって / により / による
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜によって」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「に よって」 merupakan salah satu tata bahasa yang termasuk
        dalam JLPT N3, yang digunakan untuk menyatakan beberapa hal, yaitu
        menyatakan suatu penyebab atau alasan yang mengakibatkan hal tertentu
        terjadi, sehingga bisa diartikan “karena”.
      </Text>

      <Text style={styles.caption}>
        Dalam bahasa Jepang memang ada banyak pola kalimat yang digunakan untuk
        menyatakan penyebab atau alasan. Namun, perlu dipahami bahwa pola
        「に よって」 memiliki kesan yang lebih formal sehingga banyak digunakan
        dalam bahasa tulisan. Bentuk 「に より」 juga memiliki kesan yang lebih
        formal dibandingkan 「に よって」.
      </Text>

      <Text style={styles.caption}>
        Selain itu, 「に よって」 juga digunakan untuk menyatakan cara atau alat
        dalam melakukan sesuatu, sehingga dapat diartikan “dengan”. Akan tetapi,
        tidak semua kalimat yang menyatakan cara dapat menggunakan pola ini.
        Pola 「に よって」 tidak digunakan untuk alat yang jelas seperti kendaraan
        atau alat makan, sehingga dalam kondisi tersebut lebih tepat menggunakan
        partikel 「で」.
      </Text>

      <Text style={styles.caption}>
        Tata bahasa 「に よって」 juga digunakan dalam kalimat pasif untuk
        menyatakan penemu, pembuat, perencana, atau pihak yang menghasilkan suatu
        karya, sehingga dapat diartikan “oleh”. Walaupun dapat digantikan dengan
        partikel 「に」, penggunaan 「に よって」 lebih cocok untuk menyatakan
        fakta, hasil karya, produksi, atau penemuan.
      </Text>

      <Text style={styles.caption}>
        Selain itu, pola 「に よって」 juga digunakan untuk menyatakan perbedaan
        yang terjadi tergantung pada kondisi tertentu. Oleh karena itu, pola ini
        sering digunakan bersama kata seperti 「違う」 atau 「異なる」 yang berarti
        “berbeda”.
      </Text>

      <Text style={styles.caption}>
        Karena memiliki berbagai fungsi, arti 「に よって」 dalam bahasa Indonesia
        dapat berubah tergantung konteks, seperti “karena”, “dengan”, “oleh”,
        atau “tergantung pada”.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ooame ni yotte, shiai wa chuushi ni natta.
        </Text>
        <Text style={styles.exampleText}>
          大雨によって、試合は中止になった。
        </Text>
        <Text style={styles.exampleText}>
          → Pertandingan dibatalkan karena hujan deras.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Miseinen no inshu wa houritsu ni yotte kinshi sarete iru.
        </Text>
        <Text style={styles.exampleText}>
          未成年の飲酒は法律によって禁止されている。
        </Text>
        <Text style={styles.exampleText}>
          → Minum alkohol oleh anak di bawah umur dilarang karena hukum.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Intaanetto ni yotte, sama-zama na jouhou wo erareru.
        </Text>
        <Text style={styles.exampleText}>
          インターネットによって、様々な情報を得られる。
        </Text>
        <Text style={styles.exampleText}>
          → Dengan internet, kita bisa mendapatkan berbagai informasi.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kono shousetsu wa Murakami Haruki ni yotte kakareta.
        </Text>
        <Text style={styles.exampleText}>
          この小説は村上春樹によって書かれた。
        </Text>
        <Text style={styles.exampleText}>
          → Novel ini ditulis oleh Murakami Haruki.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kuni ni yotte bunka ya shuukan ga kotonaru.
        </Text>
        <Text style={styles.exampleText}>
          国によって文化や習慣が異なる。
        </Text>
        <Text style={styles.exampleText}>
          → Budaya dan kebiasaan berbeda tergantung negaranya.
        </Text>
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
    marginBottom: 4,
    color: "#333",
  },
});
