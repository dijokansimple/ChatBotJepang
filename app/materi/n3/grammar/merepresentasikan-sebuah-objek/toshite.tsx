import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Toshite() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜として」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda + 「として」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜として」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「として」 merupakan ungkapan bahasa Jepang yang digunakan
        untuk menyatakan suatu peran tertentu secara jelas. Peran tersebut bisa
        berupa pekerjaan atau kualifikasi, posisi atau status, kedudukan sosial,
        istilah tertentu, perayaan, maupun identitas yang sedang disandang oleh
        seseorang atau suatu hal.
      </Text>

      <Text style={styles.caption}>
        Pola ini sering digunakan ketika pembicara ingin menegaskan sudut
        pandang atau peran dari subjek dalam suatu situasi. Oleh karena itu,
        dalam bahasa Indonesia, tata bahasa 「として」 umumnya diterjemahkan
        sebagai “sebagai”.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Raigetsu, orinpikku senshu toshite, nihon ni ikimasu.
        </Text>
        <Text style={styles.jpText}>
          来月、オリンピック選手として、日本に行きます。
        </Text>
        <Text style={styles.idText}>
          → Bulan depan, saya akan pergi ke Jepang sebagai atlet Olimpiade.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Ashita, san-nensei no daihyou toshite, supiichi wo shinakereba ikenain da.
        </Text>
        <Text style={styles.jpText}>
          明日、三年生の代表として、スピーチをしなければいけないんだ。
        </Text>
        <Text style={styles.idText}>
          → Besok, aku harus berpidato sebagai perwakilan siswa kelas tiga.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Shakaijin toshite, ichiban tanoshii to kanjite iru toki wa donna toki desuka?
        </Text>
        <Text style={styles.jpText}>
          社会人として、一番楽しいと感じているときはどんなときですか？
        </Text>
        <Text style={styles.idText}>
          → Sebagai orang yang sudah bekerja, kapan kamu merasa paling senang?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Tomodachi toshite, itsumo Tanaka-kun wo ouen shiteru yo.
        </Text>
        <Text style={styles.jpText}>
          友達として、いつも田中君を応援してるよ。
        </Text>
        <Text style={styles.idText}>
          → Sebagai teman, aku selalu mendukung Tanaka.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Ani toshite, ii adobaisu wo shite yaru yo.
        </Text>
        <Text style={styles.jpText}>
          兄として、いいアドバイスをしてやるよ。
        </Text>
        <Text style={styles.idText}>
          → Sebagai kakak laki-laki, aku akan memberi saran yang baik.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Oya toshite, isshou kodomo wo mamoritai.
        </Text>
        <Text style={styles.jpText}>
          親として、一生子供を守りたい。
        </Text>
        <Text style={styles.idText}>
          → Sebagai orang tua, saya ingin melindungi anak sepanjang hidup.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Shourai wa kashu toshite katsuyaku shitai.
        </Text>
        <Text style={styles.jpText}>
          将来は歌手として活躍したい。
        </Text>
        <Text style={styles.idText}>
          → Di masa depan, saya ingin berkarier sebagai penyanyi.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kare wa mangaka toshite seikou shimashita.
        </Text>
        <Text style={styles.jpText}>
          彼は漫画家として成功しました。
        </Text>
        <Text style={styles.idText}>
          → Dia sukses sebagai komikus.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kyouto wa rekishi no aru machi toshite, sekaijuu ni shirarete iru.
        </Text>
        <Text style={styles.jpText}>
          京都は歴史のある町として、世界中に知られている。
        </Text>
        <Text style={styles.idText}>
          → Kyoto dikenal di seluruh dunia sebagai kota bersejarah.
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
    borderLeftWidth: 4,
    borderLeftColor: "#7bbfb6",
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
