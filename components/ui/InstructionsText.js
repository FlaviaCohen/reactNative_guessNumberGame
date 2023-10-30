import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

const InstructionsText = ({ children, style }) => {
  const { width } = useWindowDimensions();
  const fontSize = width <= 400 ? 16 : 24;

  // last style in the array overrides the first ones
  return (
    <Text style={[styles.instructionsText, { fontSize }, style]}>
      {children}
    </Text>
  );
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
  },
});
