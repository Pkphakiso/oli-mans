import { Image } from "expo-image";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageDataRes from "../data/ImageDataRes";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

const Welcome = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topImageContainer}>
        <Image source="../assets/images/image1.jpg" style={styles.image} />
      </View>

      <View style={styles.logoContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.titleHead}>OLY</Text>
          <Text style={styles.subText}>The Man Fashion</Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#8c8f9a",
  },
  topImageContainer: {
    height: 50,
    width: WINDOW_WIDTH,
  },

  image: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
    position: "absolute",
    top: 0,
    left: -30,
  },
  //sure
  logoContainer: {
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "50%",
    backgroundColor: "#344",
  },
  subContainer: {
    position: "absolute",
    // left: "50%",
    top: -14,
  },
  logoTitle: {},
  titleHead: {
    fontSize: 80,
    fontWeight: "800",
  },
  subText: {
    color: "#7c7d80",
    letterSpacing: 2,
  },
});
