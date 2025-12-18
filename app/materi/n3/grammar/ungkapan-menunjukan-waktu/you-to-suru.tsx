import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function YouToSuru() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「〜ようとする」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.subBoxBlue}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
      </View>
      <Text style={styles.paragraph}>
        Kata kerja bentuk maksud (akhiran -ou / -you) + 「ようとする」
      </Text>

      {/* Penggunaan */}
      <View style={styles.subBoxGreen}>
        <Text style={styles.subTitle}>Penggunaan 「〜ようとする」</Text>
      </View>

      <Text style={styles.paragraph}>
        Tata bahasa 「ようとする」 merupakan salah satu tata bahasa dalam JLPT N3
        yang digunakan untuk menyatakan dua makna utama. Pertama, pola ini
        digunakan untuk menunjukkan keadaan persis sebelum suatu tindakan
        dilakukan, yaitu ketika seseorang berniat atau akan melakukan sesuatu.
        Dalam bahasa Indonesia, makna ini dapat diartikan sebagai “akan”.
      </Text>

      <Text style={styles.paragraph}>
        Kedua, pola 「ようとする」 juga digunakan untuk menyatakan keadaan sedang
        berusaha melakukan suatu hal. Dalam makna ini, fokusnya bukan hanya pada
        niat, tetapi pada usaha yang sedang dilakukan untuk mencapai tujuan
        tersebut. Oleh karena itu, dalam bahasa Indonesia, pola ini dapat
        diterjemahkan sebagai “berusaha untuk”.
      </Text>

      <Text style={styles.paragraph}>
        Selain itu, untuk menyatakan bentuk negatif yang menunjukkan tidak adanya
        keinginan untuk melakukan suatu hal, digunakan pola 「ようとしない」.
        Pola ini memiliki makna “tidak mau”, dan sering digunakan untuk
        menggambarkan sikap menolak atau tidak memiliki niat sama sekali untuk
        melakukan suatu tindakan.
      </Text>

      {/* Akan Dilakukan */}
      <View style={styles.subBoxOrange}>
        <Text style={styles.subTitle}>① Hal yang Akan Dilakukan</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Shashin wo torou to shitara, kamera no denchi ga nakunatta.
        </Text>
        <Text style={styles.jp}>
          写真を撮ろうとしたら、カメラの電池がなくなった。
        </Text>
        <Text style={styles.id}>
          → Saat akan mengambil foto, baterai kamera habis.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Ie ni kaerou to shitara, joushi ni zangyou suru you tanomareta.
        </Text>
        <Text style={styles.jp}>
          家に帰ろうとしたら、上司に残業するよう頼まれた。
        </Text>
        <Text style={styles.id}>
          → Saat akan pulang ke rumah, diminta atasan untuk lembur.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Shawaa wo abiyou to shita noni, mizu ga denakatta.
        </Text>
        <Text style={styles.jp}>
          シャワーを浴びようとしたのに、水が出なかった。
        </Text>
        <Text style={styles.id}>
          → Padahal akan mandi shower, tetapi air tidak keluar.
        </Text>
      </View>

      {/* Berusaha Melakukan */}
      <View style={styles.subBoxPurple}>
        <Text style={styles.subTitle}>② Hal yang Berusaha Dilakukan</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Ano hito wa oborete iru inu wo tasukeyou to shite iru.
        </Text>
        <Text style={styles.jp}>
          あの人は溺れている犬を助けようとしている。
        </Text>
        <Text style={styles.id}>
          → Orang itu sedang berusaha menyelamatkan anjing yang tenggelam.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Wasureyou to shite mo, wasureru koto ga dekinai.
        </Text>
        <Text style={styles.jp}>
          忘れようとしても、忘れることができない。
        </Text>
        <Text style={styles.id}>
          → Meskipun berusaha melupakan, saya tidak bisa melupakannya.
        </Text>
      </View>

      {/* Tidak Mau */}
      <View style={styles.subBoxRed}>
        <Text style={styles.subTitle}>③ Hal yang Tidak Mau Dilakukan</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Kare wa watashi no hanashi wo mattaku kikou to shinai.
        </Text>
        <Text style={styles.jp}>
          彼は私の話をまったく聞こうとしない。
        </Text>
        <Text style={styles.id}>
          → Dia sama sekali tidak mau mendengarkan pembicaraan saya.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          Hontou no koto wo itta noni, kanojo wa shinjiyou to shinai.
        </Text>
        <Text style={styles.jp}>
          本当のことを言ったのに、彼女は信じようとしない。
        </Text>
        <Text style={styles.id}>
          → Padahal saya mengatakan yang sebenarnya, tetapi dia tidak mau percaya.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9fafb",
  },

  titleBox: {
    backgroundColor: "#0f172a",
    padding: 14,
    borderRadius: 16,
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
  subBoxPurple: {
    backgroundColor: "#ede9fe",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  subBoxRed: {
    backgroundColor: "#fee2e2",
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
    borderRadius: 12,
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
