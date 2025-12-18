import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JLPTN1() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.level}>JLPT N1</Text>
          <Text style={styles.heroText}>
            Panduan Lengkap & Mendalam untuk Menguasai Bahasa Jepang Tingkat Mahir
          </Text>
        </View>

        {/* Tentang */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tentang JLPT N1</Text>
          <Text style={styles.paragraph}>
            Japanese Language Proficiency Test (JLPT) N1 merupakan tingkat
            tertinggi dalam sistem pengujian kemampuan bahasa Jepang bagi
            penutur asing. Level ini diperuntukkan bagi pembelajar yang telah
            mencapai tahap mahir dan mampu menggunakan bahasa Jepang secara
            alami dalam berbagai situasi kompleks.
          </Text>
          <Text style={styles.paragraph}>
            Pada level N1, peserta tidak hanya diuji dari segi hafalan kosakata
            dan tata bahasa, tetapi juga kemampuan memahami makna implisit,
            nuansa emosi, serta logika penyampaian informasi dalam teks dan
            percakapan panjang.
          </Text>
          <Text style={styles.paragraph}>
            JLPT N1 sering menjadi syarat untuk melanjutkan studi di universitas
            Jepang, melamar pekerjaan profesional, serta membuktikan
            kompetensi bahasa Jepang tingkat lanjut.
          </Text>
        </View>

        {/* Struktur */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Struktur Ujian JLPT N1</Text>

          <Text style={styles.subTitle}>1. Language Knowledge (文字・語彙・文法)</Text>
          <Text style={styles.paragraph}>
            Bagian ini menguji penguasaan kanji tingkat lanjut, kosakata formal,
            ungkapan abstrak, serta pola tata bahasa kompleks yang sering
            digunakan dalam tulisan akademik dan dunia profesional.
          </Text>

          <Text style={styles.subTitle}>2. Reading (読解)</Text>
          <Text style={styles.paragraph}>
            Peserta akan menghadapi teks panjang seperti editorial surat kabar,
            esai opini, laporan penelitian, dan bacaan informatif. Fokus utama
            adalah memahami gagasan utama, detail penting, serta sudut pandang
            penulis.
          </Text>

          <Text style={styles.subTitle}>3. Listening (聴解)</Text>
          <Text style={styles.paragraph}>
            Pada bagian ini, kemampuan memahami percakapan alami, pidato
            formal, diskusi kelompok, serta monolog panjang diuji dengan
            kecepatan bicara tinggi dan kosakata yang kompleks.
          </Text>
        </View>

        {/* Durasi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Durasi & Sistem Penilaian</Text>
          <Text style={styles.paragraph}>
            Ujian JLPT N1 dibagi menjadi dua sesi utama. Sesi pertama mencakup
            Language Knowledge dan Reading dengan durasi sekitar 110 menit.
            Sesi kedua adalah Listening dengan durasi sekitar 60 menit.
          </Text>
          <Text style={styles.paragraph}>
            Skor maksimal adalah 180 poin. Peserta dinyatakan lulus apabila
            memperoleh minimal 100 poin secara total dan memenuhi batas
            minimum skor pada setiap bagian ujian.
          </Text>
        </View>

        {/* Kesulitan */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Tingkat Kesulitan</Text>
          <Text style={styles.paragraph}>
            JLPT N1 dikenal sebagai ujian yang sangat menantang karena banyak
            soal bersifat implisit dan tidak dapat dijawab hanya dengan
            mengandalkan terjemahan kata per kata.
          </Text>
          <Text style={styles.paragraph}>
            Peserta dituntut untuk memahami konteks, alur logika, serta maksud
            tersembunyi dari penulis atau pembicara. Oleh karena itu, latihan
            intensif dan paparan bahasa Jepang autentik sangat diperlukan.
          </Text>
        </View>

        {/* Strategi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Strategi Belajar Efektif</Text>
          <Text style={styles.paragraph}>
            Untuk mencapai kelulusan JLPT N1, pembelajar disarankan untuk rutin
            membaca berita Jepang, jurnal, dan esai akademik guna memperkaya
            kosakata serta pemahaman struktur kalimat kompleks.
          </Text>
          <Text style={styles.paragraph}>
            Selain itu, membiasakan diri mendengarkan podcast, berita radio,
            serta diskusi formal tanpa subtitle akan sangat membantu dalam
            meningkatkan kemampuan listening.
          </Text>
          <Text style={styles.paragraph}>
            Menguasai kanji tingkat lanjut, memahami perbedaan nuansa kata
            serupa, serta sering mengerjakan soal latihan merupakan kunci
            utama dalam menghadapi JLPT N1.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f6f7fb",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 22,
    paddingBottom: 60,
  },
  header: {
    marginBottom: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  hero: {
    backgroundColor: "#4f6df5",
    borderRadius: 18,
    padding: 24,
    marginBottom: 32,
  },
  level: {
    fontSize: 40,
    fontWeight: "900",
    color: "#ffffff",
    marginBottom: 8,
  },
  heroText: {
    fontSize: 18,
    color: "#eef1ff",
    lineHeight: 26,
  },
  section: {
    marginBottom: 32,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 22,
    marginBottom: 32,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 16,
    color: "#1f2937",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 14,
    marginBottom: 10,
    color: "#374151",
  },
  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    color: "#374151",
    marginBottom: 14,
    textAlign: "justify",
  },
});