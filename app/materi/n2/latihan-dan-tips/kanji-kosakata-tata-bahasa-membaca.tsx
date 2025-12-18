import React, { ReactNode, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

interface QuestionItemProps {
  number: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

const QuestionItem = ({
  number,
  question,
  options,
  answer,
  explanation,
}: QuestionItemProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.questionBox}>
      <Text style={styles.question}>
        {number}. {question}
      </Text>

      {options.map((opt, idx) => (
        <Text key={idx} style={styles.option}>
          {opt}
        </Text>
      ))}

      <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.toggle}>
          {showAnswer
            ? "Sembunyikan jawaban"
            : "Klik di sini untuk melihat jawabannya"}
        </Text>
      </TouchableOpacity>

      {showAnswer && (
        <View style={styles.answerBox}>
          <Text style={styles.answer}>Jawaban: {answer}</Text>
          <Text style={styles.explanation}>{explanation}</Text>
        </View>
      )}
    </View>
  );
};

export default function KanjiKosakataTataBahasaMembacaN2() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>Contoh Soal dan Persiapan JLPT N2</Text>

      <Section title="Contoh Soal Kanji, Kosakata, Tata Bahasa, dan Membaca">
        <Text style={styles.subTitle}>Kanji & Kosakata</Text>

        <QuestionItem
          number={1}
          question="この問題が深刻になったことを改めて感じた。"
          options={[
            "a. あらためて",
            "b. あらかじめて",
            "c. ひらめて",
            "d. ひらためて",
          ]}
          answer="a. あらためて"
          explanation="Dibaca aratamete: kembali lagi. Kalimat lengkapnya “kono mondai ga shinkoku ni natta koto wo aratamete kanjita”, yang berarti saya kembali lagi merasakan bahwa masalah ini menjadi semakin serius."
        />

        <QuestionItem
          number={2}
          question="これにはかちがあると思う。"
          options={["a. 価格", "b. 価値", "c. 課格", "d. 課値"]}
          answer="b. 価値"
          explanation="Dibaca kachi: nilai. Kalimat lengkapnya “kore ni wa kachi ga aru to omou” yang artinya menurut saya benda ini memiliki nilai."
        />

        <QuestionItem
          number={3}
          question="彼はじゅんすいな心を持っていた。"
          options={["a. 純粋", "b. 純清", "c. 純潔", "d. 純枠"]}
          answer="a. 純粋"
          explanation="Dibaca junsui: murni. Kalimat lengkapnya “kare wa junsui na kokoro wo motte ita” yang berarti dia laku-laki dulu memiliki hati yang murni."
        />

        <Text style={styles.subTitle}>Mengisi Kosakata</Text>

        <QuestionItem
          number={4}
          question="会議の際に、スマホの電源を（　　　）のを忘れないように。"
          options={["a. 切る", "b. 出す", "c. 消す", "d. 取る"]}
          answer="a. 切る"
          explanation="sumaho no dengen wo kiru: mematikan baterai HP"
        />

        <QuestionItem
          number={5}
          question="ほめたら、「いいえ、まだまだです」と（　　　）していた。"
          options={["a. 診察", "b. 参考", "c. 謙遜", "d. 納得"]}
          answer="c. 謙遜"
          explanation="Kenson suru: merendah. Kalimat lengkapnya “Sakamoto-san no Indonesia-go wo hometara, iie mada mada desu to kenson shite ita” yang artinya ketoka saya memuji bahasa Indonesia Sakamoto, ia merendah dengan berkata, tidak masih belum."
        />

        <Text style={styles.subTitle}>Tata Bahasa</Text>

        <QuestionItem
          number={6}
          question="何も勉強しないとき（　　　）、試験が行われる。"
          options={[
            "a. について",
            "b. にそって",
            "c. にそういない",
            "d. にかぎって",
          ]}
          answer="d. にかぎって"
          explanation="Kata yang paling tepat adalah pada pilihan 4, “moyori-eki”: stasiun terdekat, kalimat lengkapnya “moyori-eki made okurimashouka?” yang ebrarti mau saya antar sampai stasiun terdekat? Kemudian kalimat pada pilihan lain tidak bisa digunakan."
        />

        <QuestionItem
          number={7}
          question="しばらく休んでいますが、仕事を辞める（　　　）。"
          options={[
            "a. わけではないです",
            "b. わけです",
            "c. しだいです",
            "d. とのことです",
          ]}
          answer="a. わけではないです"
          explanation="Pola paling tepat adalah ~ni kagitte: malah disaat~, kalimat lengkapnya adalah “nani mo benkyou shinai toki ni kagitte shiken ga okonawareru” yang artinya malah di saat tidak belajar, ujian dilaksanakan"
        />

        <Text style={styles.subTitle}>Membaca</Text>
        <Text style={styles.paragraph}>
          Soal membaca JLPT N2 biasanya setara dengan teks berita dan menuntut
          pemahaman makna tersirat.
        </Text>
      </Section>

      <Section title="Strategi Belajar dan Persiapan JLPT N2">
  <Text style={styles.subTitle}>Belajar Kosakata dan Kanji Baru dari Berita</Text>

  <Text style={styles.paragraph}>
    Kosakata JLPT N2 jauh lebih sulit dan lebih rumit dibandingkan level N5 hingga N3.
    Oleh karena itu, peserta ujian perlu menambah pengetahuan kosakata level N2 melalui
    berbagai cara dan media pembelajaran.
  </Text>

  <Text style={styles.paragraph}>
    Sangat disarankan untuk mulai mempelajari kosakata melalui berita-berita berbahasa Jepang.
    Belajar kata baru dari contoh kalimat akan membantu mengingat kosakata yang semakin kompleks.
  </Text>

  <Text style={styles.paragraph}>
    Sambil mempelajari kosakata baru, peserta ujian juga dapat belajar kanji baru sekaligus.
    Untuk persiapan JLPT N2, biasakan diri dengan kanji level N2 menggunakan metode belajar
    yang paling nyaman, seperti menulis, membaca, atau menonton konten berbahasa Jepang.
  </Text>

  <Text style={styles.subTitle}>Cari Kumpulan Kosakata JLPT N2</Text>

  <Text style={styles.paragraph}>
    Mencari kumpulan kosakata merupakan salah satu cara efektif untuk mempersiapkan ujian JLPT N2.
    Kosakata dapat diperoleh melalui buku latihan maupun media daring.
  </Text>

  <Text style={styles.paragraph}>
    Manfaatkan internet secara maksimal, baik melalui website pembelajaran bahasa Jepang
    maupun video YouTube yang dibuat oleh penutur asli Jepang. Banyak channel yang secara
    khusus membahas materi JLPT N2.
  </Text>

  <Text style={styles.subTitle}>Pelajari Pola Tata Bahasa JLPT N2</Text>

  <Text style={styles.paragraph}>
    Pola tata bahasa JLPT N2 memiliki tingkat kesulitan yang lebih tinggi dibandingkan JLPT N3.
    Oleh karena itu, peserta ujian perlu meluangkan waktu khusus untuk mempelajarinya.
  </Text>

  <View style={styles.list}>
    {[
      "~ippou da: menjadi~",
      "~kanenai: ada kemungkinan~",
      "~kaneru: sulit untuk~",
      "~ni kagitte: malah ketika~",
      "~ni tsuki: karena~",
      "~ni soui nai: pasti~",
      "~shidai da: tergantung~",
      "~shitagatte: oleh karena itu~",
      "~sono ue: selain itu~",
      "~te tamaranai: sangat / tidak bisa tidak~",
      "~te wa irarenai: tidak bisa~",
      "~wake da: artinya / kesimpulannya~",
      "~wake ni wa ikanai: tidak bisa~",
      "~wo keiki ni: pada kesempatan~",
      "~zu ni sumu: berakhir tanpa melakukan~",
    ].map((item, index) => (
      <Text key={index} style={styles.listItem}>
        • {item}
      </Text>
    ))}
  </View>

  <Text style={styles.paragraph}>
    Daftar di atas hanyalah sebagian dari pola tata bahasa JLPT N2.
    Masih banyak variasi lainnya yang perlu dipelajari secara bertahap.
  </Text>

  <Text style={styles.subTitle}>Rajin Membaca Teks Bahasa Jepang</Text>

  <Text style={styles.paragraph}>
    Membaca teks berbahasa Jepang secara rutin sangat efektif untuk meningkatkan kemampuan
    bahasa Jepang, khususnya dalam persiapan JLPT N2.
  </Text>

  <Text style={styles.paragraph}>
    Bacaan yang direkomendasikan adalah berita berbahasa Jepang karena kosakata dan struktur
    kalimatnya setara dengan ujian membaca JLPT N2.
  </Text>

  <Text style={styles.subTitle}>Tips Saat Ujian</Text>

  <Text style={styles.paragraph}>
    Saat ujian berlangsung, bacalah soal terlebih dahulu sebelum membaca teks.
    Hal ini membantu menghemat waktu dan mempermudah pencarian jawaban.
  </Text>

  <Text style={styles.paragraph}>
    Usahakan menjawab soal kosakata, kanji, dan tata bahasa dengan cepat agar
    tersedia waktu lebih banyak untuk mengerjakan soal membaca.
  </Text>

  <Text style={styles.subTitle}>Latihan Soal Secara Rutin</Text>

  <Text style={styles.paragraph}>
    Memiliki buku latihan soal JLPT N2 dan rutin berlatih akan membantu memahami
    pola soal serta tingkat kesulitan ujian.
  </Text>

  <Text style={styles.paragraph}>
    Buku latihan resmi yang diterbitkan di Jepang sangat disarankan karena sesuai
    dengan standar ujian JLPT yang sebenarnya.
  </Text>
</Section>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff3ee",
  },
  content: {
    padding: 16,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#0F3B36",
  },

  section: {
    marginBottom: 24,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0F3B36",
  },

  sectionContent: {
    paddingLeft: 4,
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    color: "#0F3B36",
  },

  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginVertical: 6,
    color: "#333",
  },

  questionBox: {
    marginBottom: 14,
    padding: 12,
    backgroundColor: "#f7fcfb",
    borderRadius: 10,
  },

  question: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F3B36",
  },

  option: {
    fontSize: 14,
    marginLeft: 12,
    marginTop: 4,
    color: "#333",
  },

  toggle: {
    marginTop: 8,
    color: "#0F766E",
    fontWeight: "600",
  },

  answerBox: {
    marginTop: 8,
    padding: 10,
    backgroundColor: "#e6f4f1",
    borderRadius: 8,
  },

  answer: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#166534",
    marginBottom: 4,
  },

  explanation: {
    fontSize: 13,
    lineHeight: 20,
    color: "#333",
  },

  list: {
    marginVertical: 8,
    paddingLeft: 8,
  },

  listItem: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
    color: "#333",
  },
});
