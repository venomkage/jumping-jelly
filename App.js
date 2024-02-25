import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
