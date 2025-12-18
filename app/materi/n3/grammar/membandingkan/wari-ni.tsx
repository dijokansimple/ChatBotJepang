import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WariNi() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「wari ni」</Text>

      <Text style={styles.subTitle}>Pengertian</Text>
      <Text style={styles.caption}>
        「wari ni」 digunakan untuk menyatakan hasil atau kenyataan yang
        ternyata berbeda dari yang dibayangkan. Biasanya dipakai saat
        hasilnya terasa aneh, di luar dugaan, atau tidak sesuai harapan.
      </Text>
      <Text style={styles.caption}>
        Dalam bahasa Indonesia sering diartikan “padahal”, namun khusus
        untuk kondisi yang terasa tidak wajar.
      </Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>• Kata kerja kasual + wari ni</Text>
      <Text style={styles.caption}>• Kata sifat i + wari ni</Text>
      <Text style={styles.caption}>• Kata sifat na + na + wari ni</Text>
      <Text style={styles.caption}>• Kata benda + no + wari ni</Text>

      <Text style={styles.subTitle}>Catatan</Text>
      <Text style={styles.caption}>
        Pola ini sering dipakai dalam percakapan kasual dan tidak digunakan
        dalam kalimat resmi. Untuk arti “padahal” yang lebih umum, gunakan
        「(na) noni」.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kanojo wa okane ga nai to itte iru wari ni, yoku oshare na omise de gohan wo taberu.
        </Text>
        <Text style={styles.exampleText}>
          彼女はお金がないと言っているわりに、よくおしゃれなお店でご飯を食べる。
        </Text>
        <Text style={styles.caption}>
          → Padahal bilang tidak punya uang, tapi sering makan di restoran mahal.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ame ga futte iru wari ni, amari samukunai.
        </Text>
        <Text style={styles.exampleText}>
          雨が降っているわりに、あまり寒くない。
        </Text>
        <Text style={styles.caption}>
          → Padahal hujan, tapi tidak terlalu dingin.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Isshoukenmei benkyou shita wari ni, tesuto no tensuu ga yokunakatta.
        </Text>
        <Text style={styles.exampleText}>
          一生懸命勉強したわりに、テストの点数が良くなかった。
        </Text>
        <Text style={styles.caption}>
          → Padahal belajar keras, nilainya tidak bagus.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kare wa benkyou shite inakatta wari ni, ii seiseki wo toreta.
        </Text>
        <Text style={styles.exampleText}>
          彼は勉強していなかったわりに、いい成績を取れた。
        </Text>
        <Text style={styles.caption}>
          → Padahal tidak belajar, tapi dapat nilai bagus.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ano T-shatsu wa takai wari ni, yoku ureru.
        </Text>
        <Text style={styles.exampleText}>
          あのTシャツは高いわりによく売れる。
        </Text>
        <Text style={styles.caption}>
          → Padahal mahal, tapi laku keras.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Haha wa toshi no wari ni, wakaku mieru.
        </Text>
        <Text style={styles.exampleText}>
          母は年のわりに若く見える。
        </Text>
        <Text style={styles.caption}>
          → Padahal sudah berumur, tapi terlihat muda.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Shoshinsha no wari ni, yoku dekiru.
        </Text>
        <Text style={styles.exampleText}>
          初心者のわりによくできる。
        </Text>
        <Text style={styles.caption}>
          → Padahal pemula, tapi cukup bisa.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ano mise wa nedan no wari ni, amari oishikunai.
        </Text>
        <Text style={styles.exampleText}>
          あの店は値段のわりにあまり美味しくない。
        </Text>
        <Text style={styles.caption}>
          → Padahal mahal, tapi rasanya tidak enak.
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
    marginBottom: 8,
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
    color: "#333",
  },
});
