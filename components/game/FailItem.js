import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const FailItem = ({ round, guess }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>#{round}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default FailItem;

const styles = StyleSheet.create({
  item: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
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
