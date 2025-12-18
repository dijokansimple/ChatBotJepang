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
      <Text style={styles.pageTitle}>
        Contoh Soal dan Persiapan untuk Sesi Mendengarkan JLPT N2
      </Text>

      <Section title="Contoh Soal Sesi Mendengarkan">
        <Text style={styles.paragraph}>
          Dalam sesi mendengarkan JLPT N2, audio hanya diputar satu kali, sehingga
          peserta ujian harus fokus dari awal hingga akhir sesi.
        </Text>

        <QuestionItem
          number={8}
          question="この間、初めてコンサートを見に行ったんだけど、また行きたくてたまらないんだ。"
          options={[
            "コンサートにまた行っちゃったんだ。",
            "コンサート、なんでたまっていないの。",
            "コンサート、好きなんだね。",
          ]}
          answer="3"
          explanation="Pilihan 3 menunjukkan pemahaman bahwa pembicara sangat menyukai konser."
        />

        <QuestionItem
          number={9}
          question="今度、うちにおいでになりませんか。"
          options={[
            "うちにはおりませんが。",
            "えっ、伺ってもよろしいでしょうか。",
            "ええ、来ていただけませんか。",
          ]}
          answer="2"
          explanation="Respon sopan yang tepat terhadap undangan."
        />

        <QuestionItem
          number={10}
          question="昨日さ、あの人気なレストランに行ったんだけど、味は期待したほどではなかったよ。"
          options={[
            "なるほど。だから混んでるんだよね。",
            "じゃ、なんで人気があるんだろう。",
            "えっ、そんなに期待してなかったのに。",
          ]}
          answer="2"
          explanation="Respon logis yang menanyakan alasan popularitas restoran."
        />
      </Section>

      <Section title="Tips Persiapan Sesi Mendengarkan JLPT N2">
        <Text style={styles.paragraph}>
            Ini adalah beberapa tips agar kalian bisa mempersiapkan diri untuk menjawab
            soal pada sesi mendengarkan JLPT N2.
        </Text>

        <Text style={styles.subTitle}>
            Banyak Berlatih Menyimak Audio Bahasa Jepang
        </Text>
        <Text style={styles.paragraph}>
            Sebagai persiapan menghadapi ujian JLPT N2 sesi mendengarkan, rajin berlatih
            menyimak audio dalam bahasa Jepang merupakan hal yang sangat penting.
            Disarankan untuk membiasakan diri mendengarkan audio bahasa Jepang dengan
            tingkat kesulitan yang lebih tinggi dibandingkan ujian level N3.
        </Text>
        <Text style={styles.paragraph}>
            Kalian dapat melatih pendengaran dengan menyimak berita berbahasa Jepang.
            Selain itu, latihan soal mendengarkan melalui internet dan YouTube juga
            sangat membantu.
        </Text>

        <Text style={styles.subTitle}>Tetap Fokus dan Jaga Konsentrasi</Text>
        <Text style={styles.paragraph}>
            Peserta tes harus mampu menjaga fokus dan konsentrasi selama ujian
            berlangsung. Karena sesi mendengarkan merupakan sesi terakhir, peserta
            sering merasa lelah atau mengantuk.
        </Text>
        <Text style={styles.paragraph}>
            Perlu diingat bahwa audio ujian hanya diputar satu kali, sehingga penting
            untuk tetap berkonsentrasi dari awal hingga akhir sesi agar tidak kehilangan
            informasi penting.
        </Text>

        <Text style={styles.subTitle}>Belajar dengan Orang Jepang</Text>
        <Text style={styles.paragraph}>
            Belajar dengan orang Jepang berarti membiasakan diri berkomunikasi langsung
            dengan penutur asli bahasa Jepang.
        </Text>
        <Text style={styles.paragraph}>
            Jika sudah memiliki sertifikat JLPT N3, kalian seharusnya sudah mampu
            melakukan komunikasi sederhana. Dengan sering mendengarkan orang Jepang
            berbicara dan berinteraksi langsung, kemampuan menyimak akan meningkat
            secara signifikan.
        </Text>
        <Text style={styles.paragraph}>
            Beberapa peserta ujian menyatakan bahwa sesi mendengarkan terasa paling
            mudah karena mereka terbiasa berkomunikasi dengan orang Jepang, meskipun
            sesi pertama terasa lebih sulit.
        </Text>
        <Text style={styles.paragraph}>
            Jika belum memiliki kenalan orang Jepang, kalian bisa memanfaatkan media
            sosial, platform belajar bahasa, atau konten internet untuk melatih
            kemampuan mendengarkan audio bahasa Jepang.
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
  },
  explanation: {
    fontSize: 13,
    lineHeight: 20,
    color: "#333",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    color: "#0F3B36",
  },
});
