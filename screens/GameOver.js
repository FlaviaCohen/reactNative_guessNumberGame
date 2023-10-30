import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = ({ rounds, number, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width <= 400) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const responsive = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  const fontSize = width <= 400 ? 18 : 24;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, responsive]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={[styles.summaryText, { fontSize }]}>
          Your phone needed<Text style={styles.highlight}> {rounds} </Text>
          rounds to guess the number
          <Text style={styles.highlight}> {number} </Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    color: Colors.primary800,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
