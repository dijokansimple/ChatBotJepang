import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TateScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Judul */}
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Fungsi 「tate」</Text>
      </View>

      {/* Pola Kalimat */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pola Kalimat</Text>
        <Text style={styles.paragraph}>
          Kata kerja bentuk masu + tate {"\n"}
          Kata kerja bentuk masu + tate no + kata benda
        </Text>
      </View>

      {/* Penggunaan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Penggunaan 「tate」</Text>
        <Text style={styles.paragraph}>
          Tata bahasa “tate” termasuk dalam pola kalimat bahasa Jepang N3 yang
          digunakan untuk menyatakan sesuatu yang baru saja dibuat atau dilakukan
          dan masih memiliki kesan kebaruan atau kesegaran. Oleh karena itu, tidak
          semua kata kerja bisa digabungkan dengan pola “tate”. Dalam bahasa
          Indonesia, pola ini dapat diterjemahkan dengan makna “baru saja”.
          Kesan yang ditunjukkan biasanya berupa kondisi yang masih segar, baru,
          atau belum lama selesai dilakukan.
        </Text>
      </View>

      {/* Contoh Benar & Salah */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Contoh Penggunaan</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          作りたてのラーメン（〇）
        </Text>
        <Text style={styles.id}>
          → Ramen yang baru saja dibuat. Masih panas, berasap, dan aromanya masih tercium.
        </Text>
      </View>

      <View style={styles.exampleBoxWrong}>
        <Text style={styles.jp}>
          食べたてのラーメン（×）
        </Text>
        <Text style={styles.id}>
          → Tidak bisa digunakan karena tidak menunjukkan kesan kebaruan atau kesegaran.
        </Text>
      </View>

      {/* Contoh Kalimat */}
      <View style={styles.subBox}>
        <Text style={styles.subTitle}>Contoh Kalimat</Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          あのパン屋は焼きたてのパンを売っているので、いつもいい匂いがします。
        </Text>
        <Text style={styles.id}>
          → Karena toko roti itu menjual roti yang baru dipanggang, jadi selalu tercium bau yang enak.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          先週行った牧場で、しぼりたての牛乳を初めて飲みました。
        </Text>
        <Text style={styles.id}>
          → Di peternakan yang saya kunjungi minggu lalu, untuk pertama kalinya saya minum susu yang baru diperah.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          この部屋はペンキが塗りたてです。注意してください。
        </Text>
        <Text style={styles.id}>
          → Ruangan ini baru saja dicat, harap berhati-hati.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          私の家族は午後四時ごろ、ベランダで入れたてのお茶を飲みながらおしゃべりします。
        </Text>
        <Text style={styles.id}>
          → Keluarga saya sekitar jam empat sore sering mengobrol di beranda sambil minum teh yang baru dibuat.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          温めた料理よりは、できたての料理のほうがいいですよ。
        </Text>
        <Text style={styles.id}>
          → Dibandingkan masakan yang dihangatkan, masakan yang baru dibuat lebih baik.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          あのカップルは付き合いたてなので、いつも長電話をしています。
        </Text>
        <Text style={styles.id}>
          → Karena pasangan itu baru saja jadian, mereka selalu berlama-lama menelepon.
        </Text>
      </View>

      <View style={styles.exampleBox}>
        <Text style={styles.jp}>
          川で釣りたての魚を焼いて、友達と一緒に食べました。
        </Text>
        <Text style={styles.id}>
          → Saya membakar ikan yang baru dipancing di sungai lalu memakannya bersama teman-teman.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    padding: 16,
  },

  titleBox: {
    backgroundColor: "#FDE2E4",
    padding: 14,
    borderRadius: 16,
    marginBottom: 16,
  },
  titleText: {
    color: "#9F1239",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  section: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#BE123C",
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 22,
    textAlign: "justify",
  },

  subBox: {
    backgroundColor: "#FFE4E6",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 10,
  },
  subTitle: {
    color: "#9F1239",
    fontWeight: "bold",
    fontSize: 15,
  },

  exampleBox: {
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 4,
    borderLeftColor: "#FDA4AF",
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
  },
  exampleBoxWrong: {
    backgroundColor: "#FFF1F2",
    borderLeftWidth: 4,
    borderLeftColor: "#FB7185",
    padding: 12,
    borderRadius: 14,
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
