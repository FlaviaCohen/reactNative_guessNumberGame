import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionsText from "../components/ui/InstructionsText";

const StartGame = ({ onPickNumber }) => {
  const [number, setNumber] = useState("");

  const { height } = useWindowDimensions();

  const marginTop = height <= 400 ? 30 : 100;

  const handleChange = (value) => {
    setNumber(value);
  };

  const resetHandler = () => {
    setNumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Value has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetHandler() }]
      );
      return;
    }
    onPickNumber(number);
  };

  return (
    <ScrollView style={styles.screen}>
      {/* if the user types outside the keyboard it closes */}
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionsText style={styles.instructionText}>
              Enter a Number
            </InstructionsText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              //supported on Android and IOs
              keyboardType="number-pad"
              //not needed for numbers
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange}
              value={number}
            />
            <View style={styles.buttons}>
              <View style={styles.button}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
