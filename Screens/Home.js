import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  ScrollView,
  RefreshControl,
  ViewBase,
  Button,
} from "react-native";
import Header from "../Components/Home/Header";
import NewArrival from "../Components/Home/NewArrival";
import Brands from "../Components/Home/Brands";
// import { ScrollView } from "react-native-web";
const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    // <View style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.container_img}
      enableAutomaticScroll
      extraScrollHeight={10}
      enableOnAndroid={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Header />
      <ImageBackground
        style={styles.bg_style}
        resizeMode="cover"
        source={require("../img/electronics.jpg")}
        blurRadius={9}
      >
        <View style={styles.container_bg_img_text}>
          <Text style={styles.text_bg}>FOOOD</Text>
          {/* <Button
            title="ss"
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          /> */}
        </View>
      </ImageBackground>
      {/* new arrival */}
      <NewArrival />
      {/* Brands section */}
      {/* <Brands /> */}

      <View style={styles.hhsgfg}>{/* <Text>ggddd</Text> */}</View>
      {/* <Text>hello</Text>
      <Text>ggddd</Text>
      <Text>hello</Text>
      <Text>ggddd</Text> */}
      {/* <Text>dd</Text> */}
      {/* </View> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container_img: {
    backgroundColor: "#A9A9A9",

    flexGrow: 1,
    // height: "100%",
  },
  bg_style: {
    flex: 1,
    // position: "absolute",
    height: "600",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  text_bg: {
    color: "white",
  },
  container_bg_img_text: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "whites",
  },
  hhsgfg: {},
});

export default Home;
