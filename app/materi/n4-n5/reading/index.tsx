import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODU1Z3V6d2l0c3ZiOThnaHhocWVhb2o1N2t1NGc5dHk4amthbmhyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sx0df0AiEZirb7cqOc/giphy.gif"
        }}
        style={styles.image}
      />

      <Text style={styles.text}>INI PAGE MATERI READING TAPI MASIH COMING SOON :((</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C8E5E0",
    padding: 20,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
});
