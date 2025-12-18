import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiTotte() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜にとって」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda (orang atau kelompok) + 「にとって」 / 「にとっては」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜にとって」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「にとって」 merupakan ungkapan dalam bahasa Jepang yang
        digunakan untuk menyatakan suatu pendapat, penilaian, atau pandangan
        terhadap suatu hal berdasarkan sudut pandang individu atau kelompok
        tertentu.
      </Text>

      <Text style={styles.caption}>
        Ungkapan ini menekankan bahwa pernyataan yang disampaikan bersifat
        subjektif, yaitu tergantung pada siapa yang menilainya. Oleh karena itu,
        dalam bahasa Indonesia, pola 「にとって」 umumnya diterjemahkan sebagai
        “bagi …”.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Watashi ni totte, kono machi wa dai ni no kokyou da.
        </Text>
        <Text style={styles.jpText}>
          私にとって、この町は第二の故郷だ。
        </Text>
        <Text style={styles.idText}>
          → Bagi saya, kota ini adalah kampung halaman kedua.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Watashi ni totte, tomodachi ya kazoku to isshoni iru toki ga ichiban shiawase da.
        </Text>
        <Text style={styles.jpText}>
          友達や家族と一緒にいるときが一番幸せだ。
        </Text>
        <Text style={styles.idText}>
          → Bagi saya, waktu bersama teman dan keluarga adalah yang paling membahagiakan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Anata ni totte, risou no kekkon aite wa donna hito desuka?
        </Text>
        <Text style={styles.idText}>
          → Bagi Anda, orang seperti apa yang ideal sebagai pasangan menikah?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Tanaka-san ni totte, shigoto to kazoku to, dochira ga taisetsu desuka?
        </Text>
        <Text style={styles.idText}>
          → Bagi Tanaka, antara pekerjaan dan keluarga, mana yang lebih penting?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Yamada-san ni totte, kono shigoto ga ichiban yarigai no aru shigoto desuka?
        </Text>
        <Text style={styles.jpText}>
          山田さんにとって、この仕事が一番やりがいのある仕事ですか？
        </Text>
        <Text style={styles.idText}>
          → Bagi Yamada, apakah pekerjaan ini yang paling memberikan kepuasan?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Gendaijin ni totte, intaanetto wa kakasenai mono da.
        </Text>
        <Text style={styles.idText}>
          → Bagi masyarakat modern, internet adalah sesuatu yang tidak bisa dipisahkan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Dare ni totte mo, kenkou wa ichiban daiji na mono da.
        </Text>
        <Text style={styles.jpText}>
          誰にとっても、健康は一番大事なものだ。
        </Text>
        <Text style={styles.idText}>
          → Bagi siapa pun, kesehatan adalah hal yang paling penting.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Karera ni totte, nani ga ichiban taisetsu nan darou?
        </Text>
        <Text style={styles.jpText}>
          彼らにとって、何が一番大切なんだろう？
        </Text>
        <Text style={styles.idText}>
          → Bagi mereka, kira-kira apa yang paling penting?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Indonesiajin ni totte, okome wa kakasenai shokuzai desu.
        </Text>
        <Text style={styles.idText}>
          → Bagi orang Indonesia, beras adalah bahan makanan yang tidak bisa digantikan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Nihonjin ni totte, obon wa daiji na gyouji no hitotsu desu.
        </Text>
        <Text style={styles.jpText}>
          日本人にとって、お盆は大事な行事の一つです。
        </Text>
        <Text style={styles.idText}>
          → Bagi orang Jepang, Obon adalah salah satu perayaan penting.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Supootsu senshu ni totte, orinpikku wa ichiban taisetsu na taikai da.
        </Text>
        <Text style={styles.idText}>
          → Bagi atlet olahraga, Olimpiade adalah kompetisi yang paling penting.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kanojo ni totte, ano nekkuresu wa nani yori mo taisetsu na mono no you da.
        </Text>
        <Text style={styles.jpText}>
          彼女にとって、あのネックレスは何よりも大切なもののようだ。
        </Text>
        <Text style={styles.idText}>
          → Bagi dia, sepertinya kalung itu adalah hal yang paling berharga.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Shigoto wo sagashite iru hito ni totte, kono saito wa totemo yaku ni tatsu.
        </Text>
        <Text style={styles.idText}>
          → Bagi orang yang sedang mencari pekerjaan, situs ini sangat berguna.
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
  exampleBox: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#7bbfb6",
  },
  jpText: {
    fontSize: 15,
    color: "#0F3B36",
    marginBottom: 2,
  },
  idText: {
    fontSize: 15,
    color: "#333",
    marginTop: 4,
  },
});
