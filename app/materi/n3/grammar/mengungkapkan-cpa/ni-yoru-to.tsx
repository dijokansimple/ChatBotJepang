import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiYoruTo() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜によると」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda + 「によると」 / 「によれば」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜によると」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「によると」, atau bisa juga diungkapkan dengan 「によれば」,
        merupakan ungkapan bahasa Jepang yang digunakan untuk menyatakan asal mula
        suatu informasi. Umumnya, akhir kalimat dengan pola ini akan menggunakan
        pola seperti 「そうだ / だそうだ」, 「らしい」, dan sebagainya, karena
        kalimat dengan pola 「によると」 merupakan suatu ekspresi untuk
        menyampaikan informasi yang didengar, baik dari orang lain maupun dari
        sumber informasi tertentu.
      </Text>

      <Text style={styles.caption}>
        Oleh karena itu, dalam bahasa Indonesia, pola 「によると」 memiliki makna
        “menurut”. Pola ini sering digunakan dalam berita, laporan, artikel,
        maupun percakapan ketika ingin menjelaskan bahwa informasi tersebut
        berasal dari sumber tertentu, bukan pendapat pribadi pembicara.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kono deeta ni yoru to, nihon de hataraku gaikokujin no kazu wa nibai ni
          zouka shita.
        </Text>
        <Text style={styles.exampleText}>
          このデータによると、日本で働く外国人の数は二倍に増加した。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut data ini, jumlah orang asing yang bekerja di Jepang bertambah
          dua kali lipat.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Nyuusu ni yoru to, kinkyuu jitai sengen no kikan ga enchou sareru
          kanousei ga aru sou da.
        </Text>
        <Text style={styles.exampleText}>
          ニュースによると、緊急事態宣言の期間が延長される可能性があるそうだ。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut berita, sepertinya ada kemungkinan masa keadaan darurat
          diperpanjang.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Senmonka no hanashi ni yoru to, korona de dekakeru hito ga sukunaku natta
          kekka, kuuki ga kirei ni natta rashii desu.
        </Text>
        <Text style={styles.exampleText}>
          専門家の話によると、コロナで出かける人が少なくなった結果、空気がきれいになったらしいです。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut pendapat ahli, katanya karena Covid-19 jumlah orang yang
          bepergian berkurang, sehingga udara menjadi lebih bersih.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Taishikan no saito ni yoru to, Indonesia ni sunde iru nihonjin no kazu
          wa ichi-man kyuu-sen nin ijou mo iru.
        </Text>
        <Text style={styles.exampleText}>
          大使館のサイトによると、インドネシアに住んでいる日本人の数は1万9千人以上もいる。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut situs kedutaan, jumlah orang Jepang yang tinggal di Indonesia
          lebih dari 19.000 orang.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Uwasa ni yoru to, kare wa Ayu-chan ni kokuhaku shita kedo, furareta
          mitai.
        </Text>
        <Text style={styles.exampleText}>
          噂によると、彼はあゆちゃんに告白したけど、ふられたみたい。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut rumor, sepertinya dia menyatakan perasaan pada Ayu, tapi
          ditolak.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Isha ni yoru to, kono kusuri wo nonde okeba, isshuukan de byouki ga naoru
          rashii.
        </Text>
        <Text style={styles.exampleText}>
          医者によると、この薬を飲んでおけば、一週間で病気が治るらしい。
        </Text>
        <Text style={styles.exampleText}>
          → Menurut dokter, katanya kalau minum obat ini, dalam satu minggu
          penyakit akan sembuh.
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
