import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ToIuYori() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>Fungsi 「to iu yori」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.section}>
        <Text style={styles.subTitle}>Pola Kalimat</Text>
        <Text style={styles.list}>• Kata kerja kasual + to iu yori</Text>
        <Text style={styles.list}>• Kata sifat i + to iu yori</Text>
        <Text style={styles.list}>
          • Kata sifat na (tanpa na / menjadi da) + to iu yori
        </Text>
        <Text style={styles.list}>
          • Kata benda (boleh pakai da atau tidak) + to iu yori
        </Text>
      </View>

      {/* Penggunaan */}
      <View style={styles.sectionNote}>
        <Text style={styles.subTitle}>Penggunaan</Text>
        <Text style={styles.caption}>
          Tata bahasa 「to iu yori」 digunakan untuk menyatakan bahwa dibandingkan
          dengan pendapat pertama, pendapat kedua lebih tepat atau lebih mendekati
          kenyataan.
        </Text>
        <Text style={styles.caption}>
          Dalam bahasa Indonesia dapat diartikan: “daripada dikatakan A, lebih
          pantas dikatakan B”.
        </Text>
        <Text style={styles.caption}>
          Bisa diperkuat dengan bentuk: to iu yori mo / wa / ka / ka wa.
        </Text>
      </View>

      {/* Contoh */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Contoh Kalimat</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleRomaji}>
          Otousan wa shinbun wo yomu to iu yori, chiratto miru dake da.
        </Text>
        <Text style={styles.exampleJP}>
          お父さんは新聞を読むというより、ちらっと見るだけだ。
        </Text>
        <Text style={styles.caption}>→ Ayah lebih tepat hanya melihat sekilas.</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleRomaji}>
          Kare ga iu koto ga wakaranai to iu yori, koe ga chiisasugite kikitorenai.
        </Text>
        <Text style={styles.exampleJP}>
          彼が言うことがわからないというより、声が小さすぎて聞き取れない。
        </Text>
        <Text style={styles.caption}>
          → Tidak bisa mendengar karena suaranya kecil.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleRomaji}>
          Kokunai no kaisha de eigo wo tsukatte hatarakitai to iu yori, jissai ni kaigai de hatarakitai.
        </Text>
        <Text style={styles.exampleJP}>
          国内の会社で英語を使って働きたいというより、実際に海外で働きたい。
        </Text>
        <Text style={styles.caption}>
          → Lebih ingin bekerja langsung di luar negeri.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleRomaji}>
          Kareshi ga hoshii to iu yori, sabishii kara hanasu aite ga hoshii.
        </Text>
        <Text style={styles.exampleJP}>
          彼氏が欲しいというより、寂しいから話す相手が欲しい。
        </Text>
        <Text style={styles.caption}>
          → Ingin teman bicara karena kesepian.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleRomaji}>
          Gakkou ni ikitakunai to iu yori, onaji kurasu no moto kano ni aitakunai.
        </Text>
        <Text style={styles.exampleJP}>
          学校に行きたくないというより、同じクラスの元カノに会いたくない。
        </Text>
        <Text style={styles.caption}>
          → Tidak ingin bertemu mantan pacar.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F4F1",
    padding: 16,
  },

  titleBox: {
    backgroundColor: "#CFFAFE",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#064E3B",
  },

  section: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 14,
  },

  sectionNote: {
    backgroundColor: "#F0FDFA",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: "#2DD4BF",
  },

  subTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#065F46",
    marginBottom: 8,
  },

  caption: {
    fontSize: 16,
    color: "#1F2937",
    lineHeight: 24,
  },

  list: {
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 6,
  },

  subHeader: {
    backgroundColor: "#99F6E4",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 12,
  },

  subHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#064E3B",
  },

  exampleBox: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#5EEAD4",
  },

  exampleRomaji: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  exampleJP: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 6,
  },
});
