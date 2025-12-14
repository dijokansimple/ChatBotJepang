import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

type VocabItem = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function KataKerjaGol1() {
  const gol1: { [key: string]: VocabItem[] } = {
    "Akhiran u": [
      { jp: "au", id: "bertemu", hira: "あう", kanji: "会う *N4" },
      { jp: "kau", id: "membeli", hira: "かう", kanji: "買う *N4" },
      { jp: "suu", id: "menghisap", hira: "すう", kanji: "吸う *N3" },
      { jp: "narau", id: "mempelajari", hira: "ならう", kanji: "習う *N4" },
      { jp: "warau", id: "tertawa", hira: "わらう", kanji: "笑う *N3" },
      { jp: "morau", id: "menerima", hira: "もらう", kanji: "貰う" },
      { jp: "tetsudau", id: "membantu", hira: "てつだう", kanji: "手伝う *N3" },
      { jp: "arau", id: "mencuci", hira: "あらう", kanji: "洗う *N3" },
      { jp: "iu", id: "mengatakan", hira: "いう", kanji: "言う *N4" },
      { jp: "tsukau", id: "menggunakan", hira: "つかう", kanji: "使う *N4" },
      { jp: "harau", id: "membayar", hira: "はらう", kanji: "払う *N3" },
      { jp: "omou", id: "menurut pendapat", hira: "おもう", kanji: "思う *N4" },
    ],
    "Akhiran tsu": [
      { jp: "matsu", id: "menunggu", hira: "まつ", kanji: "待つ *N4" },
      { jp: "motsu", id: "membawa", hira: "もつ", kanji: "持つ *N4" },
      { jp: "katsu", id: "menang", hira: "かつ", kanji: "勝つ *N3" },
      { jp: "tatsu", id: "berdiri", hira: "たつ", kanji: "立つ *N4" },
      { jp: "yaku ni tatsu", id: "berguna", hira: "やくにたつ", kanji: "役に立つ *N3" },
    ],
    "Akhiran ru": [
      { jp: "kaeru", id: "pulang", hira: "かえる", kanji: "帰る *N4" },
      { jp: "suwaru", id: "duduk", hira: "すわる", kanji: "座る *N3" },
      { jp: "toru", id: "mengambil (foto)", hira: "とる", kanji: "撮る *N1" },
      { jp: "toru", id: "mengambil", hira: "とる", kanji: "取る *N3" },
      { jp: "okuru", id: "mengirim", hira: "おくる", kanji: "送る *N4" },
      { jp: "tsukuru", id: "membuat", hira: "つくる", kanji: "作る *N4" },
      { jp: "kiru", id: "memotong", hira: "きる", kanji: "切る *N4" },
      { jp: "shiru", id: "tahu", hira: "しる", kanji: "知る *N4" },
      { jp: "wakaru", id: "memahami", hira: "わかる" },
      { jp: "kaburu", id: "memakai (di kepala)", hira: "かぶる" },
      { jp: "uru", id: "menjual", hira: "うる", kanji: "売る *N4" },
      { jp: "okoru", id: "marah", hira: "おこる", kanji: "怒る *N3" },
      { jp: "shikaru", id: "memarahi", hira: "しかる", kanji: "叱る" },
      { jp: "tomaru", id: "menginap", hira: "とまる", kanji: "泊まる *N2" },
      { jp: "tomaru", id: "berhenti", hira: "とまる", kanji: "止まる *N4" },
      { jp: "hairu", id: "masuk", hira: "はいる", kanji: "入る *N5" },
      { jp: "hashiru", id: "berlari", hira: "はしる", kanji: "走る *N4" },
      { jp: "wataru", id: "menyeberang", hira: "わたる", kanji: "渡る *N3" },
      { jp: "tooru", id: "melewati", hira: "とおる", kanji: "通る *N4" },
      { jp: "magaru", id: "berbelok", hira: "まがる", kanji: "曲がる *N3" },
      { jp: "hajimaru", id: "mulai", hira: "はじまる", kanji: "始まる *N4" },
      { jp: "owaru", id: "selesai", hira: "おわる", kanji: "終わる *N4" },
      { jp: "kakaru", id: "memerlukan (waktu)", hira: "かかる" },
      { jp: "furu", id: "turun", hira: "ふる", kanji: "降る *N3" },
      { jp: "noboru", id: "naik", hira: "のぼる", kanji: "登る・上る *N3" },
      { jp: "odoru", id: "menari", hira: "おどる", kanji: "踊る *N2" },
    ],
    "Akhiran mu": [
      { jp: "nomu", id: "minum", hira: "のむ", kanji: "飲む *N4" },
      { jp: "yomu", id: "membaca", hira: "よむ", kanji: "読む *N5" },
      { jp: "sumu", id: "tinggal", hira: "すむ", kanji: "住む *N4" },
      { jp: "yasumu", id: "istirahat", hira: "やすむ", kanji: "休む *N5" },
    ],
    "Akhiran nu": [
      { jp: "shinu", id: "mati", hira: "しぬ", kanji: "死ぬ *N4" },
    ],
    "Akhiran bu": [
      { jp: "asobu", id: "bermain", hira: "あそぶ", kanji: "遊ぶ *N3" },
      { jp: "yobu", id: "memanggil", hira: "よぶ", kanji: "呼ぶ *N3" },
      { jp: "hakobu", id: "membawa", hira: "はこぶ", kanji: "運ぶ *N4" },
      { jp: "tobu", id: "terbang", hira: "とぶ", kanji: "飛ぶ *N3" },
    ],
    "Akhiran ku": [
      { jp: "iku", id: "pergi", hira: "いく", kanji: "行く *N5" },
      { jp: "hataraku", id: "bekerja", hira: "はたらく", kanji: "働く *N3" },
      { jp: "kiku", id: "mendengarkan", hira: "きく", kanji: "聞く *N5" },
      { jp: "kaku", id: "menulis", hira: "かく", kanji: "書く *N5" },
      { jp: "hiku", id: "menarik", hira: "ひく", kanji: "引く *N3" },
      { jp: "hiku", id: "memetik/memainkan (alat musik)", hira: "ひく", kanji: "弾く *N1" },
      { jp: "naku", id: "menangis", hira: "なく", kanji: "泣く *N1" },
      { jp: "kawaku", id: "kering/haus", hira: "かわく", kanji: "乾く・渇く *N2" },
      { jp: "migaku", id: "menggosok", hira: "みがく", kanji: "磨く *N2" },
      { jp: "suku", id: "kosong", hira: "すく", kanji: "空く *N4" },
      { jp: "aruku", id: "berjalan", hira: "あるく", kanji: "歩く *N4" },
      { jp: "tsuku", id: "tiba", hira: "つく", kanji: "着く *N4" },
      { jp: "ugoku", id: "bergerak", hira: "うごく", kanji: "動く *N4" },
      { jp: "umaku iku", id: "berjalan lancar", hira: "うまくいく" },
      { jp: "haku", id: "memakai (pakaian bawahan)", hira: "はく", kanji: "履く *N1" },
    ],
    "Akhiran gu": [
      { jp: "oyogu", id: "berenang", hira: "およぐ", kanji: "泳ぐ *N3" },
      { jp: "nugu", id: "menanggalkan/melepaskan", hira: "ぬぐ", kanji: "脱ぐ *N1" },
      { jp: "isogu", id: "bergegas", hira: "いそぐ", kanji: "急ぐ *N4" },
    ],
    "Akhiran su": [
      { jp: "hanasu", id: "berbicara", hira: "はなす", kanji: "話す *N5" },
      { jp: "kaesu", id: "mengembalikan", hira: "かえす", kanji: "返す *N3" },
      { jp: "nakusu", id: "menghilangkan", hira: "なくす" },
      { jp: "naosu", id: "memperbaiki", hira: "なおす", kanji: "直す *N3" },
      { jp: "kasu", id: "meminjamkan", hira: "かす", kanji: "貸す *N4" },
      { jp: "watasu", id: "menyerahkan", hira: "わたす", kanji: "渡す *N3" },
      { jp: "kesu", id: "menghapus", hira: "けす", kanji: "消す *N3" },
      { jp: "sagasu", id: "mencari", hira: "さがす", kanji: "探す *N3" },
      { jp: "mawasu", id: "memutar", hira: "まわす", kanji: "回す *N3" },
      { jp: "dasu", id: "mengeluarkan/mengumpulkan", hira: "だす", kanji: "出す *N5" },
      { jp: "omoidasu", id: "mengingat", hira: "おもいだす", kanji: "思い出す *N4" },
    ],
  };

  const renderTable = (data: VocabItem[]) => (
    <View style={styles.table}>
      <View style={[styles.row, styles.headerRow]}>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
        <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
        <Text style={[styles.cell, styles.headerCell]}>Hiragana / Katakana</Text>
        <Text style={[styles.cell, styles.headerCell]}>Kanji *JLPT</Text>
      </View>

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
      <Text style={styles.title}>Kosakata Kata Kerja Golongan 1</Text>
      <Text style={styles.caption}>
        Kosakata kata kerja golongan 1 adalah yang berakhiran u, tsu, ru, mu, nu, bu, ku, gu, dan su.
      </Text>

      {Object.entries(gol1).map(([suffix, data]) => (
        <>
          <Text key={suffix} style={styles.subTitle}>{suffix}</Text>
          {renderTable(data)}
        </>
      ))}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.example}>Mainichi, eigo de sakubun wo kaku.</Text>
      <Text style={styles.example}>毎日、英語で作文を書く。</Text>
      <Text style={styles.example}>まいにち、えいごで　さくぶんを　かく。</Text>
      <Text style={styles.example}>→ Setiap hari, (saya) menulis esai dengan bahasa Inggris.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#dff3ee" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 16, textAlign: "center", color: "#0F3B36" },
  subTitle: { fontSize: 18, fontWeight: "600", marginVertical: 12, color: "#0F3B36" },
  caption: { fontSize: 16, textAlign: "left", marginBottom: 20, color: "#333" },
  table: { marginBottom: 20 },
  row: { flexDirection: "row", paddingVertical: 8, paddingHorizontal: 4, borderRadius: 6, alignItems: "center" },
  headerRow: { backgroundColor: "#F7A6A6" },
  headerCell: { fontWeight: "bold", color: "white", flex: 1, textAlign: "center" },
  rowEven: { backgroundColor: "#eaf1ff" },
  rowOdd: { backgroundColor: "#ffffff" },
  cell: { flex: 1, textAlign: "center", fontSize: 14, paddingHorizontal: 2 },
  example: { fontSize: 16, marginVertical: 6, color: "#333" },
});
