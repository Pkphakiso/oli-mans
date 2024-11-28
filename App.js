import { useCallback, useEffect, useState } from "react";

// import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartLogin from "./component/StartLogin";
import Welcome from "./component/Welcome";
//
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       // await Font.loadAsync(Entypo.font);
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(() => {
  //   if (appIsReady) {
  //     SplashScreen.hide();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }
  return (
    // <>
    //   <LinearGradient
    //     colors={["#4c669f", "#3b5998", "#192f6a"]}
    //     style={{ flex: 1 }}
    //   >
    //     <Text>Sign in with Facebook</Text>
    //     <StatusBar />
    //   </LinearGradient>
    // </>
    <>
      <Welcome />
      {/* <StartLogin /> */}
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

// export default function App() {
// try {
//   const [fontsLoading] = useFonts({
//     "opensans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
//     "opensans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//     "opensans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
//   });
//   if (!fontsLoading) {
//     return <AppLoading />;
//   }
// } catch (error) {
//   //test comment
//   console.log(error);
// }
