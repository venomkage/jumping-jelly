import React from "react";
import { View, StyleSheet } from "react-native";

const Obstacle = ({ obstacleY }) => {
  return <View style={[styles.obstacle, { top: obstacleY }]} />;
};

const styles = StyleSheet.create({
  obstacle: {
    position: "absolute",
    width: 30,
    height: 100,
    backgroundColor: "red",
    borderRadius: 15,
  },
});

export default Obstacle;
