import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type IAdjective = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kataSifatI: IAdjective[] = [
  { jp: "ureshii", id: "senang", hira: "うれしい", kanji: "嬉しい *N1" },
  { jp: "tanoshii", id: "senang", hira: "たのしい", kanji: "楽しい *N4" },
  { jp: "kanashii", id: "sedih", hira: "かなしい", kanji: "悲しい *N3" },
  { jp: "sabishii", id: "kesepian", hira: "さびしい", kanji: "寂しい *N1" },
  { jp: "yasashii", id: "baik", hira: "やさしい", kanji: "優しい *N3" },
  { jp: "yasashii", id: "mudah", hira: "やさしい", kanji: "易しい *N3" },
  { jp: "kibishii", id: "disiplin / strict", hira: "きびしい", kanji: "厳しい *N1" },
  { jp: "hazukashii", id: "malu", hira: "はずかしい", kanji: "恥ずかしい *N3" },
  { jp: "hidoi", id: "jahat", hira: "ひどい", kanji: "酷い *N1" },
  { jp: "kowai", id: "takut", hira: "こわい", kanji: "怖い *N3" },
  { jp: "tsumaranai", id: "membosankan", hira: "つまらない" },
  { jp: "sugoi", id: "hebat / luar biasa", hira: "すごい", kanji: "凄い" },
  { jp: "subarashii", id: "luar biasa", hira: "すばらしい", kanji: "素晴らしい *N3" },
  { jp: "oishii", id: "enak", hira: "おいしい", kanji: "美味しい *N3" },
  { jp: "umai", id: "enak / mahir", hira: "うまい" },
  { jp: "mazui", id: "tidak enak", hira: "まずい" },
  { jp: "fukai", id: "dalam", hira: "ふかい", kanji: "深い *N3" },
  { jp: "asai", id: "dangkal", hira: "あさい", kanji: "浅い *N2" },
  { jp: "tsuyoi", id: "kuat", hira: "つよい", kanji: "強い *N4" },
  { jp: "yowai", id: "lemah", hira: "よわい", kanji: "弱い *N2" },
  { jp: "katai", id: "keras", hira: "かたい", kanji: "固い *N2" },
  { jp: "yawarakai", id: "lembut / lunak", hira: "やわらかい", kanji: "柔らかい *N2" },
  { jp: "urusai", id: "ribut", hira: "うるさい" },
  { jp: "wakai", id: "muda", hira: "わかい", kanji: "若い *N3" },
  { jp: "nagai", id: "panjang", hira: "ながい", kanji: "長い *N5" },
  { jp: "mijikai", id: "pendek", hira: "みじかい", kanji: "短い *N2" },
  { jp: "mezurashii", id: "aneh / jarang", hira: "めずらしい", kanji: "珍しい *N2" },
  { jp: "utsukushii", id: "indah", hira: "うつくしい", kanji: "美しい *N3" },
  { jp: "kimochi ga ii", id: "perasaan nyaman", hira: "きもちがいい", kanji: "気持ちがいい *N4" },
  { jp: "kimochi ga warui", id: "perasaan tidak nyaman / menjijikkan", hira: "きもちがわるい", kanji: "気持ちが悪い *N4" },
  { jp: "kibun ga warui", id: "perasaan tidak enak", hira: "きぶんがわるい", kanji: "気分が悪い *N4" },
  { jp: "atatakai", id: "hangat", hira: "あたたかい", kanji: "温かい *N2" },
  { jp: "suzushii", id: "sejuk", hira: "すずしい", kanji: "涼しい *N2" },
  { jp: "akarui", id: "terang", hira: "あかるい", kanji: "明るい *N4" },
  { jp: "kurai", id: "gelap", hira: "くらい", kanji: "暗い *N3" },
  { jp: "omoi", id: "berat", hira: "おもい", kanji: "重い *N4" },
  { jp: "karui", id: "ringan", hira: "かるい", kanji: "軽い *N2" },
  { jp: "chikai", id: "dekat", hira: "ちかい", kanji: "近い *N4" },
  { jp: "tooi", id: "jauh", hira: "とおい", kanji: "遠い *N3" },
  { jp: "atama ga ii", id: "pintar", hira: "あたまがいい", kanji: "頭がいい *N3" },
  { jp: "tadashii", id: "benar", hira: "ただしい", kanji: "正しい *N4" },
  { jp: "hiroi", id: "luas", hira: "ひろい", kanji: "広い *N4" },
  { jp: "semai", id: "sempit", hira: "せまい", kanji: "狭い *N1" },
  { jp: "kitanai", id: "kotor", hira: "きたない", kanji: "汚い *N2" },
  { jp: "urayamashii", id: "iri / cemburu", hira: "うらやましい" },
  { jp: "sukunai", id: "sedikit", hira: "すくない", kanji: "少ない *N4" },
  { jp: "tsugou ga ii", id: "ada waktu", hira: "つごうがいい", kanji: "都合がいい *N3" },
  { jp: "tsugou ga warui", id: "tidak ada waktu", hira: "つごうがわるい", kanji: "都合が悪い *N3" },
  { jp: "nemui", id: "mengantuk", hira: "ねむい", kanji: "眠い *N3" },
  { jp: "nigai", id: "pahit", hira: "にがい", kanji: "苦い *N3" },
  { jp: "kawaii", id: "imut", hira: "かわいい", kanji: "可愛い *N3" },
  { jp: "erai", id: "hebat", hira: "えらい", kanji: "偉い *N3" },
  { jp: "koi", id: "pekat", hira: "こい", kanji: "濃い *N2" },
  { jp: "usui", id: "tipis", hira: "うすい", kanji: "薄い *N2" },
  { jp: "kuwashii", id: "detail", hira: "くわしい", kanji: "詳しい *N1" },
  { jp: "komakai", id: "rinci / receh", hira: "こまかい", kanji: "細かい *N2" },
  { jp: "futoi", id: "gemuk / tebal", hira: "ふとい", kanji: "太い *N3" },
  { jp: "hosoi", id: "kurus / tipis", hira: "ほそい", kanji: "細い *N2" },
  { jp: "atsui", id: "tebal", hira: "あつい", kanji: "厚い *N2" },
  { jp: "choudo ii", id: "pas / tepat", hira: "ちょうどいい" },
  { jp: "choushi ga okashii", id: "kondisinya aneh", hira: "ちょうしがおかしい", kanji: "（調子が）おかしい *N3" },
];

