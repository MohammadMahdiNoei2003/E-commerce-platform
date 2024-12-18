import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-web";
const Brands = () => {
  const Data = ["Samsung", "Apple", "HTC", "Honor"];

  return (
    <View style={styles.container}>
      <View style={styles.container_content}>
        {Data.map((data, index) => (
          <View key={index} style={styles.content_item}>
            <Text style={styles.content_item_text}>{data}</Text>
          </View>
        ))}
      </View>
      <Text>ff</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f23",
    padding: 10,
  },
  container_content: {
    backgroundColor: "green",
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",

    // alignSelf: "center",
  },
  content_item: {
    padding: 10,
    // margin: 5,
    width: "33%",
    backgroundColor: "yellow",
  },
  content_item_text: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",

    backgroundColor: "red",
  },
});
export default Brands;
