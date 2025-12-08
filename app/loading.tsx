import { useEffect, useRef } from "react";
import {
    ActivityIndicator,
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function LoadingScreen() {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
        <Image
          source={require("../assets/images/loading.gif")}
          style={styles.gif}
        />

        <Text style={styles.text}>Memuat konten...</Text>

        <ActivityIndicator size="large" color="#5B8DF7" style={{ marginTop: 10 }} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF2FF", // soft blue tone
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: 170,
    height: 170,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    color: "#4D6BCF",
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
