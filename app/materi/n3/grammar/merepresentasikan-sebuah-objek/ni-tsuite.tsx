import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiTsuite() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜について」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda + 「について」
      </Text>
      <Text style={styles.caption}>
        Kata benda + 「についての」 + kata benda
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜について」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「について」 merupakan ungkapan dalam bahasa Jepang yang
        digunakan untuk menyatakan suatu topik atau pokok pembicaraan. Pola ini
        dipakai ketika seseorang ingin membicarakan, memikirkan, menuliskan,
        menjelaskan, atau menyampaikan informasi mengenai suatu hal tertentu.
      </Text>

      <Text style={styles.caption}>
        Oleh karena itu, dalam bahasa Indonesia, 「について」 umumnya
        diterjemahkan sebagai “tentang”. Ungkapan ini sering digunakan dalam
        konteks percakapan sehari-hari, presentasi, diskusi, maupun tulisan
        formal.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Watashitachi wa kongo no purojekuto ni tsuite hanashiaimashita.
        </Text>
        <Text style={styles.jpText}>
          私たちは今後のプロジェクトについて話し合いました。
        </Text>
        <Text style={styles.idText}>
          → Kami berbicara tentang proyek berikutnya.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kinou no jugyou de, nihongo de suki na tabemono ni tsuite happyou shimashita.
        </Text>
        <Text style={styles.jpText}>
          昨日の授業で、日本語で好きな食べ物について発表しました。
        </Text>
        <Text style={styles.idText}>
          → Pada pelajaran kemarin, saya melakukan presentasi tentang makanan
          favorit dalam bahasa Jepang.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kare wa nihon no dentouteki na bunka ni tsuite totemo kuwashii desu.
        </Text>
        <Text style={styles.jpText}>
          彼は日本の伝統的な文化についてとても詳しいです。
        </Text>
        <Text style={styles.idText}>
          → Dia sangat paham tentang budaya tradisional Jepang.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Watashi wa kanojo no suki na mono ni tsuite motto shiritai desu.
        </Text>
        <Text style={styles.jpText}>
          私は彼女の好きなものについてもっと知りたいです。
        </Text>
        <Text style={styles.idText}>
          → Saya ingin mengetahui lebih banyak tentang hal yang dia sukai.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kono hon wa jibun ni jishin wo tsukeru houhou ni tsuite kakarete imasu.
        </Text>
        <Text style={styles.jpText}>
          この本は自分に自信を付ける方法について書かれています。
        </Text>
        <Text style={styles.idText}>
          → Buku ini ditulis tentang cara membangun rasa percaya diri.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6f4f1",
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
    marginBottom: 10,
    color: "#333",
  },
  exampleBox: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#6fb7ad",
  },
  jpText: {
    fontSize: 15,
    color: "#0F3B36",
    marginBottom: 2,
  },
  idText: {
    fontSize: 15,
    color: "#333",
    marginTop: 4,
  },
});
