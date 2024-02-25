import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  NativeModules,
  Platform,
} from "react-native";
import Jelly from "../components/Jelly";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";
const { StatusBarManager } = NativeModules;

const GameScreen = () => {
  // const [jellyY, setJellyY] = useState(300); // Initial Y position of the jelly
  const jellyY = useSharedValue(300);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [height, setHeight] = useState(useWindowDimensions().height);
  const [STATUSBAR_HEIGHT, setSTATUSBAR_HEIGHT] = useState(0);

  useEffect(() => {
    if (Platform.OS === "ios") {
      StatusBarManager.getHeight((statusBarHeight) => {
        setSTATUSBAR_HEIGHT(statusBarHeight.height);
      });
    } else {
      StatusBarManager.HEIGHT;
    }
  }, []);

  // Function to handle jump
  const handleJump = () => {
    if (!gameStarted) {
      setStartTime(Date.now()); // Set start time when the game starts
      setGameStarted(true);
    }

    if (!gameOver) {
      console.log(jellyY, height, STATUSBAR_HEIGHT);
      jellyY.value = jellyY.value + 5; // Adjust the Y position for the jump
      if (jellyY >= height - STATUSBAR_HEIGHT) {
        // Check if the top of the screen is reached
        setEndTime(Date.now()); // Set end time when the top of the screen is reached
        setGameOver(true);
      }
    }
  };

  // Calculate the score in seconds
  const calculateScore = () => {
    if (startTime !== 0 && endTime !== 0) {
      const scoreInSeconds = Math.floor((endTime - startTime) / 1000);
      return scoreInSeconds;
    }
    return 0;
  };

  return (
    <ImageBackground
      onLayout={(event) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        setHeight(height);
      }}
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleJump} // Handle jump action when user taps on the screen
        style={styles.gameContainer}
      >
        <Animated.View style={[styles.jelly, { bottom: jellyY }]} />
        {gameOver && (
          <Text style={styles.scoreText}>Score: {calculateScore()} seconds</Text>
        )}
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  gameContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  jelly: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 25,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 5,
  },
});

export default GameScreen;
