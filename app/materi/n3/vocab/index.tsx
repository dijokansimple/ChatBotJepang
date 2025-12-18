import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VocabN3Index() {
  const router = useRouter();

  const vocabList = [
    {
      title: "Pekerjaan",
      jp: "仕事 (Shigoto)",
      color: "#FFE1E1",
      path: "/materi/n3/vocab/shigoto",
      icon: "💼",
    },
    {
      title: "Uang & Belanja",
      jp: "お金・買い物",
      color: "#E1F0FF",
      path: "/materi/n3/vocab/okane",
      icon: "💰",
    },
    {
      title: "Wisata / Liburan",
      jp: "旅行 (Ryokou)",
      color: "#E9FFE1",
      path: "/materi/n3/vocab/ryokou",
      icon: "✈️",
    },
    {
      title: "Tempat",
      jp: "場所 (Basho)",
      color: "#FFF4D6",
      path: "/materi/n3/vocab/basho",
      icon: "📍",
    },
    {
      title: "Cuaca & Alam",
      jp: "天気・自然",
      color: "#E1FFF8",
      path: "/materi/n3/vocab/tenki",
      icon: "🌦️",
    },
    {
      title: "Keluarga & Hubungan",
      jp: "家族・人間関係",
      color: "#F0E9FF",
      path: "/materi/n3/vocab/kazoku",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Desain & Fashion",
      jp: "デザイン・ファッション",
      color: "#FFE9F3",
      path: "/materi/n3/vocab/dezain",
      icon: "👗",
    },
    {
      title: "Olahraga & Seni",
      jp: "スポーツ・芸術",
      color: "#E9FFF1",
      path: "/materi/n3/vocab/supootsu",
      icon: "🎨⚽",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kosakata JLPT N3</Text>
      <Text style={styles.subTitle}>
        Pilih kategori kosakata yang ingin dipelajari
      </Text>

      {vocabList.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, { backgroundColor: item.color }]}
          onPress={() => router.push(item.path)}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <View style={styles.textBox}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.jp}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#F6FFFC",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F3B36",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#356B63",
    marginBottom: 24,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    fontSize: 30,
    marginRight: 16,
  },
  textBox: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F3B36",
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 14,
    color: "#3A6F68",
  },
});
