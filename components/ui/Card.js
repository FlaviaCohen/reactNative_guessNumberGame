import { View, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  const { width } = useWindowDimensions();

  const marginTop = width <= 400 ? 18 : 36;
  return <View style={[styles.card, { marginTop }]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // box-shadow for android
    elevation: 9,
    // box-shadow for IOs
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // shadow position
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});
