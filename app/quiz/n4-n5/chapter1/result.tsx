import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ResultPage() {
  const { correct } = useLocalSearchParams();
  const router = useRouter();

  const correctNum = Number(correct);
  const wrong = 5 - correctNum;

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>


        {/* CARD besar berisi GIF + Benar/Salah */}
        <View style={styles.card}>
        <Text style={styles.title}>Hasil Quiz Kamu!</Text>
          {/* GIF */}
          <Image
            source={{
              uri: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnNsaWpvZWk0N3JuOG9kZ3RkaW1rdGZjZWtiMnBuMGZsZHJ2bmNzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dKBES1ypGwZdyFQBQ7/giphy.gif",
            }}
            style={styles.gif}
          />

          {/* Row Benar & Salah */}
          <View style={styles.resultRow}>
            <View style={[styles.resultBox, styles.correctBox]}>
              <Text style={styles.resultLabel}>Benar</Text>
              <Text style={styles.resultValue}>{correctNum}</Text>
            </View>

            <View style={[styles.resultBox, styles.wrongBox]}>
              <Text style={styles.resultLabel}>Salah</Text>
              <Text style={styles.resultValue}>{wrong}</Text>
            </View>
          </View>
        </View>

        {/* Button ulangi */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/quiz/n4-n5/chapter1")}
        >
          <Text style={styles.buttonText}>Ulangi Quiz</Text>
        </TouchableOpacity>

        {/* Button Home */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.homeButtonText}>Kembali ke Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDE7FF",
    alignItems: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A4BBC",
    marginBottom: 20,
  },

  // Card besar
  card: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    marginBottom: 30,
  },

  gif: {
    width: 265,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },

  resultRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  resultBox: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 5,
  },

  correctBox: {
    backgroundColor: "#C6F6D5", // soft green
  },
  wrongBox: {
    backgroundColor: "#FED7D7", // soft red
  },

  resultLabel: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },

  resultValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#7A5AF8",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 3,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  homeButton: { marginTop: 15 },
  homeButtonText: {
    fontSize: 16,
    color: "#6A4BBC",
    fontWeight: "600",
  },
});