// Fungsi render tabel tanpa kolom No
const renderTable = (data: IAdjective[]) => (
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

// Contoh kalimat baru
const contohKalimat = [
  {
    jp: "Otousan wa totemo kibishii hito desu.",
    kanji: "お父さんはとても厳しい人です。",
    romaji: "おとうさんは　とても　きびしい　ひとです。",
    id: "Ayah adalah orang yang disiplin.",
  },
  {
    jp: "Kanojo wa shinsetsu de yasashii hito desu.",
    kanji: "彼女は親切で優しい人です。",
    romaji: "かのじょは　しんせつで　やさしい　ひとです。",
    id: "Dia (perempuan) adalah orang yang ramah dan baik.",
  },
  {
    jp: "Kono kami wa totemo usui desu.",
    kanji: "この紙がとても薄いです。",
    romaji: "この　かみが　とても　うすいです。",
    id: "Kertas ini sangat tipis.",
  },
  {
    jp: "Kono machi wa hito ga sukunai desu.",
    kanji: "この街は人が少ないです。",
    romaji: "この　まちは　ひとが　すくないです。",
    id: "Kota ini orangnya sedikit.",
  },
  {
    jp: "Watashi wa yuurei ga kowai desu.",
    kanji: "私は幽霊が怖いです。",
    romaji: "わたしは　ゆうれいが　こわいです。",
    id: "Saya takut dengan hantu.",
  },
  {
    jp: "Ano hito wa kono machi ni tsuite totemo kuwashii desu.",
    kanji: "あの人はこの街についてとても詳しいです。",
    romaji: "あの　ひとは　この　まちに　ついて　とても　くわしい　です。",
    id: "Orang itu sangat (tahu) detail mengenai kota ini.",
  },
  {
    jp: "Ie kara gakkou made kekkou chikai desu.",
    kanji: "家から学校まで結構近いです。",
    romaji: "いえ　から　がっこう　まで　けっこう　ちかいです。",
    id: "Dari rumah ke sekolah lumayan dekat.",
  },
  {
    jp: "Sonna koto wo iwanaide! Hazukashii yo.",
    kanji: "そんなことを言わないで！恥ずかしいよ。",
    romaji: "そんな　ことを　いわないで！　はずかしいよ。",
    id: "Tolong jangan berkata seperti itu! (Aku) malu.",
  },
  {
    jp: "Kono puuru wa fukakunai desu.",
    kanji: "このプールは深くないです。",
    romaji: "この　プールは　ふかくないです。",
    id: "Kolam ini tidak dalam.",
  },
  {
    jp: "Tomodachi ga inakute sabishikatta desu.",
    kanji: "友達がいなくて寂しかったです。",
    romaji: "ともだちが　いなくて　さびしかったです。",
    id: "(Saya dulunya) kesepian karena tidak punya teman.",
  },
  {
    jp: "Choudo ii toki ni kite kuremashita ne!",
    kanji: "ちょうどいいときに来てくれましたね！",
    romaji: "ちょうど　いい　ときに　きて　くれましたね！",
    id: "(Anda) datang di waktu yang tepat ya!",
  },
  {
    jp: "Kono enpitsu wa hosoi desu.",
    kanji: "この鉛筆は細いです。",
    romaji: "この　えんぴつは　ほそいです。",
    id: "Pensil ini kurus/kecil.",
  },
];

// Render contoh kalimat
const renderExamples = () => (
  <View style={styles.examples}>
    {contohKalimat.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>
        <Text style={styles.exampleText}>Romaji: {ex.romaji}</Text>
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

export default function KataSifatI() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Sifat Berakhiran i JLPT N4</Text>

      {/* Gambar */}
            <Image
              source={require("./i-n4.jpg")}
              style={styles.image}
              resizeMode="cover"
            />

      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata kata sifat berakhiran i JLPT N4 dalam bahasa Jepang.
      </Text>

      {renderTable(kataSifatI)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Selanjutnya, untuk lebih mudah mengingat kosakata kata sifat berakhiran i, perhatikan contoh kalimat berikut.
      </Text>

      {renderExamples()}
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
  headerRow: {
    backgroundColor: "#F7A6A6",
  },
  headerCell: {
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 20,
    color: "#333",
  },
  exampleBox: {
    backgroundColor: "#ffffffff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
  },
  examples: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    maxWidth: 450,
    height: 400,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
