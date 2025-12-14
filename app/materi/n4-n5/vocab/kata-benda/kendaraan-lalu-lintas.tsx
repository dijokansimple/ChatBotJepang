import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

type AnimalWord = {
  jp: string;
  id: string;
  hira: string;
  kanji?: string;
};

const kosakataHewan: AnimalWord[] = [
    { jp: "norimono", id: "kendaraan", hira: "のりもの・ノリモノ", kanji: "乗り物 *N3" },
    { jp: "kuruma / jidousha", id: "mobil", hira: "くるま・じどうしゃ・クルマ・ジドウシャ", kanji: "車 *N5・自動車 *N4" },
    { jp: "takushii", id: "taksi", hira: "タクシー", kanji: "–" },
    { jp: "basu", id: "bus", hira: "バス", kanji: "–" },
    { jp: "yakou basu", id: "bus malam", hira: "やこうバス・ヤコウバス", kanji: "夜行バス *N4" },
    { jp: "baiku / ootobai", id: "sepeda motor", hira: "バイク・オートバイ", kanji: "–" },
    { jp: "jitensha", id: "sepeda", hira: "じてんしゃ・ジテンシャ", kanji: "自転車 *N4" },
    { jp: "densha", id: "kereta", hira: "でんしゃ・デンシャ", kanji: "電車 *N5" },
    { jp: "shinkansen", id: "kereta api cepat", hira: "しんかんせん・シンカンセン", kanji: "新幹線 *N1" },
    { jp: "chikatetsu", id: "kereta api bawah tanah", hira: "ちかてつ・チカテツ", kanji: "地下鉄 *N2" },
    { jp: "hikouki", id: "pesawat", hira: "ひこうき・ヒコウキ", kanji: "飛行機 *N3" },
    { jp: "fune", id: "kapal", hira: "ふね・フネ", kanji: "船 *N3" },
    { jp: "kyuukyuusha", id: "ambulans", hira: "きゅうきゅうしゃ・キュウキュウシャ", kanji: "救急車 *N1" },
    { jp: "shoubousha", id: "mobil pemadam kebakaran", hira: "しょうぼうしゃ・ショウボウシャ", kanji: "消防車 *N3" },
    { jp: "noriba", id: "tempat naik kendaraan", hira: "のりば・ノリバ", kanji: "乗り場 *N3" },
    { jp: "kippu", id: "karcis", hira: "きっぷ・キップ", kanji: "切符 *N2" },
    { jp: "koutsuu", id: "lalu lintas", hira: "こうつう・コウツウ", kanji: "交通 *N3" },
    { jp: "michi / toori", id: "jalan", hira: "みち・とおり・ミチ・トオリ", kanji: "道・通り *N4" },
    { jp: "douro", id: "jalan raya", hira: "どうろ・ドウロ", kanji: "道路 *N3" },
    { jp: "kousoku douro", id: "jalan tol", hira: "こうそくどうろ・コウソクドウロ", kanji: "高速道路 *N3" },
    { jp: "kado", id: "belokan", hira: "かど・カド", kanji: "角 *N2" },
    { jp: "kousaten", id: "persimpangan", hira: "こうさてん・コウサテン", kanji: "交差点 *N3" },
    { jp: "shingou (ki)", id: "lampu lalu lintas", hira: "しんごう（き）・シンゴウ（キ）", kanji: "信号（機） *N3" },
    { jp: "hashi", id: "jembatan", hira: "はし・ハシ", kanji: "橋 *N2" },
    { jp: "juutai", id: "macet", hira: "じゅうたい・ジュウタイ", kanji: "渋滞 *N1" },
    { jp: "jiko", id: "kecelakaan", hira: "じこ・ジコ", kanji: "事故 *N4" },
    { jp: "koujichuu", id: "sedang dalam konstruksi", hira: "こうじちゅう・コウジチュウ", kanji: "工事中 *N4" },
    { jp: "tachiiri kinshi", id: "dilarang masuk / melintas", hira: "たちいりきんし・タチイリキンシ", kanji: "立入禁止 *N2" },
    { jp: "riyou", id: "penggunaan", hira: "りよう・リヨウ", kanji: "利用 *N3" },
    { jp: "untenshu", id: "supir", hira: "うんてんしゅ・ウンテンシュ", kanji: "運転手 *N4" },
    { jp: "okyakusan", id: "penumpang / pelanggan", hira: "（お）きゃく（さん）・（オ）キャク（サン）", kanji: "（お）客（さん） *N3" },
    { jp: "seki", id: "tempat duduk", hira: "せき・セキ", kanji: "席 *N3" },
    { jp: "kiro / kiromeetoru", id: "kilo / kilometer", hira: "キロ・キロメートル", kanji: "–" },
    { jp: "gasorin", id: "bensin", hira: "ガソリン", kanji: "–" },
    { jp: "enjin", id: "mesin", hira: "エンジン", kanji: "–" },
    { jp: "katamichi", id: "sekali jalan", hira: "かたみち・カタミチ", kanji: "片道 *N2" },
    { jp: "oufuku", id: "pulang pergi", hira: "おうふく・オウフク", kanji: "往復 *N1" },
];

