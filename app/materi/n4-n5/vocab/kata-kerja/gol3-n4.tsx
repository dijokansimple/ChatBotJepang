import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

type VocabItem = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

export default function KataKerjaGol3() {
  const gol3: VocabItem[] = [
    { jp: "shinpai suru", id: "khawatir", hira: "しんぱいする", kanji: "心配する *N3" },
    { jp: "anshin suru", id: "tenang", hira: "あんしんする", kanji: "安心する *N4" },
    { jp: "bikkuri suru", id: "terkejut", hira: "びっくりする", kanji: "-" },
    { jp: "gakkari suru", id: "kecewa", hira: "がっかりする", kanji: "-" },
    { jp: "shitsumon suru", id: "bertanya", hira: "しつもんする", kanji: "質問する *N4" },
    { jp: "yoyaku suru", id: "melakukan reservasi", hira: "よやくする", kanji: "予約する *N3" },
    { jp: "chuumon suru", id: "memesan", hira: "ちゅうもんする", kanji: "注文する *N4" },
    { jp: "memo suru", id: "membuat catatan", hira: "メモする", kanji: "-" },
    { jp: "annai suru", id: "memandu", hira: "あんないする", kanji: "案内する *N1" },
    { jp: "enryo suru", id: "sungkan", hira: "えんりょする", kanji: "遠慮する *N1" },
    { jp: "sonkei suru", id: "menghormati", hira: "そんけいする", kanji: "尊敬する *N2" },
    { jp: "aisatsu suru", id: "menyapa", hira: "あいさつする", kanji: "挨拶する" },
    { jp: "shusseki suru", id: "hadir", hira: "しゅっせきする", kanji: "出席する *N3" },
    { jp: "kesseki suru", id: "tidak hadir", hira: "けっせきする", kanji: "欠席する *N3" },
    { jp: "soudan suru", id: "berkonsultasi", hira: "そうだんする", kanji: "相談する *N3" },
    { jp: "seisan suru", id: "memproduksi", hira: "せいさんする", kanji: "生産する *N3" },
    { jp: "yunyuu suru", id: "impor", hira: "ゆにゅうする", kanji: "輸入する *N2" },
    { jp: "yushutsu suru", id: "ekspor", hira: "ゆしゅつする", kanji: "輸出する *N2" },
    { jp: "keikaku suru", id: "merencanakan", hira: "けいかくする", kanji: "計画する *N4" },
    { jp: "unten suru", id: "mengemudi", hira: "うんてんする", kanji: "運転する *N4" },
    { jp: "youi suru", id: "menyiapkan", hira: "よういする", kanji: "用意する *N4" },
    { jp: "junbi suru", id: "menyiapkan", hira: "じゅんびする", kanji: "準備する *N2" },
    { jp: "shitaku suru", id: "menyiapkan", hira: "したくする", kanji: "支度する *N3" },
    { jp: "kyousou suru", id: "bersaing", hira: "きょうそうする", kanji: "競争する *N2" },
    { jp: "nyuuin suru", id: "masuk rumah sakit", hira: "にゅういんする", kanji: "入院する *N4" },
    { jp: "taiin suru", id: "keluar rumah sakit", hira: "たいいんする", kanji: "退院する *N3" },
    { jp: "setsumei suru", id: "menjelaskan", hira: "せつめいする", kanji: "説明する *N3" },
    { jp: "nyuugaku suru", id: "masuk sekolah", hira: "にゅうがくする", kanji: "入学する *N5" },
    { jp: "sotsugyou suru", id: "lulus sekolah", hira: "そつぎょうする", kanji: "卒業する *N2" },
    { jp: "kakunin suru", id: "memastikan", hira: "かくにんする", kanji: "確認する *N3" },
    { jp: "renraku suru", id: "menghubungi", hira: "れんらくする", kanji: "連絡する *N3" },
    { jp: "kenkyuu suru", id: "meneliti", hira: "けんきゅうする", kanji: "研究する *N4" },
    { jp: "jikken suru", id: "melakukan percobaan", hira: "じっけんする", kanji: "実験する *N3" },
    { jp: "sentaku suru", id: "mencuci", hira: "せんたくする", kanji: "洗濯する *N2" },
    { jp: "goukaku suru", id: "lulus", hira: "ごうかくする", kanji: "合格する *N3" },
    { jp: "kandou suru", id: "tersentuh", hira: "かんどうする", kanji: "感動する *N3" },
    { jp: "rikon suru", id: "bercerai", hira: "りこんする", kanji: "離婚する *N1" },
    { jp: "keshou suru", id: "berias / make up", hira: "けしょうする", kanji: "化粧する *N3" },
    { jp: "shippai suru", id: "gagal", hira: "しっぱいする", kanji: "失敗する *N3" },
    { jp: "gaman suru", id: "bersabar / menahan", hira: "がまんする", kanji: "我慢する *N1" },
    { jp: "ryuugaku suru", id: "sekolah ke luar negeri", hira: "りゅうがくする", kanji: "留学する *N3" },
    { jp: "fukushuu suru", id: "mengulang belajar", hira: "ふくしゅうする", kanji: "復習する *N2" },
    { jp: "yoshuu suru", id: "belajar persiapan", hira: "よしゅうする", kanji: "予習する *N3" },
    { jp: "kyouiku suru", id: "mendidik", hira: "きょういくする", kanji: "教育する *N3" },
    { jp: "kinchou suru", id: "gugup", hira: "きんちょうする", kanji: "緊張する *N1" },
    { jp: "shoukai suru", id: "memperkenalkan", hira: "しょうかいする", kanji: "紹介する *N2" },
    { jp: "houmon suru", id: "mengunjungi", hira: "ほうもんする", kanji: "訪問する *N3" },
    { jp: "shoutai suru", id: "mengundang", hira: "しょうたいする", kanji: "招待する *N3" },
    { jp: "seikatsu suru", id: "hidup / menjalani aktivitas", hira: "せいかつする", kanji: "生活する *N3" },
    { jp: "sewa wo suru", id: "mengurusi", hira: "せわをする", kanji: "世話をする *N4" },
    { jp: "daietto suru", id: "berdiet", hira: "ダイエットする", kanji: "-" },
    { jp: "seiri suru", id: "mengatur", hira: "せいりする", kanji: "整理する *N1" },
    { jp: "hayaoki suru", id: "bangun pagi", hira: "はやおきする", kanji: "早起きする *N4" },
    { jp: "nebou suru", id: "bangun kesiangan", hira: "ねぼうする", kanji: "寝坊する *N3" },
    { jp: "mukae ni kuru", id: "datang menjemput", hira: "むかえにくる", kanji: "迎えに来る *N3" },
    { jp: "tsurete kuru", id: "datang mengajak", hira: "つれてくる", kanji: "連れて来る *N3" },
  ];

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
      <Text style={styles.title}>Kosakata Kata Kerja Golongan 3 / Tidak Beraturan</Text>
      <Text style={styles.caption}>
        Kata kerja golongan 3 / tidak beraturan adalah kosakata yang berakhiran{" "}
        <Text style={{ fontWeight: "bold" }}>suru</Text> dan kata{" "}
        <Text style={{ fontWeight: "bold" }}>"kuru"</Text>.
        Berikut ini beberapa contoh kosakata dalam bahasa Jepang.
      </Text>

      {renderTable(gol3)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.example}>Watashi wa nihongo wo benkyou suru.</Text>
      <Text style={styles.example}>私は日本語を勉強する。</Text>
      <Text style={styles.example}>わたしは にほんごを べんきょうする。</Text>
      <Text style={styles.example}>→ Saya belajar bahasa Jepang.</Text>
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
