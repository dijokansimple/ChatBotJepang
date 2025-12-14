import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

// Tipe data untuk kosakata Kata Kerja Golongan 2
type VerbGroup2 = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

// Data kosakata Golongan 2 JLPT N4
const kataKerjaGol2: VerbGroup2[] = [
  { jp: "atsumeru", id: "mengumpulkan", hira: "あつめる", kanji: "集める *N4" },
  { jp: "ijimeru", id: "membully", hira: "いじめる" },
  { jp: "ireru", id: "memasukkan", hira: "いれる", kanji: "入れる *N5" },
  { jp: "(ocha wo) ireru", id: "membuat teh", hira: "（おちゃを）いれる", kanji: "（お茶を）入れる *N4" },
  { jp: "ueru", id: "menanam", hira: "うえる", kanji: "植える *N2" },
  { jp: "ukeru", id: "mengikuti", hira: "うける", kanji: "受ける *N3" },
  { jp: "umareru", id: "lahir", hira: "うまれる", kanji: "生まれる・産まれる *N3" },
  { jp: "ikiru", id: "hidup", hira: "いきる", kanji: "生きる *N5" },
  { jp: "okureru", id: "terlambat", hira: "おくれる", kanji: "遅れる *N3" },
  { jp: "ochiru", id: "jatuh", hira: "おちる", kanji: "落ちる *N3" },
  { jp: "oboeru", id: "ingat", hira: "おぼえる", kanji: "覚える *N3" },
  { jp: "kaeru", id: "mengubah", hira: "かえる", kanji: "変える *N3" },
  { jp: "katadzukeru", id: "merapikan / membereskan", hira: "かたづける", kanji: "片付ける *N2" },
  { jp: "kieru", id: "menghilang", hira: "きえる", kanji: "消える *N3" },
  { jp: "kangaeru", id: "berpikir", hira: "かんがえる", kanji: "考える *N4" },
  { jp: "kigaeru", id: "mengganti (pakaian)", hira: "きがえる", kanji: "着替える *N2" },
  { jp: "kikoeru", id: "terdengar", hira: "きこえる", kanji: "聞こえる *N5" },
  { jp: "kimeru", id: "memutuskan / menentukan", hira: "きめる", kanji: "決める *N3" },
  { jp: "ki wo tsukeru", id: "berhati-hati", hira: "きをつける", kanji: "気を付ける *N4" },
  { jp: "kuraberu", id: "membandingkan", hira: "くらべる", kanji: "比べる *N2" },
  { jp: "kowareru", id: "rusak", hira: "こわれる", kanji: "壊れる *N1" },
  { jp: "shiraseru", id: "memberitahu", hira: "しらせる", kanji: "知らせる *N4" },
  { jp: "shiraberu", id: "mencari tahu", hira: "しらべる", kanji: "調べる *N3" },
  { jp: "shinjiru", id: "percaya", hira: "しんじる", kanji: "信じる *N3" },
  { jp: "suteru", id: "membuang", hira: "すてる", kanji: "捨てる *N2" },
  { jp: "sodateru", id: "menumbuhkan / mendidik", hira: "そだてる", kanji: "育てる *N3" },
  { jp: "taoreru", id: "terjatuh", hira: "たおれる", kanji: "倒れる *N3" },
  { jp: "tasukeru", id: "menolong", hira: "たすける", kanji: "助ける *N3" },
  { jp: "tateru", id: "mendirikan", hira: "たてる", kanji: "立てる *N4" },
  { jp: "tateru", id: "membangun (bangunan)", hira: "たてる", kanji: "建てる *N4" },
  { jp: "tariru", id: "cukup", hira: "たりる", kanji: "足りる *N4" },
  { jp: "tsukamaeru", id: "menangkap", hira: "つかまえる", kanji: "捕まえる *N3" },
  { jp: "tsutaeru", id: "menyampaikan", hira: "つたえる", kanji: "伝える *N3" },
  { jp: "tsudzukeru", id: "melanjutkan", hira: "つづける", kanji: "続ける *N3" },
  { jp: "todokeru", id: "membawakan", hira: "とどける", kanji: "届ける *N2" },
  { jp: "nareru", id: "terbiasa", hira: "なれる", kanji: "慣れる *N3" },
  { jp: "nigeru", id: "kabur", hira: "にげる", kanji: "逃げる *N3" },
  { jp: "niru", id: "mirip", hira: "にる", kanji: "似る *N3" },
  { jp: "norikaeru", id: "pindah (naik kendaraan)", hira: "のりかえる", kanji: "乗り換える *N3" },
  { jp: "noriokureru", id: "terlambat (naik kendaraan)", hira: "のりおくれる", kanji: "乗り遅れる *N3" },
  { jp: "hareru", id: "cerah", hira: "はれる", kanji: "晴れる *N3" },
  { jp: "homeru", id: "memuji", hira: "ほめる", kanji: "褒める *N1" },
  { jp: "makeru", id: "kalah", hira: "まける", kanji: "負ける *N3" },
  { jp: "machigaeru", id: "salah", hira: "まちがえる", kanji: "間違える *N3" },
  { jp: "mieru", id: "terlihat", hira: "みえる", kanji: "見える *N5" },
  { jp: "miseru", id: "memperlihatkan", hira: "みせる", kanji: "見せる *N5" },
  { jp: "mitsukeru", id: "menemukan", hira: "みつける", kanji: "見つける *N5" },
  { jp: "moteru", id: "populer (di kalangan lawan jenis)", hira: "もてる" },
  { jp: "shimeru", id: "mengikat / mengencangkan", hira: "しめる", kanji: "締める *N1" },
  { jp: "yaseru", id: "menjadi kurus", hira: "やせる", kanji: "痩せる" },
  { jp: "yameru", id: "berhenti", hira: "やめる", kanji: "辞める *N3" },
  { jp: "tomeru", id: "memberhentikan", hira: "とめる", kanji: "止める *N4" },
  { jp: "yogoreru", id: "kotor", hira: "よごれる", kanji: "汚れる *N2" },
  { jp: "(kagi wo) kakeru", id: "mengunci", hira: "（かぎを）かける", kanji: "（鍵を）かける" },
  { jp: "(shinpai wo) kakeru", id: "membuat khawatir", hira: "（しんぱいを）かける", kanji: "（心配を）かける *N3" },
  { jp: "kakeru", id: "menggantungkan", hira: "かける", kanji: "掛ける *N3" },
  { jp: "(isu ni) kakeru", id: "duduk (di kursi)", hira: "（いすに）かける", kanji: "（椅子に）かける" },
  { jp: "ageru", id: "menaikkan", hira: "あげる", kanji: "上げる *N5" },
  { jp: "ageru", id: "memberi", hira: "あげる" },
  { jp: "kureru", id: "menerima (pihak saya)", hira: "くれる" },
  { jp: "tsukeru", id: "menghidupkan / menambahkan", hira: "つける", kanji: "付ける *N3" },
  { jp: "okiru", id: "bangun", hira: "おきる", kanji: "起きる *N4" },
  { jp: "deru", id: "keluar", hira: "でる", kanji: "出る *N3" },
  { jp: "hajimeru", id: "memulai", hira: "はじめる", kanji: "始める *N4" },
  { jp: "kotaeru", id: "menjawab", hira: "こたえる", kanji: "答える *N4" },
  { jp: "matomeru", id: "meringkas", hira: "まとめる" },
  { jp: "tashikameru", id: "memastikan", hira: "たしかめる", kanji: "確かめる *N3" },
  { jp: "tsutomeru", id: "bekerja", hira: "つとめる", kanji: "勤める *N3" },
  { jp: "atatameru", id: "menghangatkan", hira: "あたためる", kanji: "温める *N2" },
  { jp: "hieru", id: "dingin", hira: "ひえる", kanji: "冷える *N3" },
  { jp: "kazoeru", id: "menghitung", hira: "かぞえる", kanji: "数える *N3" },
  { jp: "torikaeru", id: "mengganti (suatu benda)", hira: "とりかえる", kanji: "取りかえる *N3" },
  { jp: "ureru", id: "terjual", hira: "うれる", kanji: "売れる *N4" },
  { jp: "nureru", id: "basah", hira: "ぬれる", kanji: "濡れる" },
  { jp: "sugiru", id: "terlalu", hira: "すぎる", kanji: "過ぎる *N3" },
  { jp: "tazuneru", id: "berkunjung", hira: "たずねる・おとずれる", kanji: "訪ねる *N3" },
  { jp: "tazuneru", id: "bertanya", hira: "たずねる", kanji: "尋ねる *N1" },
  { jp: "oriru", id: "turun", hira: "おりる", kanji: "降りる *N3" },
  { jp: "wakareru", id: "putus", hira: "わかれる", kanji: "別れる *N4" },
  { jp: "yakeru", id: "terbakar", hira: "やける", kanji: "焼ける *N2" },
  { jp: "naraberu", id: "menjejerkan", hira: "ならべる", kanji: "並べる *N2" },
  { jp: "nageru", id: "melempar", hira: "なげる", kanji: "投げる *N3" },
  { jp: "wareru", id: "pecah", hira: "われる", kanji: "割れる *N3" },
  { jp: "oreru", id: "patah", hira: "おれる", kanji: "折れる *N3" },
  { jp: "yabureru", id: "hancur", hira: "やぶれる", kanji: "破れる *N3" },
  { jp: "fueru", id: "bertambah", hira: "ふえる", kanji: "増える *N3" },
];

