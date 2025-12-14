import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function KeteranganWaktu() {
  // 1. Hari
  const hari = [
    { jp: "hi / youbi", id: "hari", hira: "ひ・ようび / ヒ・ヨウビ", kanji: "日・曜日 *N4" },
    { jp: "ototoi", id: "kemarin lusa", hira: "おととい / オトトイ", kanji: "一昨日 *N3" },
    { jp: "kinou", id: "kemarin", hira: "きのう / キノウ", kanji: "昨日 *N3" },
    { jp: "kyou", id: "hari ini", hira: "きょう / キョウ", kanji: "今日 *N5" },
    { jp: "ashita", id: "besok", hira: "あした / アシタ", kanji: "明日 *N4" },
    { jp: "asatte", id: "besok lusa", hira: "あさって / アサッテ", kanji: "明後日 *N4" },
    { jp: "mainichi", id: "setiap hari", hira: "まいにち / マイ二チ", kanji: "毎日 *N5" },
    { jp: "aru hi", id: "suatu hari", hira: "あるひ / アルヒ", kanji: "ある日 *N5" },
    { jp: "heijitsu", id: "hari kerja", hira: "へいじつ / ヘイジツ", kanji: "平日 *N3" },
    { jp: "hizuke", id: "tanggal", hira: "ひづけ / ヒヅケ", kanji: "日付 *N3" },
  ];

  // 2. Minggu, Bulan, Tahun
  const mingguBulanTahun = [
    { jp: "shuu", id: "minggu", hira: "しゅう / シュウ", kanji: "週 *N4" },
    { jp: "senshuu", id: "minggu lalu", hira: "せんしゅう / センシュウ", kanji: "先週 *N4" },
    { jp: "konshuu", id: "minggu ini", hira: "こんしゅう / コンシュウ", kanji: "今週 *N4" },
    { jp: "raishuu", id: "minggu depan", hira: "らいしゅう / ライシュウ", kanji: "来週 *N4" },
    { jp: "saraishuu", id: "dua minggu depan", hira: "さらいしゅう / サライシュウ", kanji: "再来週 *N2" },
    { jp: "shuumatsu", id: "akhir pekan", hira: "しゅうまつ / シュウマツ", kanji: "週末 *N3" },
    { jp: "maishuu", id: "setiap minggu", hira: "まいしゅう / マイシュウ", kanji: "毎週 *N4" },
    { jp: "gatsu / getsu / tsuki", id: "bulan", hira: "がつ・げつ・つき / ガツ・ゲツ・ツキ", kanji: "月 *N5" },
    { jp: "sengetsu", id: "bulan lalu", hira: "せんげつ / センゲツ", kanji: "先月 *N5" },
    { jp: "kongetsu", id: "bulan ini", hira: "こんげつ / コンゲツ", kanji: "今月 *N5" },
    { jp: "raigetsu", id: "bulan depan", hira: "らいげつ / ライゲツ", kanji: "来月 *N5" },
    { jp: "saraigetsu", id: "dua bulan depan", hira: "さらいげつ / サライゲツ", kanji: "再来月 *N2" },
    { jp: "toshi", id: "tahun", hira: "とし / トシ", kanji: "年 *N5" },
    { jp: "ototoshi", id: "dua tahun lalu", hira: "おととし / オトトシ", kanji: "一昨年 *N3" },
    { jp: "kyonen", id: "tahun lalu", hira: "きょねん / キョネン", kanji: "去年 *N4" },
    { jp: "kotoshi", id: "tahun ini", hira: "ことし / コトシ", kanji: "今年 *N5" },
    { jp: "rainen", id: "tahun depan", hira: "らいねん / ライネン", kanji: "来年 *N5" },
    { jp: "sarainen", id: "dua tahun depan", hira: "さらいねん / サライネン", kanji: "再来年 *N2" },
    { jp: "seiki", id: "abad", hira: "せいき / セイキ", kanji: "世紀 *N1" },
    { jp: "jidai", id: "masa", hira: "じだい / ジダイ", kanji: "時代 *N4" },
  ];

  // 3. Periode Waktu
  const periodeWaktu = [
    { jp: "maiasa", id: "setiap pagi", hira: "まいあさ / マイアサ", kanji: "毎朝 *N4" },
    { jp: "maiban", id: "setiap malam", hira: "まいばん / マイバン", kanji: "毎晩 *N3" },
    { jp: "asa", id: "pagi", hira: "あさ / アサ", kanji: "朝 *N4" },
    { jp: "hiru / hiruma", id: "siang", hira: "ひる・ひるま / ヒル・ヒルマ", kanji: "昼・昼間 *N4" },
    { jp: "yuugata", id: "sore", hira: "ゆうがた / ユウガタ", kanji: "夕方 *N4" },
    { jp: "yoru", id: "malam", hira: "よる / ヨル", kanji: "夜 *N4" },
    { jp: "yonaka", id: "tengah malam", hira: "よなか / ヨナカ", kanji: "夜中 *N4" },
    { jp: "kesa", id: "tadi pagi", hira: "けさ / ケサ", kanji: "今朝 *N4" },
    { jp: "konban", id: "malam ini", hira: "こんばん / コンバン", kanji: "今晩 *N3" },
    { jp: "yuube / sakuya", id: "tadi malam", hira: "ゆうべ・さくや / ユウベ・サクヤ", kanji: "夕べ・昨夜 *N3" },
    { jp: "gozen", id: "a.m.", hira: "ごぜん / ゴゼン", kanji: "午前 *N5" },
    { jp: "gogo", id: "p.m.", hira: "ごご / ゴゴ", kanji: "午後 *N5" },
    { jp: "jikan", id: "waktu", hira: "じかん / ジカン", kanji: "時間 *N5" },
  ];

  // 4. Durasi Jam
  const durasiJam = [
    { jp: "ichijikan", id: "satu jam", hira: "いちじかん", kanji: "一時間" },
    { jp: "nijikan", id: "dua jam", hira: "にじかん", kanji: "二時間" },
    { jp: "sanjikan", id: "tiga jam", hira: "さんじかん", kanji: "三時間" },
    { jp: "yojikan", id: "empat jam", hira: "よじかん", kanji: "四時間" },
    { jp: "gojikan", id: "lima jam", hira: "ごじかん", kanji: "五時間" },
    { jp: "rokujikan", id: "enam jam", hira: "ろくじかん", kanji: "六時間" },
    { jp: "shichijikan / nanajikan", id: "tujuh jam", hira: "しちじかん・ななじかん", kanji: "七時間" },
    { jp: "hachijikan", id: "delapan jam", hira: "はちじかん", kanji: "八時間" },
    { jp: "kujikan", id: "sembilan jam", hira: "くじかん", kanji: "九時間" },
    { jp: "juujikan", id: "sepuluh jam", hira: "じゅうじかん", kanji: "十時間" },
  ];

  // Fungsi render tabel
  const renderTable = (data) => (
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
      <Text style={styles.title}>Kosakata Keterangan Waktu</Text>

      {/* Gambar */}
      <Image
        source={require("./keterangan-waktu.png")} // ganti dengan gambar keterangan waktu
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata keterangan waktu dalam bahasa Jepang.
      </Text>

      <Text style={styles.subTitle}>Hari</Text>
      {renderTable(hari)}

      <Text style={styles.subTitle}>Minggu, Bulan, Tahun</Text>
      {renderTable(mingguBulanTahun)}

      <Text style={styles.subTitle}>Periode Waktu</Text>
      {renderTable(periodeWaktu)}

      <Text style={styles.subTitle}>Durasi Jam</Text>
      {renderTable(durasiJam)}

      {/* Bisa ditambahkan Durasi Hari / Minggu / Bulan / Tahun */}
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
    maxWidth: 450,
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
