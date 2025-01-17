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
import LogIn from "./Screens/LogIn";
import SignUp from "./Screens/SignUp";
import Product from "./Screens/ProductScreen";
import { AuthProvider } from "./Contexts/ AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Screens/Profile";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <AuthProvider>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // backgroundColor: "red",
  },
});
