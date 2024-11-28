import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const StartLogin = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imagecontainer}>
        {/* <Image
          source={{ uri: "../assets/images/image4.jpg" }}
          style={{ width: 100, height: 100 }}
          //   source={require("../assets/images/image4.jpg")}
          //   style={styles.image}
        /> */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Oli Fashion</Text>
          <Text style={styles.texts}>One best app for all your needs</Text>
        </View>
      </View>

      <View style={styles.buttonOuterContainer}>
        <View style={{ width: "100%" }}>
          <Pressable
            style={[
              styles.buttonInnerContainer,
              { backgroundColor: "#030712", alignItems: "center" },
            ]}
          >
            <Text style={[styles.butttonText, { color: "white" }]}>
              continue with email
            </Text>
          </Pressable>
        </View>

        <View style={{ width: "100%" }}>
          <Pressable
            style={[
              styles.buttonInnerContainer,
              { backgroundColor: "white", alignItems: "center" },
            ]}
          >
            <Text style={[styles.butttonText, { color: "black" }]}>
              continue with google
            </Text>
          </Pressable>
        </View>

        <View style={{ width: "100%", elevation: 10 }}>
          <Pressable
            style={[
              styles.buttonInnerContainer,
              { backgroundColor: "white", alignItems: "center" },
            ]}
          >
            <Text style={[styles.butttonText, { color: "black" }]}>
              continue with Apple
            </Text>
          </Pressable>
        </View>
        <View style={styles.hrWrapper}>
          <View style={styles.hrLine}>
            <Text> </Text>
          </View>
          <Text style={styles.hrText}>or</Text>
        </View>

        <View>
          <Text style={[styles.butttonText, styles.txShadow]}>
            Already have an account? <Text> Sign in</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default StartLogin;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    ///backgroundColor:"#121313",
    marginTop: 50,
    backgroundColor: "#8c8f9a",
    alignItems: "center",
  },
  imagecontainer: {
    height: "50%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {},
  title: {
    color: "#00071f",
    // fontWeight: "700",
    fontFamily: "opensans-bold",
  },
  texts: {
    fontSize: 12,
    fontFamily: "opensans-medium",
  },

  buttonOuterContainer: {
    // backgroundColor: "#e5a8a8",
    // flex: 1,
    width: "100%",
    alignItems: "center",
  },
  buttonInnerContainer: {
    borderRadius: 30,
    margin: 10,
    padding: 10,
    // overflow: "hidden",
  },
  butttonText: {
    padding: 10,
    fontFamily: "opensans-medium",
  },
  txShadow: {
    textShadowColor: "#rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  hrWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  hrLine: {
    width: 200,
    height: 2,
    backgroundColor: "#ccc",
  },
  hrText: {
    backgroundColor: "#fff",
    position: "absolute",
    paddingHorizontal: 3,
    color: "#000",
    fontFamily: "opensans-medium",
  },

  //   buttonOuterContainer: {
  //     margin: 6,
  //     borderRadius: 30,
  //     overflow: "hidden",
  //   },
  //   buttonInnerContainer: {
  //     backgroundColor: Colors.primary500,

  //     paddingVertical: 8,
  //     paddingHorizontal: 26,
  //     elevation: 10,
  //   },
  //   buttonText: {
  //     color: "white",
  //     textAlign: "center",
  //   },
  //   //following for ios
  //   pressed: {
  //     opacity: 0.75,
  //   },
});