// Contoh kalimat
const contohKalimat = [
  {
    jp: "Watashi wa kare wo shinjite imasu.",
    kanji: "私は彼を信じています。",
    romaji: "わたしは　かれを　しんじて　います。",
    id: "Saya percaya dengan dia (laki-laki).",
  },
  {
    jp: "Ashita wa hareru deshou。",
    kanji: "明日は晴れるでしょう。",
    romaji: "あしたは　はれる　でしょう。",
    id: "Besok mungkin akan cerah.",
  },
  {
    jp: "Raishuu no barentain dee ni, kareshi ni chokoreeto wo ageru tsumori da。",
    kanji: "来週のバレンタインデーに、彼氏にチョコレートをあげるつもりだ。",
    romaji:
      "らいしゅうの　バレンタインデーに、　かれしに　チョコレートを　あげる　つもりだ。",
    id: "Aku berencana memberikan cokelat ke pacar (laki-laki).",
  },
  {
    jp: "Inaka yori, tokai de shigoto wo mitsukeru hou ga kantan desu。",
    kanji: "田舎より、都会で仕事を見つけるほうが簡単です。",
    romaji:
      "いなか　より、　とかいで　しごとを　みつける　ほうが　かんたんです。",
    id: "Di kota lebih mudah mencari pekerjaan dibanding di desa.",
  },
  {
    jp: "Shinpai wo kakete gomennasai。",
    kanji: "心配をかけてごめんなさい。",
    romaji: "しんぱいを　かけて　ごめんなさい。",
    id: "Maaf telah membuat khawatir.",
  },
];

