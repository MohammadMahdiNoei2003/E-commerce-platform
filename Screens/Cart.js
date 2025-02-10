import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import Header from "../Components/Home/Header";
import { date } from "yup";
import { useAuth } from "../Contexts/ AuthContext";
import { useNavigation } from "@react-navigation/native";
import laptopDatas from "../FakeData/Laptop";

const Cart = () => {
  const img = require("../img/phone4.jpg");

  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  // setItems(laptopDatas);
  // const setDataItems = () => {
  //   setItems(laptopDatas);
  // };
  useEffect(() => {
    setItems(laptopDatas);
  }, []); // Runs only once when the component mounts
  // console.log(items);

  const increasecount = (id) =>
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  const decreaseCount = (id) =>
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  return (
    <View style={styles.main_container}>
      {/* {setDataItems()} */}
      <Header />
      <View style={styles.container}>
        <View style={styles.cart_page_container}>
          <ScrollView>
            <View style={styles.cart_header}>
              <View style={styles.close_cart_header}>
                <Pressable style={styles.button_close_cart_header}>
                  <Icon name="close" size={32} />
                </Pressable>
              </View>
              <View style={styles.text_cart_header}>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  CART
                </Text>
              </View>
            </View>
            <View style={styles.container_cart_items}>
              {console.log(items)}
              {/* <ScrollView> */}
              {/* <Text>dd</Text>; */}
              {items && items.length > 0 ? (
                items.map((item, index) => (
                  // <Text>dd</Text>;
                  <View style={styles.cart_items} key={index}>
                    <View style={styles.container_img_item}>
                      <Image
                        style={{
                          width: "auto",
                          objectFit: "fill",
                          height: 160,
                        }}
                        source={img}
                      />
                    </View>
                    <View style={styles.container_desc_item}>
                      <Text>dsdsds</Text>
                      <Text>dsdsds</Text>
                      <View style={styles.count_item}>
                        <Pressable
                          style={styles.button_cnt_cart_header}
                          onPress={() => {
                            // setItems["count"](items.count - 1);
                            decreaseCount(item.id);
                          }}
                        >
                          <Icon name="minus" size={24} />
                        </Pressable>
                        <Text style={{ padding: 8 }}>{item.count}</Text>
                        <Pressable
                          style={styles.button_cnt_cart_header}
                          onPress={() => {
                            increasecount(item.id);
                          }}
                        >
                          <Icon name="plus" size={24} />
                        </Pressable>
                      </View>
                      <Text>{item.price}$</Text>
                    </View>
                  </View>
                ))
              ) : (
                <Text>No data available</Text>
              )}
              {/* </ScrollView> */}
            </View>
          </ScrollView>
          <View style={styles.cart_bottom}>
            <View style={styles.cart_bottom_price}>
              <Text>SUB TOTtAL</Text>
              <Text>$690</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.cart_bottom_buy}>
        <Text style={{ fontSize: 20, color: "white" }}>BUY NOW</Text>
      </Pressable>
    </View>
  );
};
export default Cart;
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "gray",
  },
  container: {
    flex: 1,
    // backgroundColor: "green",

    // margin: 20,
    padding: 10,
  },
  cart_page_container: {
    flex: 1,
    // backgroundColor: "green",

    width: "100%",
    height: 120,
    // backgroundColor: "black",
  },
  //Header of cart page css
  cart_header: {
    // backgroundColor: "blue",
    height: 88,
  },
  close_cart_header: {
    padding: 8,
  },
  button_close_cart_header: {
    //  backgroundColor: "red"
    width: 32,
  },
  text_cart_header: {
    padding: 8,
  },
  //cart items css code:
  container_cart_items: {
    // flexDirection: "row",
    // backgroundColor: "red",
    // height: "100%",
    // height:
    flex: 1,
  },
  cart_items: {
    flexDirection: "row",
    height: 160,
    marginTop: 16,
  },
  container_img_item: {
    width: "35%",
    // height: 40,
  },
  container_desc_item: {
    padding: 8,
    justifyContent: "space-around",
  },
  button_cnt_cart_header: {
    // backgroundColor: "yellow",
    justifyContent: "center",
  },
  count_item: {
    flexDirection: "row",
    alignItems: "center",
  },
  cart_bottom: {
    borderTopWidth: 1,
    borderColor: "#585757",
    paddingTop: 8,
    height: 40,
  },
  cart_bottom_price: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    padding: 8,
  },
  cart_bottom_buy: {
    alignItems: "center",
    backgroundColor: "black",
    height: 40,
  },
});
