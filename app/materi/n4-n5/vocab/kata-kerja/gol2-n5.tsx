import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

type Kosakata = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function Gol1N5() {

  const AkhiranU = [
    { jp: "warau", id: "tertawa", hira: "わらう", kanji: "笑う *N3" },
    { jp: "kau", id: "memelihara", hira: "かう", kanji: "飼う *N1" },
    { jp: "utau", id: "bernyanyi", hira: "うたう", kanji: "歌う *N4" },
    { jp: "tsukiau", id: "menemani / berkencan", hira: "つきあう", kanji: "付き合う *N3" },
    { jp: "tetsudau", id: "membantu", hira: "てつだう", kanji: "手伝う *N3" },
    { jp: "niau", id: "cocok", hira: "にあう", kanji: "似合う *N3" },
    { jp: "okonau", id: "mengadakan", hira: "おこなう", kanji: "行う *N5" },
    { jp: "harau", id: "membayar", hira: "はらう", kanji: "払う *N3" },
    { jp: "mayou", id: "tersesat", hira: "まよう", kanji: "迷う *N3" },
    { jp: "mukau", id: "menjemput", hira: "むかう", kanji: "向かう *N3" },
    { jp: "sasou", id: "mengundang", hira: "さそう", kanji: "誘う *N1" },
    { jp: "you", id: "mabuk", hira: "よう", kanji: "酔う *N1" },
    { jp: "jiko ni au", id: "kecelakaan", hira: "じこにあう", kanji: "事故にあう *N1" },
    { jp: "shiriau", id: "mengenal", hira: "しりあう", kanji: "知り合う *N4" },
    { jp: "morau", id: "menerima", hira: "もらう" },
    { jp: "chigau", id: "berbeda / salah", hira: "ちがう", kanji: "違う *N3" },
    { jp: "hirou", id: "memungut", hira: "ひろう", kanji: "拾う *N2" },
    { jp: "maniau", id: "(waktunya) keburu / tepat waktu", hira: "まにあう", kanji: "間に合う *N5" },
    { jp: "kayou", id: "pulang-pergi", hira: "かよう", kanji: "通う *N4" },
  ];

  const AkhiranTsu = [
    { jp: "katsu", id: "menang", hira: "かつ", kanji: "勝つ *N3" },
    { jp: "tatsu", id: "mendirikan", hira: "たつ", kanji: "建つ *N4" },
    { jp: "yaku ni tatsu", id: "berguna", hira: "やくにたつ", kanji: "役に立つ *N3" },
    { jp: "utsu", id: "menembak / terkena", hira: "うつ", kanji: "打つ *N3" },
  ];

  const AkhiranRu = [
    { jp: "okuru", id: "mengirim", hira: "おくる", kanji: "送る *N4" },
    { jp: "uru", id: "menjual", hira: "うる", kanji: "売る *N4" },
    { jp: "okoru", id: "terjadi", hira: "おこる", kanji: "起こる *N4" },
    { jp: "okoru", id: "marah", hira: "おこる", kanji: "怒る *N3" },
    { jp: "shikaru", id: "memarahi", hira: "しかる", kanji: "叱る" },
    { jp: "ayamaru", id: "meminta maaf", hira: "あやまる", kanji: "謝る *N1" },
    { jp: "kimaru", id: "ditentukan", hira: "きまる", kanji: "決まる *N3" },
    { jp: "komaru", id: "repot", hira: "こまる", kanji: "困る *N3" },
    { jp: "tomaru", id: "berhenti", hira: "とまる", kanji: "止まる *N4" },
    { jp: "tomaru", id: "menginap", hira: "とまる", kanji: "泊まる *N2" },
    { jp: "kazaru", id: "menghiasi", hira: "かざる", kanji: "飾る *N1" },
    { jp: "kawaru", id: "berubah", hira: "かわる", kanji: "変わる *N3" },
    { jp: "sawaru", id: "menyentuh", hira: "さわる", kanji: "触る *N2" },
    { jp: "odoru", id: "menari", hira: "おどる", kanji: "踊る *N2" },
    { jp: "keru", id: "menendang", hira: "ける", kanji: "蹴る" },
    { jp: "naguru", id: "memukul", hira: "なぐる", kanji: "殴る *N1" },
    { jp: "butsukaru", id: "menabrak", hira: "ぶつかる" },
    { jp: "magaru", id: "berbelok", hira: "まがる", kanji: "曲がる *N3" },
    { jp: "ganbaru", id: "melakukan yang terbaik", hira: "がんばる", kanji: "頑張る *N1" },
    { jp: "tasukaru", id: "terbantu", hira: "たすかる", kanji: "助かる *N3" },
    { jp: "naoru", id: "sembuh", hira: "なおる", kanji: "治る *N3" },
    { jp: "tsuru", id: "memancing", hira: "つる", kanji: "釣る *N1" },
    { jp: "suberu", id: "terpeleset", hira: "すべる", kanji: "滑る *N1" },
    { jp: "shimaru", id: "tertutup", hira: "しまる", kanji: "閉まる *N3" },
    { jp: "tsukamaru", id: "tertangkap", hira: "つかまる", kanji: "捕まる *N3" },
    { jp: "nokoru", id: "tersisa", hira: "のこる", kanji: "残る *N3" },
    { jp: "hashiru", id: "berlari", hira: "はしる", kanji: "走る *N4" },
    { jp: "wataru", id: "menyeberang", hira: "わたる", kanji: "渡る *N3" },
    { jp: "haru", id: "menempel", hira: "はる", kanji: "貼る" },
    { jp: "heru", id: "berkurang", hira: "へる", kanji: "減る *N2" },
    { jp: "naru", id: "berbunyi", hira: "なる", kanji: "鳴る *N3" },
    { jp: "modoru", id: "kembali", hira: "もどる", kanji: "戻る *N3" },
    { jp: "okuru", id: "memberi (hadiah)", hira: "おくる", kanji: "贈る *N2" },
    { jp: "oru", id: "mematahkan", hira: "おる", kanji: "折る *N3" },
    { jp: "inoru", id: "berdoa", hira: "いのる", kanji: "祈る *N2" },
    { jp: "waru", id: "memecahkan", hira: "わる", kanji: "割る *N3" },
    { jp: "yaburu", id: "menghancurkan", hira: "やぶる", kanji: "破る *N3" },
    { jp: "mitsukaru", id: "menemukan", hira: "みつかる", kanji: "見つかる *N5" },
    { jp: "utsuru", id: "pindah", hira: "うつる", kanji: "移る *N2" },
    { jp: "nuru", id: "mengolesi / mengecat", hira: "ぬる", kanji: "塗る *N2" },
    { jp: "tooru", id: "melewati", hira: "とおる", kanji: "通る *N4" },
    { jp: "futoru", id: "menjadi gemuk", hira: "ふとる", kanji: "太る *N3" },
    { jp: "mazaru", id: "bercampur", hira: "まざる", kanji: "混ざる *N2" },
    { jp: "nakunaru", id: "menghilang", hira: "なくなる", kanji: "無くなる *N2" },
    { jp: "nakunaru", id: "meninggal", hira: "なくなる", kanji: "亡くなる *N3" },
    { jp: "kagi ga kakaru", id: "terkunci", hira: "かぎがかかる", kanji: "鍵がかかる" },
    { jp: "kakaru", id: "tergantung / menggantung", hira: "かかる", kanji: "掛かる *N3" },
    { jp: "osewa ni naru", id: "dibantu", hira: "おせわになる", kanji: "お世話になる *N4" },
    { jp: "hajimaru", id: "mulai", hira: "はじまる", kanji: "始まる *N4" },
    { jp: "yoru", id: "berkunjung", hira: "よる", kanji: "寄る *N3" },
    { jp: "yoko ni naru", id: "berbaring", hira: "よこになる", kanji: "横になる *N3" },
    { jp: "mamoru", id: "melindungi", hira: "まもる", kanji: "守る *N3" },
    { jp: "kusaru", id: "menjadi bau", hira: "くさる", kanji: "腐る *N1" },
  ];

  const AkhiranMu = [
    { jp: "fumu", id: "menginjak", hira: "ふむ", kanji: "踏む *N1" },
    { jp: "susumu", id: "maju", hira: "すすむ", kanji: "進む *N3" },
    { jp: "ochikomu", id: "sedih", hira: "おちこむ", kanji: "落ち込む *N3" },
    { jp: "kamu", id: "menggigit", hira: "かむ" },
    { jp: "yamu", id: "berhenti", hira: "やむ" },
    { jp: "amu", id: "merajut", hira: "あむ", kanji: "編む *N2" },
    { jp: "komu", id: "padat / ramai", hira: "こむ", kanji: "混む *N2" },
    { jp: "nusumu", id: "mencuri", hira: "ぬすむ", kanji: "盗む *N3" },
    { jp: "moushikomu", id: "mendaftar", hira: "もうしこむ", kanji: "申し込む" },
    { jp: "tanomu", id: "memohon", hira: "たのむ", kanji: "頼む *N3" },
    { jp: "tanoshimu", id: "menikmati", hira: "たのしむ", kanji: "楽しむ *N4" },
    { jp: "tsutsumu", id: "membungkus", hira: "つつむ", kanji: "包む *N2" },
  ];

  const AkhiranBu = [
    { jp: "narabu", id: "berjejer", hira: "ならぶ", kanji: "並ぶ *N2" },
    { jp: "hakobu", id: "membawa", hira: "はこぶ", kanji: "運ぶ *N4" },
    { jp: "yorokobu", id: "senang", hira: "よろこぶ", kanji: "喜ぶ *N3" },
    { jp: "yobu", id: "memanggil", hira: "よぶ", kanji: "呼ぶ *N3" },
    { jp: "tobu", id: "terbang", hira: "とぶ", kanji: "飛ぶ *N3" },
    { jp: "erabu", id: "memilih", hira: "えらぶ", kanji: "選ぶ *N3" },
  ];

  const AkhiranKu = [
    { jp: "aku / hiraku", id: "membuka", hira: "あく・ひらく", kanji: "開く *N4" },
    { jp: "aruku", id: "berjalan", hira: "あるく", kanji: "歩く *N4" },
    { jp: "ugoku", id: "bergerak", hira: "うごく", kanji: "動く *N4" },
    { jp: "naku", id: "menangis", hira: "なく", kanji: "泣く *N1" },
    { jp: "kaku", id: "menggambar", hira: "かく", kanji: "描く *N1" },
    { jp: "oku", id: "meletakkan", hira: "おく", kanji: "置く *N3" },
    { jp: "saku", id: "bermekaran", hira: "さく", kanji: "咲く *N2" },
    { jp: "tsuku", id: "tiba", hira: "つく", kanji: "着く *N4" },
    { jp: "uso wo tsuku", id: "berbohong", hira: "うそをつく", kanji: "嘘をつく" },
    { jp: "hiku", id: "menarik", hira: "ひく", kanji: "引く *N3" },
    { jp: "kaze wo hiku", id: "masuk angin", hira: "かぜをひく", kanji: "風邪を引く *N1" },
    { jp: "migaku", id: "menggosok", hira: "みがく", kanji: "磨く *N2" },
    { jp: "fuku", id: "meniup", hira: "ふく", kanji: "吹く *N3" },
    { jp: "ki ga tsuku", id: "menyadari", hira: "きがつく", kanji: "気が付く *N5" },
    { jp: "tsurete iku", id: "mengajak pergi", hira: "つれていく", kanji: "連れて行く *N3" },
    { jp: "mukae ni iku", id: "pergi menjemput", hira: "むかえにいく", kanji: "迎えに行く *N3" },
    { jp: "suku", id: "kosong", hira: "すく", kanji: "空く *N4" },
    { jp: "katadzuku", id: "membereskan", hira: "かたづく", kanji: "片付く *N2" },
    { jp: "odoroku", id: "terkejut", hira: "おどろく", kanji: "驚く *N1" },
    { jp: "tsudzuku", id: "berlanjut", hira: "つづく", kanji: "続く *N3" },
    { jp: "waku", id: "mendidih", hira: "わく", kanji: "沸く *N1" },
    { jp: "yaku", id: "membakar", hira: "やく", kanji: "焼く *N2" },
    { jp: "kawaku", id: "kering", hira: "かわく", kanji: "乾く *N2" },
  ];

  const renderTable = (data: Kosakata[]) => (
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
        <Text style={styles.title}>Kosakata golongan 1 JLPT N5 (dipisah berdasarkan akhiran)</Text>
  
        {/* Gambar */}
        
        <Text style={styles.caption}>
          Berikut ini adalah beberapa contoh kosakata golongan 1 JLPT N5 (dipisah berdasarkan akhiran) dalam bahasa Jepang.
        </Text>
  
        <Text style={styles.subTitle}>Akhiran U</Text>
        {renderTable(AkhiranU)}
  
        <Text style={styles.subTitle}>Akhiran Tsu</Text>
        {renderTable(AkhiranTsu)}
  
        <Text style={styles.subTitle}>Akhiran Ru</Text>
        {renderTable(AkhiranRu)}
  
        <Text style={styles.subTitle}>Akhiran Mu</Text>
        {renderTable(AkhiranMu)}

        <Text style={styles.subTitle}>Akhiran Ku</Text>
        {renderTable(AkhiranKu)}

        <Text style={styles.subTitle}>Akhiran BU</Text>
        {renderTable(AkhiranBu)}
  
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
  