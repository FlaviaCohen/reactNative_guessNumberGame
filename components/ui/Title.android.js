import { Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
import Colors from "../../constants/colors.android";

const Title = ({ children }) => {
  const { width } = useWindowDimensions();

  const responsive = {
    fontSize: width <= 400 ? 18 : 24,
    marginTop: width <= 400 ? 18 : 0,
  };

  return <Text style={[styles.title, responsive]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    //fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({android: 2, ios: 0}) // another way
    borderColor: Colors.white,
    padding: 12,
    maxWidth: "80%",
  },
});
