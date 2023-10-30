import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

const FailItem = ({ round, guess }) => {
  const { width } = useWindowDimensions();

  const responsive = {
    padding: width <= 400 ? 6 : 12,
    marginVertical: width <= 400 ? 6 : 8,
  };

  const fontSize = width <= 400 ? 10 : 16;

  return (
    <View style={[styles.item, responsive]}>
      <Text style={[styles.text, { fontSize }]}>#{round}</Text>
      <Text style={[styles.text, { fontSize }]}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default FailItem;

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans",
  },
});
