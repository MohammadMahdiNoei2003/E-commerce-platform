// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Header from "./Components/Home/Header";
import Home from "./Screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "red",
  },
});
