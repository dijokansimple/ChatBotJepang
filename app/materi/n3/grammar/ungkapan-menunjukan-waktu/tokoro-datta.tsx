import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TokoroDatta() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「〜ところだった」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.subBoxBlue}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
      </View>
      <Text style={styles.paragraph}>
        Kata kerja bentuk kamus / bentuk negatif (nai) + 「ところだった」
      </Text>

      {/* Penggunaan */}
      <View style={styles.subBoxGreen}>
        <Text style={styles.subTitle}>Penggunaan 「〜ところだった」</Text>
      </View>

      <Text style={styles.paragraph}>
        Pola 「ところだった」 dalam bahasa Jepang digunakan untuk menyatakan
        suatu kejadian yang dirasa hampir terjadi atau kemungkinan besar akan
        terjadi sedikit lagi, tetapi pada akhirnya dapat dihindari atau ternyata
        tidak benar-benar terjadi. Pola ini menekankan bahwa suatu peristiwa
        nyaris terjadi, namun hasil akhirnya berbeda dari yang diperkirakan.
      </Text>

      <Text style={styles.paragraph}>
        Tata bahasa ini dapat digunakan baik untuk situasi buruk maupun situasi
        baik yang hampir terjadi. Artinya, 「ところだった」 tidak hanya terbatas
        pada kejadian negatif seperti kecelakaan atau masalah, tetapi juga bisa
        digunakan untuk kejadian positif yang hampir terwujud.
      </Text>

      <Text style={styles.paragraph}>
        Dalam bahasa Indonesia, pola 「ところだった」 umumnya diterjemahkan
        sebagai “hampir”. Untuk bentuk yang lebih sopan, kata 「だった」 dapat
        diganti menjadi 「でした」. Selain itu, pola ini sering digunakan bersama
        dengan ungkapan seperti 「もう少しで」, 「あと少しで」, atau 「危うく」,
        yang memiliki makna “sedikit lagi” atau “nyaris”.
      </Text>

      {/* Contoh Kalimat */}
      <View style={styles.subBoxOrange}>
        <Text style={styles.subTitle}>Contoh Kalimat</Text>
      </View>

      {/* Contoh 1 */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kesa, mou sukoshi de densha ni noriokureru tokoro datta.
        </Text>
        <Text style={styles.jp}>
          今朝、もう少しで電車に乗り遅れるところだった。
        </Text>
        <Text style={styles.id}>
          → Tadi pagi, saya hampir terlambat naik kereta.
        </Text>
      </View>

      {/* Contoh 2 */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Hontou ni abunakatta. Mou sukoshi de kuruma ni hikareru tokoro datta.
        </Text>
        <Text style={styles.jp}>
          本当に危なかった。もう少しで車にひかれるところだった。
        </Text>
        <Text style={styles.id}>
          → Sangat berbahaya. Saya hampir ditabrak mobil.
        </Text>
      </View>

      {/* Contoh 3 */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Ano sagishi ni okane wo torareru tokoro datta.
        </Text>
        <Text style={styles.jp}>
          あの詐欺師にお金を取られるところだった。
        </Text>
        <Text style={styles.id}>
          → Uang saya hampir diambil oleh penipu itu.
        </Text>
      </View>

      {/* Contoh 4 */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Mezamashi wo settei suru no wo wasurete shimatte,
          ayauku nesugosu tokoro datta.
        </Text>
        <Text style={styles.jp}>
          目覚ましを設定するのを忘れてしまって、危うく寝過ごすところだった。
        </Text>
        <Text style={styles.id}>
          → Karena lupa mengatur alarm, saya hampir kesiangan.
        </Text>
      </View>

      {/* Contoh 5 */}
      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kanojo ni uso ga bareru tokoro datta.
        </Text>
        <Text style={styles.jp}>
          彼女に嘘がばれるところだった。
        </Text>
        <Text style={styles.id}>
          → Kebohongan saya hampir ketahuan oleh pacar (perempuan).
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8fafc",
  },

  titleBox: {
    backgroundColor: "#1e3a8a",
    padding: 14,
    borderRadius: 14,
    marginBottom: 16,
  },
  titleText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  subBoxBlue: {
    backgroundColor: "#dbeafe",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  subBoxGreen: {
    backgroundColor: "#dcfce7",
    padding: 8,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 8,
  },
  subBoxOrange: {
    backgroundColor: "#ffedd5",
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
    borderLeftColor: "#2563eb",
  },

  jp: {
    fontSize: 15,
    color: "#111827",
  },
  id: {
    fontSize: 15,
    color: "#374151",
    marginTop: 6,
  },
});
