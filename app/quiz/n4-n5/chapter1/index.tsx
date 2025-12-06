import { Stack, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { quizData } from "./data";

interface QuestionType {
  question: string;
  options: string[];
  answer: number;
}

export default function QuizPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);

  // timer (seconds)
  const START_SECONDS = 40;
  const [secondsLeft, setSecondsLeft] = useState<number>(START_SECONDS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // progress bar animation
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // shuffle and pick 5
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 5));
  }, []);

  // start/reset timer on question change
  useEffect(() => {
    setSelected(null);
    setAnswered(false);
    setSecondsLeft(START_SECONDS);

    progressAnim.setValue(0);
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: START_SECONDS * 1000,
      useNativeDriver: false,
    }).start();

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      progressAnim.stopAnimation();
    };
  }, [current, questions.length]);

  const handleTimeout = () => {
    setAnswered(true);
    setTimeout(() => {
      goNextQuestion(false);
    }, 700);
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);

    const isCorrect = index === questions[current].answer;
    if (isCorrect) setCorrectCount((c) => c + 1);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    progressAnim.stopAnimation();

    setTimeout(() => {
      goNextQuestion(isCorrect);
    }, 700);
  };

  const goNextQuestion = (lastWasCorrect: boolean) => {
    const nextIndex = current + 1;
    if (nextIndex < questions.length) {
      setCurrent(nextIndex);
      setSelected(null);
      setAnswered(false);
      setSecondsLeft(START_SECONDS);
    } else {
      router.push({
        pathname: "/quiz/n4-n5/chapter1/result",
        params: { correct: String(correctCount + (lastWasCorrect ? 1 : 0)) },
      });
    }
  };

  if (questions.length === 0) {
    return (
      <Text style={{ textAlign: "center", marginTop: 50 }}>
        Loading soal...
      </Text>
    );
  }

  const q = questions[current];

  const progressInterpolate = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      {/* Hilangkan header expo-router */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Quiz Chapter 1: Angka dan bilangan dasar
        </Text>
      </View>

      {/* Progress Row */}
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>
          Question {current + 1} of {questions.length}
        </Text>
        <Text style={styles.timer}>
          ⏱ {secondsLeft < 10 ? `00:0${secondsLeft}` : `00:${secondsLeft}`}
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarBg}>
        <Animated.View
          style={[styles.progressBarFill, { width: progressInterpolate }]}
        />
      </View>

      {/* Question Box */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{q.question}</Text>
      </View>

      {/* Options */}
      {q.options.map((opt, index) => {
        const isSelected = selected === index;
        const isCorrectOption = index === q.answer;

        let optionStyle: any[] = [styles.option];

        if (answered) {
          if (isSelected && isCorrectOption)
            optionStyle.push(styles.optionCorrect);
          else if (isSelected && !isCorrectOption)
            optionStyle.push(styles.optionWrong);
          else if (!isSelected && isCorrectOption)
            optionStyle.push(styles.optionCorrectFaint);
        } else if (isSelected) {
          optionStyle.push(styles.optionSelectedPending);
        }

        return (
          <TouchableOpacity
            key={index}
            style={optionStyle}
            onPress={() => handleAnswer(index)}
            activeOpacity={0.8}
          >
            <View style={styles.optionLabelBox}>
              <Text style={styles.optionLabel}>
                {String.fromCharCode(65 + index)}
              </Text>
            </View>
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9C6FF",
    padding: 20,
    paddingTop: StatusBar.currentHeight || 30, // ★ FIX NAVBAR OVERLAP
  },

  header: { marginBottom: 10 },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressText: { color: "#fff", fontWeight: "600" },
  timer: { color: "#fff", fontWeight: "600" },

  progressBarBg: {
    height: 8,
    backgroundColor: "#BFA3FF",
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#79FF7A",
  },

  questionBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  questionText: { fontSize: 18, textAlign: "center", fontWeight: "600" },

  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E9DDFF",
    padding: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 12,
  },
  optionSelectedPending: {
    backgroundColor: "#FFDDAA",
    borderColor: "#FFB74D",
  },

  optionCorrect: {
    backgroundColor: "#C8F7D1",
    borderColor: "#2ECC71",
  },
  optionWrong: {
    backgroundColor: "#FFD6D6",
    borderColor: "#E74C3C",
  },
  optionCorrectFaint: {
    backgroundColor: "#ECF9F0",
    borderColor: "#A7E6C3",
  },

  optionLabelBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  optionLabel: { fontWeight: "700" },
  optionText: { fontSize: 16, fontWeight: "500" },
});
