import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";

const NewArrival = () => {
  const Data = ["All", "LapTop", "mobileDatas", "ff"];
  const mobileDatas = [
    {
      model: "Apple Iphone 13",
      img: require("../../img/phone2.jpg"),
      data: "4GB RAM, 128GB Storage",
    },
    {
      model: "Apple Iphone 13 pro",
      img: require("../../img/phone3.jpg"),
      data: "6GB RAM, 256GB Storage",
    },
    {
      model: "Samsung S23 ultra",
      img: require("../../img/phone4.jpg"),
      data: "4GB RAM, 128GB Storage",
    },
    {
      model: "Samsung S23 FE",
      img: require("../../img/phone1.jpg"),
      data: "8GB RAM, 128GB Storage",
    },
  ];
  const laptopDatas = [
    {
      model: "LApple Iphone 13",
      img: require("../../img/phone2.jpg"),
      data: "4GB RAM, 128GB Storage",
    },
    {
      model: "LApple Iphone 13 pro",
      img: require("../../img/phone3.jpg"),
      data: "6GB RAM, 256GB Storage",
    },
    {
      model: "LSamsung S23 ultra",
      img: require("../../img/phone4.jpg"),
      data: "4GB RAM, 128GB Storage",
    },
    {
      model: "LSamsung S23 FE",
      img: require("../../img/phone1.jpg"),
      data: "8GB RAM, 128GB Storage",
    },
  ];
  // const dd = "mobileDatas";
  // const []

  const [currentCategory, setCurrentCategory] = useState([]);

  // Handler for category selection
  const handleCategoryPress = (category) => {
    if (category === "All") {
      setCurrentCategory([...mobileDatas, ...laptopDatas]);
    } else if (category === "mobileDatas") {
      setCurrentCategory(mobileDatas);
    } else if (category === "LapTop") {
      setCurrentCategory(laptopDatas);
    } else {
      setCurrentCategory([]); // "ff" category or unknown case
    }
  };
  return (
    <View stfeyle={styles.container}>
      <View style={styles.header}>
        <Text>NEW ARRAiVAl</Text>
      </View>
      <View style={styles.main_container}>
        {/* navbar of NewArrival */}
        <View style={styles.navbar}>
          <FlatList
            horizontal
            contentContainerStyle={styles.navbar_list}
            data={Data}
            keyExtractor={(item, index) => index.toString()} // Use index as the key
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  handleCategoryPress(item);
                }}
                style={styles.navbar_item}
                key={index.toString()}
              >
                <Text style={styles.navItemText}>{item}</Text>
              </Pressable>
            )}
            //   extraData={selectedId}
          />
          {/* <Text>{currentCategory}</Text> */}
        </View>
        <View style={styles.container_body}>
          {currentCategory.length > 0 ? (
            currentCategory.slice(0, 4).map((data, index) => (
              <Pressable style={styles.body_item} key={index}>
                <Image style={styles.body_item_img} source={data.img} />
                <View>
                  <Text>{data.model}</Text>
                  <Text>{data.data}</Text>
                  <Text>{data.data}</Text>
                </View>
              </Pressable>
            ))
          ) : (
            <Text>No data available</Text>
          )}
        </View>
        <Pressable style={styles.button_more}>
          <Text style={styles.button_more_icon}>Explore More </Text>
          <Icon name="long-arrow-right" size={25} color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

//style CSS
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#39f",
    padding: 10,
  },
  navbar: {
    // flex: 1,
    // flexDirection: "row",
    backgroundColor: "red",
    margin: 10,
  },
  navbar_list: {
    flex: 1,
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navbar_item: {
    // flex: 1,
    // width: "100%",
    padding: 7,
    // margin: 2,
    // alignItems: "center",
    backgroundColor: "green",
  },
  container_body: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  body_item: {
    width: "47%",
    height: 300,
    backgroundColor: "#935",

    margin: 5,
  },
  body_item_img: {
    width: "100%",
    height: "70%",
    objectFit: "fill",
    // margin: 10,
  },
  button_more: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "red",
    alignItems: "center",
    alignSelf: "center",
  },
  button_more_icon: {
    padding: 10,
  },
});
export default NewArrival;
