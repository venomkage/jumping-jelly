import React from "react";
import { View, StyleSheet } from "react-native";

const Jelly = ({ jellyY }) => {
  return <View style={[styles.jelly, { bottom: jellyY }]} />;
};

const styles = StyleSheet.create({
  jelly: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
  },
});

export default Jelly;