// Render table
const renderTable = (data: VerbGroup2[]) => (
  <View style={styles.table}>
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Jepang</Text>
      <Text style={[styles.cell, styles.headerCell]}>Bahasa Indonesia</Text>
      <Text style={[styles.cell, styles.headerCell]}>Hiragana</Text>
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

// Render examples
const renderExamples = (examples: any[]) => (
  <View style={styles.examples}>
    {examples.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>
        <Text style={styles.exampleText}>Romaji: {ex.romaji}</Text>
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

export default function KataKerjaGol2Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Kerja Golongan 2 Bahasa Jepang</Text>

      

      <Text style={styles.caption}>
        Kata kerja golongan 2 adalah kosakata yang berakhiran **ru**
        (terutama **eru** dan **iru**). Berikut ini adalah beberapa contoh
        kosakata kata kerja Golongan 2 JLPT N4.
      </Text>

      {renderTable(kataKerjaGol2)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Selanjutnya, agar lebih mudah mengingat kosakata kata kerja golongan 2,
        mari perhatikan contoh kalimat berikut ini.
      </Text>

      {renderExamples(contohKalimat)}
    </ScrollView>
  );
}

// Styles
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
  examples: {
    marginBottom: 40,
  },
  exampleBox: {
    backgroundColor: "#ffffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 2,
    color: "#000000ff",
  },
  
});
