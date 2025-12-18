import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KaraNiKakete() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜から〜にかけて」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda 1 + partikel 「から」 + kata benda 2 + 「にかけて」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜から〜にかけて」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「から〜にかけて」 merupakan ungkapan bahasa Jepang yang
        digunakan untuk menyatakan batas awal hingga batas akhir dari suatu
        cakupan waktu atau tempat. Namun, berbeda dengan pola 「から〜まで」 yang
        menunjukkan batas awal dan batas akhir secara jelas, pola
        「から〜にかけて」 memiliki batas akhir yang tidak terlalu tegas atau
        bersifat perkiraan.
      </Text>

      <Text style={styles.caption}>
        Oleh karena itu, dalam bahasa Indonesia pola ini sering diartikan
        “kira-kira sampai”. Tata bahasa ini digunakan untuk menunjukkan suatu
        kejadian yang berlangsung terus-menerus dalam rentang waktu atau tempat
        tertentu.
      </Text>

      <Text style={styles.caption}>
        Perlu diperhatikan bahwa pola 「にかけて」 tidak dapat digunakan untuk
        menunjukkan keberadaan benda atau tempat yang statis. Sebagai contoh,
        kalimat seperti berikut tidak tepat digunakan:
      </Text>

      <View style={styles.warningBox}>
        <Text style={styles.jpText}>
          × Daigaku kara eki ni kakete, iro-iro na omise ga arimasu.
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Asa shichi-ji kara hachi-ji ni kakete, densha ga komu.
        </Text>
        <Text style={styles.jpText}>
          朝7時から8時にかけて、電車が混む。
        </Text>
        <Text style={styles.idText}>
          → Dari jam 7 pagi kira-kira sampai jam 8, kereta akan ramai.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Hiru kara yuugata ni kakete, ame deshou.
        </Text>
        <Text style={styles.jpText}>
          昼から夕方にかけて、雨でしょう。
        </Text>
        <Text style={styles.idText}>
          → Dari siang kira-kira sampai sore, kemungkinan akan hujan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          San-gatsu gejun kara shi-gatsu joujun ni kakete, sakura ga sakimasu.
        </Text>
        <Text style={styles.jpText}>
          3月下旬から4月上旬にかけて、桜が咲きます。
        </Text>
        <Text style={styles.idText}>
          → Dari akhir Maret kira-kira sampai awal April, bunga sakura akan
          mekar.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kyou kara getsumatsu ni kakete, shigoto ga isogashikunaru kamoshirenai.
        </Text>
        <Text style={styles.jpText}>
          今日から月末にかけて、仕事が忙しくなるかもしれない。
        </Text>
        <Text style={styles.idText}>
          → Dari hari ini kira-kira sampai akhir bulan, mungkin pekerjaan akan
          menjadi sibuk.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Nenmatsu kara nenshi ni kakete, juutai ga hageshiku narisou da.
        </Text>
        <Text style={styles.jpText}>
          年末から年始にかけて、渋滞が激しくなりそうだ。
        </Text>
        <Text style={styles.idText}>
          → Dari akhir tahun kira-kira sampai awal tahun, sepertinya kemacetan
          akan semakin parah.
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
  warningBox: {
    backgroundColor: "#fff3f3",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#F7A6A6",
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
