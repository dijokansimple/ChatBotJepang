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
        text: data?.candidates?.[0]?.content?.parts?.[0]?.text || "Terjadi kesalahan.",
      };

      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      console.log("API Error:", err);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f5f5f5" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
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
    backgroundColor: "#e0e0e0",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
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
