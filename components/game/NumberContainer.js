import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  const { width } = useWindowDimensions();

  const responsive = {
    padding: width <= 400 ? 12 : 24,
    marginHorizontal: width <= 400 ? 12 : 24,
  };

  const fontSize = width <= 400 ? 24 : 36;
  return (
    <View style={[styles.container, responsive]}>
      <Text style={[styles.numberText, { fontSize }]}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  numberText: {
    color: Colors.accent500,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
