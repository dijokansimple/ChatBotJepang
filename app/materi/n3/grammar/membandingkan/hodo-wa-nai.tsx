import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HodoWaNai() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「hodo wa nai」</Text>

      <Text style={styles.subTitle}>Pengertian</Text>
      <Text style={styles.caption}>
        「hodo wa nai」 digunakan untuk menyatakan “paling” secara tidak langsung.
        Pola ini bersifat subjektif, yaitu berdasarkan perasaan atau penilaian
        pembicara.
      </Text>
      <Text style={styles.caption}>
        Dalam bahasa Indonesia dapat diartikan:
        “tidak ada (A) yang se~ seperti (B)”.
      </Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        • Kata kerja bentuk kamus + koto + hodo ~ wa nai / inai
      </Text>
      <Text style={styles.caption}>
        • Kata benda + hodo ~ wa nai / inai
      </Text>

      <Text style={styles.subTitle}>Informasi Tambahan</Text>
      <Text style={styles.caption}>
        Partikel 「hodo」 bisa diganti dengan 「kurai / gurai」, tetapi 「hodo」
        memberi kesan tingkat yang lebih tinggi. 「kurai / gurai」 lebih kasual.
      </Text>

      <Text style={styles.subTitle}>Catatan Penting</Text>
      <Text style={styles.caption}>
        Pola ini tidak digunakan untuk fakta objektif. Untuk menyatakan “paling”
        secara fakta, gunakan pola lain seperti 「ichiban」.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Chuugokugo hodo hatsuon ga muzukashii gengo wa nai.
        </Text>
        <Text style={styles.exampleText}>
          中国語ほど発音が難しい言語はない。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada bahasa yang pelafalannya sesulit bahasa Mandarin.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Sushi hodo suki na nihon ryouri wa arimasen.
        </Text>
        <Text style={styles.exampleText}>
          寿司ほど好きな日本料理はありません。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada masakan Jepang yang saya sukai selain sushi.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Tsukareta toki, onsen hodo rirakkusu sasete kureru basho wa nai.
        </Text>
        <Text style={styles.exampleText}>
          疲れた時、温泉ほどリラックスさせてくれる場所はない。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada tempat yang lebih menenangkan daripada onsen saat lelah.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Satou-sensei hodo jugyou no setsumei ga wakariyasui sensei wa imasen.
        </Text>
        <Text style={styles.exampleText}>
          佐藤先生ほど授業の説明がわかりやすい先生はいません。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada guru yang penjelasannya semudah Sato-sensei.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ima wa jikan hodo hoshii mono wa nai.
        </Text>
        <Text style={styles.exampleText}>
          今は時間ほど欲しいものはない。
        </Text>
        <Text style={styles.caption}>
          → Sekarang tidak ada yang lebih saya inginkan selain waktu.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Tomodachi ni atte oshaberi suru koto hodo tanoshii koto wa nai.
        </Text>
        <Text style={styles.exampleText}>
          友達に会っておしゃべりすることほど楽しいことはない。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada yang lebih menyenangkan daripada mengobrol dengan teman.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Yasumi no hi ni wa, neru koto hodo yaritai koto wa nai.
        </Text>
        <Text style={styles.exampleText}>
          休みの日には、寝ることほどやりたいことはない。
        </Text>
        <Text style={styles.caption}>
          → Di hari libur, tidak ada yang ingin saya lakukan selain tidur.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kazoku ni aenai koto hodo kanashii koto wa nai.
        </Text>
        <Text style={styles.exampleText}>
          家族に会えないことほど悲しいことはない。
        </Text>
        <Text style={styles.caption}>
          → Tidak ada hal yang lebih menyedihkan daripada tidak bisa bertemu keluarga.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kono hoteru hodo gouka na hoteru ni tomatta koto ga nai.
        </Text>
        <Text style={styles.exampleText}>
          このホテルほど豪華なホテルに泊まったことがない。
        </Text>
        <Text style={styles.caption}>
          → Saya belum pernah menginap di hotel semewah ini.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Kare hodo namaiki na hito ni atta koto wa nai.
        </Text>
        <Text style={styles.exampleText}>
          彼ほど生意気な人に会ったことはない。
        </Text>
        <Text style={styles.caption}>
          → Saya belum pernah bertemu orang yang sesombong dia.
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
    marginBottom: 8,
    color: "#333",
  },
  exampleBox: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 15,
    color: "#333",
  },
});
