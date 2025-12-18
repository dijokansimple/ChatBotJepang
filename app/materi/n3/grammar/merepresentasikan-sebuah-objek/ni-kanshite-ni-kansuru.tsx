import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function NiKanshite() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜に関して / 〜に関する」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata benda / topik + 「に関して」
      </Text>
      <Text style={styles.caption}>
        Kata benda / topik + 「に関する」 / 「に関しての」 + kata benda
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜に関して / 〜に関する」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「に関して / に関する」 merupakan ungkapan dalam bahasa Jepang
        yang digunakan untuk menyatakan suatu topik atau hal tertentu yang
        sedang dibicarakan, dipikirkan, diteliti, atau dituliskan.
      </Text>

      <Text style={styles.caption}>
        Fungsi dan makna pola ini pada dasarnya sama dengan 「について」, yaitu
        menyatakan arti “tentang” atau “mengenai”. Namun, dibandingkan
        「について」, ungkapan 「に関して / に関する」 terkesan lebih kaku dan
        formal, sehingga lebih sering digunakan dalam bahasa tulisan, laporan,
        penelitian, wawancara resmi, atau situasi formal lainnya.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kono mondai ni kanshite wa, nani mo shirimasen.
        </Text>
        <Text style={styles.jpText}>
          この問題に関しては、何も知りません。
        </Text>
        <Text style={styles.idText}>
          → Saya tidak mengetahui apa pun mengenai masalah ini.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Kono seisaku ni kanshite, dou omowaremasu ka?
        </Text>
        <Text style={styles.jpText}>
          この政策に関して、どう思われますか？
        </Text>
        <Text style={styles.idText}>
          → Bagaimana pendapat Anda mengenai kebijakan ini?
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Sore ni kanshite, kuwashiku setsumei shite kudasai.
        </Text>
        <Text style={styles.jpText}>
          それに関して、詳しく説明してください。
        </Text>
        <Text style={styles.idText}>
          → Mohon dijelaskan lebih rinci mengenai hal tersebut.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Sotsugyou ronbun no tame ni, genzai no nihon no keizai joukyou ni kanshite
          shirabete imasu.
        </Text>
        <Text style={styles.jpText}>
          卒業論文のために、現在の日本の経済状況に関して調べています。
        </Text>
        <Text style={styles.idText}>
          → Untuk skripsi, saya sedang meneliti tentang kondisi ekonomi Jepang
          saat ini.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Baiku ni kanshite wa kyoumi ga arimasu.
        </Text>
        <Text style={styles.jpText}>
          バイクに関しては興味があります。
        </Text>
        <Text style={styles.idText}>
          → Saya memiliki ketertarikan mengenai motor.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jpText}>
          Gaikokujin roudousha no ukeire ni kanshite, intabyuu wo okonaitai to
          kangaete imasu.
        </Text>
        <Text style={styles.jpText}>
          外国人労働者の受け入れに関して、インタビューを行いたいと考えています。
        </Text>
        <Text style={styles.idText}>
          → Saya sedang mempertimbangkan untuk melakukan wawancara mengenai
          penerimaan tenaga kerja asing.
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
