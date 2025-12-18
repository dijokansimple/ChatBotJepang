import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SeiDe() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fungsi 「〜せいで」</Text>

      <Text style={styles.subTitle}>Pola Kalimat</Text>
      <Text style={styles.caption}>
        Kata kerja kasual (bentuk ta) + 「せいで」
      </Text>
      <Text style={styles.caption}>
        Kata sifat i + 「せいで」
      </Text>
      <Text style={styles.caption}>
        Kata sifat na (dengan 「な」) + 「せいで」
      </Text>
      <Text style={styles.caption}>
        Kata benda + partikel 「の」 + 「せいで」
      </Text>

      <Text style={styles.subTitle}>Penggunaan 「〜せいで」</Text>
      <Text style={styles.caption}>
        Tata bahasa 「せいで」 merupakan salah satu tata bahasa yang termasuk
        dalam JLPT N3, yang digunakan untuk menyatakan alasan tertentu yang
        menyebabkan suatu hal buruk atau hal yang tidak diharapkan terjadi.
        Pola kalimat ini disusun dengan urutan penjelasan penyebab suatu hal,
        kemudian diikuti dengan 「せいで」, lalu hasil buruk yang terjadi
        akibat penyebab tersebut.
      </Text>

      <Text style={styles.caption}>
        Kata 「せい」 yang merujuk pada suatu penyebab ini juga bisa digunakan di
        akhir kalimat menjadi 「せいだ」. Ungkapan ini menekankan bahwa pembicara
        merasa penyebab tersebut bertanggung jawab atas hasil negatif yang
        terjadi.
      </Text>

      <Text style={styles.caption}>
        Sebelumnya kita telah mempelajari tata bahasa 「おかげで」, yang dapat
        dikatakan merupakan kebalikan dari 「せいで」. Jika 「おかげで」
        digunakan untuk menyatakan hasil yang baik atau positif, maka
        「せいで」 digunakan khusus untuk menyatakan hasil yang buruk atau
        tidak diinginkan.
      </Text>

      <Text style={styles.subTitle}>Contoh Kalimat</Text>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Densha ga okureta sei de, gakkou ni chikoku shite shimatta.
        </Text>
        <Text style={styles.exampleText}>
          電車が遅れたせいで、学校に遅刻してしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena kereta terlambat, saya jadi terlambat ke sekolah.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Saikin hatarakisugita sei de, taichou wo kuzushite shimatta.
        </Text>
        <Text style={styles.exampleText}>
          最近働き過ぎたせいで、体調を崩してしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena akhir-akhir ini terlalu banyak bekerja, kondisi tubuh menjadi
          tidak enak.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Sakuya choujikan anime wo mita sei de, asanebou wo shite shimatta.
        </Text>
        <Text style={styles.exampleText}>
          昨夜長時間アニメを見たせいで、朝寝坊をしてしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena tadi malam menonton anime terlalu lama, saya jadi kesiangan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Shio wo iresugita sei de, ryouri ga amari oishikunaku natte shimatta.
        </Text>
        <Text style={styles.exampleText}>
          塩を入れ過ぎたせいで、料理があまり美味しくなくなってしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena terlalu banyak garam, masakannya jadi tidak terlalu enak.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Ame ni furareta sei de, kaze wo hiite shimatta.
        </Text>
        <Text style={styles.exampleText}>
          雨に降られたせいで、風邪を引いてしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena kehujanan, saya jadi masuk angin.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Chanto ayamaranakatta sei de, ore wa kanojo ni kirawarete shimatta.
        </Text>
        <Text style={styles.exampleText}>
          ちゃんと謝らなかったせいで、俺は彼女に嫌われてしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena tidak meminta maaf dengan sungguh-sungguh, aku dibenci olehnya.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.exampleText}>
          Amari renraku wo toranakatta sei de, koibito to wakarete shimatta.
        </Text>
        <Text style={styles.exampleText}>
          あまり連絡を取らなかったせいで、恋人と別れてしまった。
        </Text>
        <Text style={styles.exampleText}>
          → Karena jarang berkomunikasi, saya putus dengan pacar.
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
  },
  exampleText: {
    fontSize: 15,
    marginBottom: 4,
    color: "#333",
  },
});
