import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";


type NaAdjective = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kataSifatNa: NaAdjective[] = [
  { jp: "shizuka na", id: "sepi", hira: "しずかな", kanji: "静かな *N3" },
  { jp: "nigiyaka na", id: "ramai", hira: "にぎやかな", kanji: "賑やかな" },
  { jp: "anzen na", id: "aman", hira: "あんぜんな", kanji: "安全な *N4" },
  { jp: "kiken na", id: "bahaya", hira: "きけんな", kanji: "危険な *N3" },
  { jp: "majime na", id: "rajin", hira: "まじめな", kanji: "真面目な *N3" },
  { jp: "hitsuyou na", id: "diperlukan", hira: "ひつような", kanji: "必要な *N3" },
  { jp: "iya na", id: "tidak suka", hira: "いやな", kanji: "嫌な *N1" },
  { jp: "zan’nen na", id: "sayang sekali", hira: "ざんねんな", kanji: "残念な *N3" },
  { jp: "shinsetsu na", id: "ramah", hira: "しんせつな", kanji: "親切な *N4" },
  { jp: "kantan na", id: "mudah", hira: "かんたんな", kanji: "簡単な *N2" },
  { jp: "ooki na", id: "besar", hira: "おおきな", kanji: "大きな *N5" },
  { jp: "chiisa na", id: "kecil", hira: "ちいさな", kanji: "小さな *N5" },
  { jp: "hen na", id: "aneh", hira: "へんな", kanji: "変な *N3" },
  { jp: "benri na", id: "praktis", hira: "べんりな", kanji: "便利な *N3" },
  { jp: "fuben na", id: "tidak praktis", hira: "ふべんな", kanji: "不便な *N3" },
  { jp: "tokubetsu na", id: "spesial", hira: "とくべつな", kanji: "特別な *N4" },
  { jp: "yuumei na", id: "terkenal", hira: "ゆうめいな", kanji: "有名な *N4" },
  { jp: "iro-iro na", id: "berbagai macam", hira: "いろいろな", kanji: "色々な *N4" },
  { jp: "shiawase na", id: "bahagia", hira: "しあわせな", kanji: "幸せな *N3" },
  { jp: "dame na", id: "tidak boleh", hira: "だめな", kanji: "駄目な *N2" },
  { jp: "kechi na", id: "pelit", hira: "けちな" },
  { jp: "taisetsu na", id: "penting", hira: "たいせつな", kanji: "大切な *N4" },
  { jp: "daiji na", id: "penting", hira: "だいじな", kanji: "大事な *N4" },
  { jp: "mecha kucha na", id: "berantakan", hira: "めちゃくちゃな" },
  { jp: "shinpai na", id: "khawatir", hira: "しんぱいな", kanji: "心配な *N3" },
  { jp: "binbou na", id: "miskin", hira: "びんぼうな", kanji: "貧乏な *N3" },
  { jp: "raku na", id: "mudah", hira: "らくな", kanji: "楽な *N4" },
  { jp: "ijiwaru na", id: "tidak baik", hira: "いじわるな", kanji: "意地悪な *N3" },
  { jp: "muri na", id: "tidak mungkin / tidak masuk akal", hira: "むりな", kanji: "無理な *N2" },
  { jp: "muda na", id: "sia-sia", hira: "むだな", kanji: "無駄な *N2" },
  { jp: "nesshin na", id: "tekun", hira: "ねっしんな", kanji: "熱心な *N3" },
  { jp: "juubun na", id: "cukup", hira: "じゅうぶんな", kanji: "十分な *N5" },
  { jp: "fukuzatsu na", id: "rumit", hira: "ふくざつな", kanji: "複雑な *N2" },
  { jp: "teinei na", id: "sopan", hira: "ていねいな", kanji: "丁寧な *N1" },
  { jp: "shitsurei na", id: "tidak sopan", hira: "しつれいな", kanji: "失礼な *N3" },
  { jp: "heiwa na", id: "damai", hira: "へいわな", kanji: "平和な *N3" },
  { jp: "tanoshimi na", id: "dinantikan", hira: "たのしみな", kanji: "楽しみな *N4" },
  { jp: "kenkou na", id: "sehat", hira: "けんこうな", kanji: "健康な *N1" },
  { jp: "joubu na", id: "kuat", hira: "じょうぶな", kanji: "丈夫な *N3" },
  { jp: "futsuu na", id: "biasa saja", hira: "ふつうな", kanji: "普通な *N2" },
  { jp: "jiyuu na", id: "bebas", hira: "じゆうな", kanji: "自由な *N3" },
  { jp: "hima na", id: "(waktu) luang / senggang", hira: "ひまな", kanji: "暇な *N1" },
  { jp: "anshin na", id: "aman / tenang", hira: "あんしんな", kanji: "安心な *N4" },
  { jp: "isshoukenmei na", id: "sungguh-sungguh", hira: "いっしょうけんめいな", kanji: "一生懸命な *N1" },
];

