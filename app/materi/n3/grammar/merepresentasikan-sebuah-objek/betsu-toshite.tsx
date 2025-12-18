import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function BetsuToshite() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜別として」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda + partikel 「は」 + 「別として」
      </Text>
      <Text style={styles.caption}>
        Kata kerja + 「かどうかは」 + 「別として」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜別として」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「別として」 merupakan salah satu tata bahasa dalam JLPT N3,
        yang digunakan untuk menyatakan suatu hal terlepas dari atau tanpa
        memikirkan satu hal tertentu lainnya. Pola ini sering dipakai ketika
        pembicara ingin membicarakan suatu poin, tetapi dengan sengaja
        mengesampingkan satu aspek tertentu.
      </Text>

      <Text style={styles.caption}>
        Jika diungkapkan dengan bahasa Jepang lainnya, ungkapan 「〜は別として」
        memiliki makna yang mirip dengan 「〜は考えないで」 yang berarti “tanpa
        memikirkan…”, 「〜は含めないで」 yang berarti “tidak termasuk…”, atau
        「〜は例外で」 yang berarti “kecuali…”.
      </Text>

      <Text style={styles.caption}>
        Oleh karena itu, secara sederhana dalam bahasa Indonesia pola ini dapat
        diartikan sebagai “terlepas dari”.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kachimake wa betsu toshite, minna de isshoni geemu wo suru koto wa tanoshii.
        </Text>
        <Text style={styles.jpText}>
          勝ち負けは別として、みんなで一緒にゲームをすることは楽しい。
        </Text>
        <Text style={styles.idText}>
          → Terlepas dari menang atau kalah, bermain game bersama-sama itu
          menyenangkan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Ano kaisha wa, kyuuryou wa betsu toshite, hataraku kankyou wa yoi to omou.
        </Text>
        <Text style={styles.jpText}>
          あの会社は、給料は別として、働く環境は良いと思う。
        </Text>
        <Text style={styles.idText}>
          → Perusahaan itu, terlepas dari gajinya, menurut saya lingkungan
          kerjanya bagus.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Butsurigaku wa betsu toshite, hoka no jugyou wa kekkou dekiru ki ga suru.
        </Text>
        <Text style={styles.jpText}>
          物理学は別として、ほかの授業はけっこうできる気がする。
        </Text>
        <Text style={styles.idText}>
          → Terlepas dari pelajaran Fisika, saya merasa cukup bisa di pelajaran
          lainnya.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Ano mise wa, nedan wa betsu toshite, hoka ni wa toku ni chousho ga nai.
        </Text>
        <Text style={styles.jpText}>
          あの店は、値段は別として、他には特に長所がない。
        </Text>
        <Text style={styles.idText}>
          → Toko itu, terlepas dari harganya, selain itu tidak memiliki kelebihan
          khusus.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kanojo no ryouri, mitame wa betsu toshite, aji wa totemo oishii to omou.
        </Text>
        <Text style={styles.jpText}>
          彼女の料理、見た目は別として、味はとても美味しいと思う。
        </Text>
        <Text style={styles.idText}>
          → Masakan dia, terlepas dari tampilannya, menurut saya rasanya sangat
          enak.
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
