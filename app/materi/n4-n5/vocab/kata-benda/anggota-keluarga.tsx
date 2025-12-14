import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type AnggotaKeluarga = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function AnggotaKeluarga() {
 
  const umum = [
    { jp: "kazoku", id: "keluarga", hira: "かぞく・カゾク", kanji: "家族 *N4" },
    { jp: "chichi / otousan / chichioya", id: "ayah", hira: "ちち・おとうさん・ちちおや・チチ・オトウサン・チチオヤ", kanji: "父・お父さん・父親 *N5" },
    { jp: "haha / okaasan / hahaoya", id: "ibu", hira: "はは・おかあさん・ははおや・ハハ・オカアサン・ハハオヤ", kanji: "母・お母さん・母親 *N5" },
    { jp: "oya / ryoushin", id: "orang tua", hira: "おや・りょうしん・オヤ・リョウシン", kanji: "親・両親 *N4" },
    { jp: "kyoudai", id: "saudara (secara umum) / saudara laki-laki", hira: "きょうだい・キョウダイ", kanji: "兄弟 *N4" },
    { jp: "shimai", id: "saudara perempuan", hira: "しまい・シマイ", kanji: "姉妹 *N4" },
    { jp: "ani / oniisan", id: "kakak laki-laki", hira: "あに・おにいさん・アニ・オニイサン", kanji: "兄・お兄さん *N4" },
    { jp: "ane / oneesan", id: "kakak perempuan", hira: "あね・おねえさん・アネ・オネエサン", kanji: "姉・お姉さん *N4" },
    { jp: "otouto", id: "adik laki-laki", hira: "おとうと・オトウト", kanji: "弟 *N4" },
    { jp: "imouto", id: "adik perempuan", hira: "いもうと・イモウト", kanji: "妹 *N4" },
    { jp: "musuko", id: "anak laki-laki", hira: "むすこ・ムスコ", kanji: "息子 *N3" },
    { jp: "musume", id: "anak perempuan", hira: "むすめ・ムスメ", kanji: "娘 *N3" },
    { jp: "kodomo", id: "anak", hira: "こども・コドモ", kanji: "子供 *N3" },
    { jp: "akachan / akanbou", id: "bayi", hira: "あかちゃん・あかんぼう・アカチャン・アカンボウ", kanji: "赤ちゃん・赤ん坊 *N4" },
    { jp: "otto / shujin", id: "suami", hira: "おっと・しゅじん・オット・シュジン", kanji: "夫・主人 *N3" },
    { jp: "tsuma / okusan", id: "istri", hira: "つま・おくさん・ツマ・オクサン", kanji: "妻・奥さん *N3" },
    { jp: "sofu / ojiisan", id: "kakek", hira: "そふ・おじいさん・ソフ・オジイサン", kanji: "祖父・お祖父さん *N3" },
    { jp: "sobo / obaasan", id: "nenek", hira: "そぼ・おばあさん・ソボ・オバアサン", kanji: "祖母・お祖母さん *N3" },
    { jp: "mago", id: "cucu", hira: "まご・マゴ", kanji: "孫 *N2" },
    { jp: "oji / ojisan", id: "paman", hira: "おじ・おじさん・オジ・オジサン", kanji: "叔父・伯父・叔父さん・伯父さん *N1" },
    { jp: "oba / obasan", id: "tante / bibi", hira: "おば・おばさん・オバ・オバサン", kanji: "叔母・伯母・叔母さん・伯母さん *N1" },
    { jp: "itoko", id: "sepupu", hira: "いとこ・イトコ", kanji: "従兄弟・従姉妹 *N1" },
    { jp: "shinseki", id: "sanak keluarga", hira: "しんせき・シンセキ", kanji: "親戚 *N3" },
    { jp: "petto", id: "binatang peliharaan", hira: "ペット", kanji: "" },
  ];

  const panggilan = [
    { jp: "chichi", id: "ayah (keluarga sendiri)", hira: "ちち", kanji: "父", call: "otousan" },
    { jp: "otousan", id: "ayah (keluarga orang lain)", hira: "おとうさん", kanji: "お父さん", call: "otousan" },
    { jp: "haha", id: "ibu (keluarga sendiri)", hira: "はは", kanji: "母", call: "okaasan" },
    { jp: "okaasan", id: "ibu (keluarga orang lain)", hira: "おかあさん", kanji: "お母さん", call: "okaasan" },
    { jp: "ani", id: "kakak laki-laki (keluarga sendiri)", hira: "あに", kanji: "兄", call: "oniisan" },
    { jp: "oniisan", id: "kakak laki-laki (keluarga orang lain)", hira: "おにいさん", kanji: "お兄さん", call: "oniisan" },
    { jp: "ane", id: "kakak perempuan (keluarga sendiri)", hira: "あね", kanji: "姉", call: "oneesan" },
    { jp: "oneesan", id: "kakak perempuan (keluarga orang lain)", hira: "おねえさん", kanji: "お姉さん", call: "oneesan" },
    { jp: "otouto", id: "adik laki-laki (keluarga sendiri)", hira: "おとうと", kanji: "弟", call: "–" },
    { jp: "otoutosan", id: "adik laki-laki (keluarga orang lain)", hira: "おとうとさん", kanji: "弟さん", call: "–" },
    { jp: "imouto", id: "adik perempuan (keluarga sendiri)", hira: "いもうと", kanji: "妹", call: "–" },
    { jp: "imoutosan", id: "adik perempuan (keluarga orang lain)", hira: "いもうとさん", kanji: "妹さん", call: "–" },
    { jp: "kodomo", id: "anak", hira: "こども", kanji: "子供", call: "~chan, ~kun" },
    { jp: "otto / shujin", id: "suami", hira: "おっと・しゅじん", kanji: "夫・主人", call: "–" },
    { jp: "tsuma / okusan", id: "istri", hira: "つま・おくさん", kanji: "妻・奥さん", call: "–" },
    { jp: "sofu", id: "kakek (keluarga sendiri)", hira: "そふ", kanji: "祖父", call: "ojiisan" },
    { jp: "ojiisan", id: "kakek (keluarga orang lain)", hira: "おじいさん", kanji: "お祖父さん", call: "ojiisan" },
    { jp: "sobo", id: "nenek (keluarga sendiri)", hira: "そぼ", kanji: "祖母", call: "obaasan" },
    { jp: "obaasan", id: "nenek (keluarga orang lain)", hira: "おばあさん", kanji: "お祖母さん", call: "obaasan" },
  ];

  // Fungsi render tabel
  const renderTable = (data: AnggotaKeluarga[]) => (
    <View style={styles.table}>
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
          style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
        >
          <Text style={styles.cell}>{item.jp}</Text>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.hira}</Text>
          <Text style={styles.cell}>{item.kanji || "-"}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Anggota Keluarga</Text>

      {/* Gambar */}
      <Image
        source={require("./anggota-keluarga.png")} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata Anggota Keluarga dalam bahasa Jepang.
      </Text>

      <Text style={styles.subTitle}>Kosakata Anggota Keluarga Secara Umum</Text>
      {renderTable(umum)}

      <Text style={styles.subTitle}>Kosakata Anggota Keluarga yang Digunakan Sebagai Panggilan</Text>
      {renderTable(panggilan)}

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
  table: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
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
  image: {
    width: "100%",
    maxWidth: 500,
    height: 350,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
});
