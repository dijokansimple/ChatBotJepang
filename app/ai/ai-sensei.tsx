import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Markdown from "react-native-markdown-display";

type ChatMessage = { sender: "user" | "bot"; text: string };

export default function AiSensei() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef<ScrollView>(null);

  const API_KEY = "YOUR_OPENAI_API_KEY"; // << GANTI DI SINI !!!

  const goBack = () => {
    if (router.canGoBack()) router.back();
    else router.push("/");
  };

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMsg: ChatMessage = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "Kamu adalah Ai-Sensei, guru bahasa Jepang." },
            ...chat.map(c => ({
              role: c.sender === "user" ? "user" : "assistant",
              content: c.text
            })),
            { role: "user", content: userMsg.text }
          ],
          temperature: 0.6
        })
      });

      const data = await response.json();

      const botReply =
        data?.choices?.[0]?.message?.content ||
        "Maaf, Sensei tidak dapat merespons. 😢";

      setChat((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (e: any) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: `⚠️ Error koneksi: ${e?.message || "Tidak diketahui"}` }
      ]);
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Stack.Screen options={{ headerShown: false }} />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={22} color="#222" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Modul Pembelajaran</Text>
          <Text style={styles.headerSubtitle}>NihonGo AI Sensei</Text>
        </View>
      </View>

      {/* LOGO */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={{ fontSize: 32 }}>🎌</Text>
        </View>
        <Text style={styles.logoTitle}>NihonGo Sensei Chatbot</Text>
      </View>

      {/* CHAT */}
      <ScrollView
        ref={scrollRef}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
        contentContainerStyle={styles.chatContainer}
      >
        {chat.map((msg, i) => (
          <View
            key={i}
            style={[
              styles.bubble,
              msg.sender === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Markdown
              style={{
                body: {
                  color: msg.sender === "user" ? "#fff" : "#333",
                  fontSize: 16,
                },
              }}
            >
              {msg.text}
            </Markdown>
          </View>
        ))}

        {loading && (
          <View style={[styles.botBubble, { flexDirection: "row" }]}>
            <ActivityIndicator size="small" color="#666" />
            <Text style={{ marginLeft: 10, color: "#555" }}>Sensei berpikir...</Text>
          </View>
        )}
      </ScrollView>

      {/* INPUT */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Tulis pesan..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#dff5ef" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 10 : 22,
    backgroundColor: "#dff5ef"
  },

  backButton: {
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#ffffffcc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  headerTitle: { fontSize: 16, fontWeight: "bold", color: "#222" },
  headerSubtitle: { fontSize: 12, color: "#444" },

  logoContainer: { alignItems: "center", marginVertical: 10 },

  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#ffffffdd",
    justifyContent: "center",
    alignItems: "center",
  },

  logoTitle: { fontSize: 18, fontWeight: "600", marginTop: 5 },

  chatContainer: { padding: 10 },

  bubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
  },

  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#4e8cff",
    borderBottomRightRadius: 4,
  },

  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffffdd",
    borderBottomLeftRadius: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
    fontSize: 16,
    marginRight: 10,
  },

  sendBtn: {
    backgroundColor: "#4e8cff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
});