// Tipe contoh kalimat
type ExampleSentence = {
  jp: string;
  kanji?: string;
  romaji?: string;
  id: string;
};

// Contoh kalimat
const contohKalimat: ExampleSentence[] = [
    {
    jp: "Shingou wo mushi suru no wa totemo abunai desu.",
    kanji: "信号を無視するのはとても危ないです。",
    romaji: "しんごうを　むし　するのは　とても　あぶないです。",
    id: "Mengabaikan lampu lalu lintas sangat berbahaya.",
    },
    {
    jp: "Toukyou no chikatetsu wa totemo benri de, kirei desu.",
    kanji: "東京の地下鉄はとても便利で、きれいです。",
    romaji: "とうきょうの　ちかてつは　とても　べんりで、　きれいです。",
    id: "Kereta bawah tanah Tokyo sangat praktis dan bersih.",
    },
    {
    jp: "Tounan ajia de urarete iru baiku wa hotondo nihon-sei desu.",
    kanji: "東南アジアで売られているバイクはほとんど日本製です。",
    romaji: "とうなん　あじあで　うられている　ばいくは　ほとんど　にほんせいです。",
    id: "Motor yang dijual di Asia Tenggara sebagian besar adalah buatan Jepang.",
    },
    {
    jp: "Ano hashi wo watatte, hidari e magaru to, hidari gawa ni ookii hon’ya ga arimasu.",
    kanji: "あの橋を渡って、左へ曲がると、左側に大きい本屋があります。",
    romaji: "あの　はしを　わたって、　ひだりへ　まがると、　ひだりがわに　おおきい　ほんやが　あります。",
    id: "Jika menyeberangi jembatan itu dan belok ke kiri, di sebelah kiri akan ada toko buku yang besar.",
    },
    {
    jp: "Nihon ni itta toki, ichido dake shinkansen ni notta koto ga arimasu.",
    kanji: "日本に行ったとき、一度だけ新幹線に乗ったことがあります。",
    romaji: "にほんに　いった　とき、　いちど　だけ　しんかんせんに　のった　ことが　あります。",
    id: "Ketika pergi ke Jepang, saya pernah naik shinkansen hanya sekali.",
    },
    {
    jp: "Kokora hen wa kuruma ya baiku ga takusan tootte iru kara, michi wo wataru toki wa, ki wo tsukete kudasai.",
    kanji: "ここら辺は車やバイクがたくさん通っているから、道を渡るときは、気をつけてください。",
    romaji: "ここら　へんは　くるまや　ばいくが　たくさん　とおって　いるから、　みちを　わたる　とき、　きを　つけて　ください。",
    id: "Karena di sekitar sini banyak mobil dan motor yang melintas, saat menyeberang jalan tolong berhati-hati.",
    },
];

// Render tabel
const renderTable = (data: AnimalWord[]) => (
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

// Render contoh kalimat
const renderExamples = (examples: ExampleSentence[]) => (
  <View style={styles.examples}>
    {examples.map((ex, index) => (
      <View key={index} style={styles.exampleBox}>
        <Text style={styles.exampleText}>JP: {ex.jp}</Text>
        {ex.kanji && <Text style={styles.exampleText}>Kanji: {ex.kanji}</Text>}
        {ex.romaji && <Text style={styles.exampleText}>Romaji: {ex.romaji}</Text>}
        <Text style={styles.exampleText}>ID: {ex.id}</Text>
      </View>
    ))}
  </View>
);

export default function KosakataHewan() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kosakata Kendaraan dan Lalu Lintas dalam Bahasa Jepang</Text>

      <Image
        source={require("./kendaraan-dan-lalulintas.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.caption}>
        Berikut ini adalah daftar kosakata kendaraan dan lalu lintas dalam bahasa Jepang
        beserta hiragana dan kanjinya.
      </Text>

      {renderTable(kosakataHewan)}

      <Text style={styles.subTitle}>Contoh Kalimat</Text>
      <Text style={styles.caption}>
        Perhatikan contoh penggunaan kosakata kendaraan dan lalu lintas berikut dalam kalimat bahasa Jepang.
      </Text>

      {renderExamples(contohKalimat)}
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
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 2,
    color: "#333",
  },
  image: {
    width: "100%",
    maxWidth: 450,
    height: 300,
    borderRadius: 12,
    marginBottom: 40,
    alignSelf: "center",
  },
});
