import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { Ionicons } from "@expo/vector-icons"; 

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<ScrollView>(null);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMsg: ChatMessage = { sender: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.EXPO_PUBLIC_GEMINI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }],
          }),
        }
      );

      const data = await res.json();

      const botMsg: ChatMessage = {
        sender: "bot",
        text:
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Terjadi kesalahan.",
      };

      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      console.log("API Error:", err);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#dff3eeff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.hamButton}>
          <Ionicons name="menu" size={22} color="#222" />
        </TouchableOpacity>

        <View style={styles.headerTitleWrap}>
          <Text style={styles.appTitle}>Modul Pembelajaran</Text>
          <Text style={styles.subTitle}>Pusat Bantuan SmartEdu Chatbot</Text>
        </View>

        <View style={{ width: 25 }} />
      </View>

      {/* LOGO + TITLE */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={{ fontSize: 28 }}>🎌</Text>
        </View>
        <Text style={styles.logoTitle}>NihonGo Sensei Chatbot</Text>
      </View>

      {/* MAIN CHAT */}
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ padding: 10 }}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
      >
        {chat.map((msg, i) => (
          <View
            key={i}
            style={[
              styles.chatBubble,
              msg.sender === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Markdown
              style={{
                body: {
                  color: msg.sender === "user" ? "white" : "#333",
                  fontSize: 16,
                },
                link: {
                  color: "#4f93ff",
                  textDecorationLine: "underline",
                },
              }}
            >
              {msg.text}
            </Markdown>
          </View>
        ))}
      </ScrollView>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Tulis pesan..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Kirim</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#dff3eeff",
  },

  /* ===== HEADER ===== */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#dff3eeff",
    borderBottomWidth: 1,
    borderBottomColor: "#cde8e1",
  },

  hamButton: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#ffffffaa",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  headerTitleWrap: {
    flex: 1,
  },

  appTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },

  subTitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },

  /* ===== LOGO SECTION ===== */
  logoContainer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#ffffffcc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  logoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#222",
  },

  /* ===== CHAT BUBBLES ===== */
  chatBubble: {
    maxWidth: "80%",
    marginVertical: 4,
    padding: 10,
    borderRadius: 15,
  },

  userBubble: {
    backgroundColor: "#4f93ff",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },

  botBubble: {
    backgroundColor: "#fffefeff",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },

  /* ===== INPUT BAR ===== */
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },

  sendButton: {
    backgroundColor: "#4f93ff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  sendText: {
    color: "white",
    fontWeight: "bold",
  },
});
