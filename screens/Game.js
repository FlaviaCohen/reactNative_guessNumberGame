import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";
import FailItem from "../components/game/FailItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNumb = Math.floor(Math.random() * (max - min) + min);

  if (rndNumb === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumb;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const Game = ({ number, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, number);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [fails, setFails] = useState([initialGuess]);

  const { width } = useWindowDimensions();

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "higher" && currentGuess > number)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setFails((prevFails) => [newRndNumber, ...prevFails]);
  };

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess.toString() === number) {
      onGameOver(fails.length);
    }
  }, [currentGuess, number, onGameOver]);

  const round = fails.length;

  const padding = width <= 400 ? 20 : 40;
  const listPadding = width <= 400 ? 16 : 0;

  let content =
    width >= 400 ? (
      <>
        <View style={styles.buttonsWide}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons
                name="md-remove"
                size={width <= 400 ? 12 : 24}
                color="white"
              />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.button}>
            <PrimaryButton
              style={styles.button}
              onPress={() => nextGuessHandler("higher")}
            >
              <Ionicons
                name="md-add"
                size={width <= 400 ? 12 : 24}
                color="white"
              />
            </PrimaryButton>
          </View>
        </View>
      </>
    ) : (
      <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionsText style={styles.instructionsText}>
            Lower or Higher?
          </InstructionsText>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Ionicons
                  name="md-remove"
                  size={width <= 400 ? 12 : 24}
                  color="white"
                />
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton
                style={styles.button}
                onPress={() => nextGuessHandler("higher")}
              >
                <Ionicons
                  name="md-add"
                  size={width <= 400 ? 12 : 24}
                  color="white"
                />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </>
    );
  return (
    <View style={[styles.container, { padding }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={[styles.list, { padding: listPadding }]}>
        <FlatList
          data={fails}
          renderItem={(fail) => (
            <FailItem round={round - fail.index} guess={fail.item} />
          )}
          keyExtractor={(fail) => fail}
        />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  instructionsText: {
    marginBottom: 12,
  },
  buttonsWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
