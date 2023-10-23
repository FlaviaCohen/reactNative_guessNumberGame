import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import Game from "./screens/Game";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import AppLoading from "expo-app-loading";

const App = () => {
  const [number, setNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const numberHandler = (number) => {
    setNumber(number);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setNumber(null);
    setRounds(0);
  };

  let screen = <StartGame onPickNumber={numberHandler} />;

  if (number) {
    screen = <Game number={number} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && number) {
    screen = (
      <GameOver
        rounds={rounds}
        number={number}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
