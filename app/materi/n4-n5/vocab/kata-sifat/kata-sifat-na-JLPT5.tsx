import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function KataSifatNa() {
  const data = [
    { jp: "shinsetsu na", id: "ramah", hira: "しんせつな", kanji: "親切な *N4" },
    { jp: "kantan na", id: "mudah", hira: "かんたんな", kanji: "簡単な *N2" },
    { jp: "kirei na", id: "cantik", hira: "きれいな", kanji: "綺麗な *N1" },
    { jp: "yuumei na", id: "terkenal", hira: "ゆうめいな", kanji: "有名な *N4" },
    { jp: "hima na", id: "waktu luang / senggang", hira: "ひまな", kanji: "暇な *N1" },
    { jp: "hansamu na", id: "tampan", hira: "ハンサムな", kanji: "-" },
    { jp: "nigiyaka na", id: "ramai", hira: "にぎやかな", kanji: "賑やかな" },
    { jp: "shizuka na", id: "sepi", hira: "しずかな", kanji: "静かな *N3" },
    { jp: "jouzu na", id: "pintar", hira: "じょうずな", kanji: "上手な *N5" },
    { jp: "heta na", id: "tidak pintar", hira: "へたな", kanji: "下手な *N5" },
    { jp: "suki na", id: "suka", hira: "すきな", kanji: "好きな *N3" },
    { jp: "kirai na", id: "benci", hira: "きらいな", kanji: "嫌いな *N1" },
    { jp: "genki na", id: "sehat / bersemangat", hira: "げんきな", kanji: "元気な *N4" },
    { jp: "suteki na", id: "bagus / indah", hira: "すてきな", kanji: "素敵な *N1" },
    { jp: "ippai na", id: "banyak", hira: "いっぱいな", kanji: "-" },
    { jp: "benri na", id: "praktis", hira: "べんりな", kanji: "便利な *N3" },
    { jp: "fuben na", id: "tidak praktis", hira: "ふべんな", kanji: "不便な *N3" },
    { jp: "iro iro na", id: "berbagai macam", hira: "いろいろな", kanji: "色々な *N4" },
    { jp: "kenkou na", id: "sehat", hira: "けんこうな", kanji: "健康な *N1" },
    { jp: "taihen na", id: "merepotkan", hira: "たいへんな", kanji: "大変な *N3" },
    { jp: "daijoubu na", id: "tidak masalah", hira: "だいじょうぶな", kanji: "大丈夫な *N3" },
    { jp: "muri na", id: "tidak mungkin", hira: "むりな", kanji: "無理な *N2" },
    { jp: "taisetsu na", id: "penting", hira: "たいせつな", kanji: "大切な *N5" },
    { jp: "muda na", id: "sia-sia", hira: "むだな", kanji: "無駄な *N2" }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Sifat Berakhiran Na dalam Bahasa Jepang</Text>

      <Image
        source={require("./na-n5.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata kata sifat berakhiran na dalam bahasa Jepang.
      </Text>

      {/* Header */}
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
        <Text style={[styles.cell, styles.headerCell]}>Hiragana / Katakana</Text>
        <Text style={[styles.cell, styles.headerCell]}>Kanji *JLPT</Text>
      </View>

      {/* Rows */}
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.row,
            index % 2 === 0 ? styles.rowEven : styles.rowOdd
          ]}
        >
          <Text style={styles.cell}>{item.jp}</Text>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.hira}</Text>
          <Text style={styles.cell}>{item.kanji}</Text>
        </View>
      ))}

      {/* Contoh kalimat */}
      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <View style={styles.examples}>
        <Text style={styles.exampleText}>
          Tanaka-san wa shinsetsu na hito desu.{"\n"}
          田中さんは親切な人です。{"\n"}
          たなかさんは　しんせつな　ひとです。{"\n\n"}
          → Tanaka adalah orang yang ramah.
        </Text>

        <Text style={styles.exampleText}>
          Kore wa kantan na mondai dewa nai to omoimasu.{"\n"}
          これは簡単な問題ではないと思います。{"\n"}
          これは　かんたんな　もんだい　ではないと　おもいます。{"\n\n"}
          → Menurut saya ini bukan masalah yang mudah.
        </Text>

        <Text style={styles.exampleText}>
          Muda na kopii wo yameta hou ga ii desu. Kami no mudazukai desukara.{"\n"}
          無駄なコピーをやめたほうがいいです。紙の無駄遣いですから。{"\n"}
          むだな　コピーを　やめた　ほうが　いいです。　かみの　むだづかい　ですから。{"\n\n"}
          → Sebaiknya berhenti melakukan fotokopi yang sia-sia/tidak berguna.
        </Text>

        <Text style={styles.exampleText}>
          Watashi wa suki na hito ga imasen.{"\n"}
          私は好きな人がいません。{"\n"}
          わたしは　すきな　ひとが　いません。{"\n\n"}
          → Saya tidak punya orang yang disukai.
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
    marginBottom: 20,
    textAlign: "center",
    color: "#0F3B36",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 16,
    color: "#0F3B36",
  },
  image: {
    width: "100%",
    maxWidth: 450,
    height: 350,
    borderRadius: 12,
    marginBottom: 20,
    alignSelf: "center",
  },
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginBottom: 2,
    alignItems: "center",
  },
  headerRow: {
    backgroundColor: "#F7A6A6",
  },
  headerCell: {
    fontWeight: "bold",
    color: "white",
  },
  rowEven: {
    backgroundColor: "#eaf1ff",
  },
  rowOdd: {
    backgroundColor: "#ffffff",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 2,
  },
  examples: {
    backgroundColor: "#ffffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },
});
