import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Score = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.6)",
  },
});

export default Score;
