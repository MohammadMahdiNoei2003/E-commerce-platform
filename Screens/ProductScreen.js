import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Header from "../Components/Home/Header";
import { date } from "yup";

const Product = () => {
  const mobileDatas = [
    {
      model: "Apple Iphone 13",
      img: require("../img/phone2.jpg"),
      data: "4GB RAM, 128GB Storage",
      color: "red",
    },
    {
      model: "Apple Iphone 13 pro",
      img: require("../img/phone3.jpg"),
      data: "6GB RAM, 256GB Storage",
      color: "blue",
    },
    {
      model: "Samsung S23 ultra",
      img: require("../img/phone4.jpg"),
      data: "4GB RAM, 128GB Storage",
      color: "green",
    },
    {
      model: "Samsung S23 FE",
      img: require("../img/phone1.jpg"),
      data: "8GB RAM, 128GB Storage",
      color: "black",
    },
  ];

  const [currentImage, setCurrentImage] = useState(mobileDatas[0].img);
  //   try {
  //     const response = await fetch("http://localhost:3000/users", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();

  //     if (response.ok) {
  //         setMessage("User signed up successfully!");
  //         setFormData({}); // Reset form fields
  //     } else {
  //         setMessage(result.error || "Error signing up.");
  //     }
  // } catch (error) {
  //     setMessage("Error: " + error.message);
  // }
  // const url ="";

  // const result = await fetch(url , {

  // }
  // )
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.container_content}>
          {/* product images  */}
          <View style={styles.images_Container}>
            <View style={styles.img_main_container}>
              <Image source={currentImage} style={styles.img_main} />
            </View>
            <View style={styles.img_scroll}>
              <ScrollView horizontal>
                {mobileDatas.map((date, index) => (
                  <Pressable
                    key={index}
                    style={styles.img_Container}
                    onPress={() => setCurrentImage(date.img)}
                  >
                    <Image source={date.img} style={styles.img} />
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </View>
          {/* product Details */}
          <View style={styles.product_detail_container_outter}>
            <View style={styles.product_detail_container}>
              <View>
                <Text style={styles.product_detail_item}>Detail:</Text>
                <Text style={styles.product_detail_item}>model:</Text>
                <Text style={styles.product_detail_item}>Description</Text>
              </View>
              <View style={styles.product_color_container}>
                <Text>color : </Text>
                {mobileDatas.map((data, index) => (
                  <Pressable
                    key={index}
                    style={[
                      styles.button_color,
                      { backgroundColor: data.color },
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.add_to_cart_button_container}>
            <Pressable>
              <Text style={{ color: "white", padding: 5 }}>ADD TO CART</Text>
            </Pressable>
          </View>

          {/* review box */}
          <View style={styles.product_detail_container_outter}>
            <View style={styles.product_detail_container}>
              <View style={{ alignItems: "center" }}>
                <Text>REVIEWS</Text>
              </View>
              <View style={styles.review_scroll}>
                <ScrollView horizontal style={{ width: "100%" }}>
                  {mobileDatas.map((date, index) => (
                    <View key={index} style={styles.review_Container}>
                      <View style={styles.review_profile}>
                        <Icon
                          style={styles.profile_icon}
                          name="account"
                          size={30}
                          color="#000"
                        />
                        <Text>Ali</Text>
                      </View>
                      <Text>
                        "I'm absolutely in love with this product! Its sleek,
                        elegant design is simply stunning and adds a touch of
                        sophistication to any space. It’s as beautiful as it is
                        functional—an instant favorite!"
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
              <Text>REVIEWS</Text>
              {/* </View> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Product;
const styles = StyleSheet.create({
  container: { flex: 1 },
  container_content: { flex: 1, backgroundColor: "#808080" },
  images_Container: {
    // width: "90%",
    height: 480,

    alignItems: "center",
  },
  img_main_container: {
    width: "90%",
    height: "70%",
    backgroundColor: "yellow",
    alignItems: "center",
    // backgroundColor: "red",
  },
  img_main: { width: "100%", height: "100%" },
  img_scroll: {
    width: "90%",
    height: "30%",
    // backgroundColor: "orange",
    // borderRadius: "100%",
  },

  img_Container: {
    height: "100%",
    // width: "",
    // objectFit: "fill",
    backgroundColor: "blue",
    // margin: 5,
  },
  img: {
    height: "100%",
    width: 115,
    // objectFit: "fill",
  },
  product_detail_container_outter: { alignItems: "center" },
  product_detail_container: { width: "90%", marginTop: 24 },
  product_detail_item: { marginBottom: 16 },
  product_color_container: {
    flexDirection: "row",
  },
  button_color: {
    width: 20,
    height: 20,
    borderRadius: "100%",
    margin: 2,
  },
  add_to_cart_button_container: {
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    justifyContent: "center",
  },
  review_scroll: {
    width: "100%",
    height: 150,
    // borderBlockColor: "blue",
    // backgroundColor: "blue",\
    // borderWidth: 1,
    // borderRighttWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  review_Container: {
    width: 350,
    // backgroundColor: "#797D7F",
    marginRight: 5,
    padding: 15,
  },
  review_profile: { flexDirection: "row", alignItems: "center" },
  profile_icon: { margin: 5 },
});