// Render tabel
const renderTable = (data: NaAdjective[]) => (
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

// Contoh kalimat
const contohKalimat = [
  {
    jp: "Kare ga kono shigoto wo yatte kuretara anshin desu.",
    kanji: "彼がこの仕事をやってくれたら安心です。",
    romaji: "かれが　この　しごとを　やって　くれたら　あんしんです。",
    id: "Kalau dia (laki-laki) yang melakukan pekerjaan ini, (saya) tenang.",
  },
  {
    jp: "Kare wa isshoukenmei benyou shite imasu.",
    kanji: "彼は一生懸命勉強しています。",
    romaji: "かれは　いっしょうけんめい　べんきょう　して　います。",
    id: "Dia (laki-laki) belajar dengan sungguh-sungguh.",
  },
  {
    jp: "Ryuugakusei no tomodachi ni shitsurei na kotoba wo oshienaide kudasai.",
    kanji: "留学生の友達に失礼な言葉を教えないでください。",
    romaji: "りゅうがくせいの　ともだちに　しつれいな　ことばを　おしえないで　ください。",
    id: "Tolong jangan ajarkan kosakata kasar kepada teman pelajar asing (kamu).",
  },
  {
    jp: "Kenkou na karada wo tsukuru ni wa, kenkou na shokuji ga hitsuyou fukaketsu desu.",
    kanji: "健康な体を作るには、健康な食事が必要不可欠です。",
    romaji: "けんこうな　からだを　つくるには、　けんこうな　しょくじが　ひつよう　ふかけつです。",
    id: "Untuk membuat tubuh yang sehat, makanan yang sehat sangat diperlukan.",
  },
  {
    jp: "Binbou na kurashi wo tanoshimu houhou wa nandesuka?",
    kanji: "貧乏な暮らしを楽しむ方法は何ですか？",
    romaji: "ぶんぼうな　くらしを　たのしむ　ほうほうは　なんですか？",
    id: "Apa cara untuk menikmati hidup yang miskin?",
  },
  {
    jp: "Kare wa mainichi nesshin ni hataraite imasu.",
    kanji: "彼は毎日熱心に働いています。",
    romaji: "かれは　まいにち　ねっしんに　はたらいて　います。",
    id: "Dia (laki-laki) bekerja dengan tekun setiap hari.",
  },
  {
    jp: "Watashi wa ano hon wo kau tame ni juubun na okane wo motte imasu.",
    kanji: "私はあの本を買うために十分なお金を持っています。",
    romaji: "わたしは　あの　ほんを　かう　ために　じゅうぶんな　おかねを　もっています。",
    id: "Saya membawa uang yang cukup untuk membeli buku itu.",
  },
  {
    jp: "Mukashi, kono basho wa fuben deshita.",
    kanji: "昔、この場所は不便でした。",
    romaji: "むかし、　この　ばしょは　ふべん　でした。",
    id: "Dahulu, tempat ini tidak praktis.",
  },
  {
    jp: "Kinou no matsuri wa totemo nigiyaka datta.",
    kanji: "昨日の祭りはとてもにぎやかだった。",
    romaji: "きのうの　まつりは　とても　にぎやか　だった。",
    id: "Festival kemarin sangat ramai.",
  },
  {
    jp: "Kono shiken wa amari kantan janai to omou.",
    kanji: "この試験はあまり簡単じゃないと思う。",
    romaji: "この　しけんは　あまり　かんたん　じゃないと　おもう。",
    id: "Menurut (aku) ujian ini tidak terlalu mudah.",
  },
  {
    jp: "Saisho wa kono manga wa amari yuumei dewa nakatta kedo, ima wa totemo yuumei da.",
    kanji: "最初はこの漫画はあまり有名ではなかったけど、今はとても有名だ。",
    romaji: "さいしょは　この　まんがは　あまり　ゆうめい　ではなかった　けど、　いまは　とても　ゆうめいだ。",
    id: "Awalnya komik ini tidak terlalu terkenal, tetapi sekarang sangat terkenal.",
  },
  {
    jp: "Muri na onegai wo shite shimatte, sumimasen.",
    kanji: "無理なお願いをしてしまって、すみません。",
    romaji: "むりな　おねがいを　して　しまって、　すみません。",
    id: "Maaf telah meminta tolong hal yang tidak masuk akal.",
  },
  {
    jp: "Kechi na hito to tomodachi ni naritakunai desu.",
    kanji: "けちな人と友達になりたくないです。",
    romaji: "けちな　ひとと　ともだちに　なりたくないです。",
    id: "(Saya) tidak ingin berteman dengan orang yang pelit.",
  },
  {
    jp: "Raku na shigoto wo shitai desu.",
    kanji: "楽な仕事をしたいです。",
    romaji: "らくな　しごとを　したいです。",
    id: "(Saya) ingin melakukan pekerjaan yang mudah.",
  },
];

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

export default function KataSifatNa() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kata Sifat Berakhiran na JLPT N4</Text>

        {/* Gambar */}
                  <Image
                    source={require("./na-n4.png")}
                    style={styles.image}
                    resizeMode="cover"
                  />

      <Text style={styles.caption}>
        Berikut ini adalah beberapa contoh kosakata kata sifat berakhiran na JLPT N4 dalam bahasa Jepang.
      </Text>

      {renderTable(kataSifatNa)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Selanjutnya, untuk lebih mudah mengingat kosakata kata sifat berakhiran na, perhatikan contoh kalimat berikut.
      </Text>

      {renderExamples()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e8f6f3",
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
    backgroundColor: "#e0f7fa",
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
