import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiOiteNiOkeru() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「において／における」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>Kata benda + 「において」</Text>
      <Text style={styles.caption}>Kata benda + 「における」 + kata benda</Text>

      <Text style={styles.subTitle}>Penggunaan 「において／における」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「において／における」 merupakan ungkapan bahasa Jepang yang
        digunakan untuk menyatakan suatu hal yang berkaitan dengan lokasi,
        kegiatan, periode waktu, atau keadaan tertentu. Dalam bahasa Indonesia,
        pola ini dapat diartikan sebagai “di”, “pada”, atau “dalam”.
      </Text>

      <Text style={styles.caption}>
        Ungkapan ini hanya digunakan dalam situasi formal atau bahasa tulisan,
        sehingga tidak digunakan dalam percakapan kasual sehari-hari. Pola ini
        merupakan bentuk formal dari partikel 「で」 yang menyatakan tempat
        terjadinya suatu hal, atau partikel 「に」 yang menyatakan waktu atau
        periode tertentu.
      </Text>

      <Text style={styles.caption}>
        Oleh karena itu, kata benda sebelum 「において」 atau 「における」 dapat
        berupa waktu, tempat, kegiatan, keadaan, bidang, atau konteks tertentu.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat 「において」</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Jinsei ni oite, motto mo taisetsu na mono wa nan deshouka?
        </Text>
        <Text style={styles.jpText}>
          人生において、最も大切なものは何でしょうか？
        </Text>
        <Text style={styles.idText}>
          → Dalam kehidupan, apa hal yang paling penting?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Jikai no mensetsu ni oite, kenkyuu keikaku wo happyou shite kudasai.
        </Text>
        <Text style={styles.jpText}>
          次回の面接において、研究計画を発表してください。
        </Text>
        <Text style={styles.idText}>
          → Pada wawancara berikutnya, silakan presentasikan rencana penelitian.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Saishuu mensetsu wa honsha ni oite okonawaremasu.
        </Text>
        <Text style={styles.jpText}>
          最終面接は本社において行われます。
        </Text>
        <Text style={styles.idText}>
          → Wawancara akhir diadakan di kantor pusat.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Shanai ni oite, keitai denwa no goriyou wa goenryo kudasai.
        </Text>
        <Text style={styles.jpText}>
          車内において、携帯電話のご利用はご遠慮ください。
        </Text>
        <Text style={styles.idText}>
          → Di dalam kereta, mohon untuk tidak menggunakan ponsel.
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kalimat 「における」</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Nihon ni okeru shoushi koureika to iu shakai mondai ga shinkoku ni natte
          iru.
        </Text>
        <Text style={styles.jpText}>
          日本における少子高齢化という社会問題が深刻になっている。
        </Text>
        <Text style={styles.idText}>
          → Masalah sosial menurunnya angka kelahiran dan penuaan penduduk di
          Jepang semakin serius.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Sen kyuuhyaku kyuujuu nana nen ni okeru ajia kin’yuu kiki wa, warui
          eikyou wo motarashita.
        </Text>
        <Text style={styles.jpText}>
          1997年におけるアジア金融危機は、悪い影響をもたらした。
        </Text>
        <Text style={styles.idText}>
          → Krisis keuangan Asia pada tahun 1997 membawa dampak buruk.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Saigaiji ni okeru gakkou no taiou wo kentou suru hitsuyou ga aru.
        </Text>
        <Text style={styles.jpText}>
          災害時における学校の対応を検討する必要がある。
        </Text>
        <Text style={styles.idText}>
          → Perlu meninjau respon sekolah pada saat bencana.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6f4f1",
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
    marginBottom: 10,
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
