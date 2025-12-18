import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function KotoNiNaruScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「koto ni naru」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pola Kalimat</Text>
        <Text style={styles.paragraph}>
          Kata kerja bentuk kamus / bentuk negatif (nai) + koto ni naru
        </Text>
      </View>

      {/* Penggunaan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Penggunaan 「koto ni naru」</Text>
        <Text style={styles.paragraph}>
          Tata bahasa “koto ni naru” merupakan salah satu tata bahasa yang termasuk dalam JLPT N3. 
          Pola ini memiliki dua fungsi penggunaan, yaitu untuk menyatakan sesuatu yang telah diputuskan 
          oleh pihak di luar pembicara serta untuk menyatakan kesimpulan logis atau wajar berdasarkan 
          situasi yang terjadi sebelumnya.
        </Text>

        <Text style={styles.paragraph}>
          Pada tata bahasa “koto ni suru”, keputusan diambil oleh pembicara sendiri. 
          Sedangkan pada pola “koto ni naru”, keputusan tersebut berasal dari pihak lain 
          seperti sekolah, perusahaan, atau lingkungan sekitar. Namun, dalam ragam bahasa halus, 
          pembicara juga dapat menggunakan “koto ni naru” agar terdengar lebih sopan dan tidak terlalu tegas.
        </Text>
      </View>

      {/* Sub Judul */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Keputusan Pihak Lain</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          全員が来月の社員旅行に参加してくれることになりました。
        </Text>
        <Text style={styles.id}>
          → Sudah diputuskan bahwa seluruh karyawan akan mengikuti wisata karyawan bulan depan.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          来週、貿易会社に入社することになりました。
        </Text>
        <Text style={styles.id}>
          → Sudah diputuskan bahwa minggu depan saya akan bekerja di perusahaan perdagangan.
        </Text>
      </View>

      {/* Sub Judul */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Kesimpulan Logis</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          1時間授業に遅れたので、教室に入れないことになった。
        </Text>
        <Text style={styles.id}>
          → Karena terlambat satu jam pelajaran, jadi tidak bisa masuk kelas.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          本が4冊あるから、1週間に1冊読めば1ヶ月で読み終わることになる。
        </Text>
        <Text style={styles.id}>
          → Karena ada 4 buku, jika membaca 1 buku per minggu maka akan selesai dalam 1 bulan.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FB",
    padding: 16,
  },

  titleBox: {
    backgroundColor: "#4F46E5",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  section: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4338CA",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 22,
    marginBottom: 10,
    textAlign: "justify",
  },

  subBox: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  subTitle: {
    color: "#1E3A8A",
    fontWeight: "bold",
    fontSize: 15,
  },

  exampleBox: {
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 4,
    borderLeftColor: "#6366F1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  jp: {
    fontSize: 14,
    color: "#111827",
    marginBottom: 6,
  },
  id: {
    fontSize: 13,
    color: "#4B5563",
  },
});
