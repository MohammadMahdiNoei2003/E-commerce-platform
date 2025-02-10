import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import Header from "../Home/Header";
import laptopDatas from "../../FakeData/Laptop";

const Address = () => {
  const [selectedProvinceValue, setSelectedProvinceValue] = useState("");
  const [selectedCityValue, setSelectedCityValue] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState();

  //get API
  useEffect(() => {
    fetchData();
  }, []);
  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    try {
      const response = await fetch();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log("Fetched Data:", json);
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //   handle submit and post API
  const handleSubmit = async () => {
    if (!selectedProvinceValue || !selectedCityValue || !address) {
      Alert.alert("please fill all fields");
      return;
    }

    const dataPost = {
      state: selectedProvinceValue,
      city: selectedCityValue,
      address: address,
    };

    try {
      const response = await fetch("https://your-api-url.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Address saved successfully!");
      } else {
        Alert.alert("Error", result.message || "Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Network error. Please try again.");
    }
  };
  return (
    <View style={styles.main_container}>
      {/* {setDataItems()} */}
      <Header />
      <View style={styles.container}>
        <Text>Choose province :</Text>
        <Picker
          selectedValue={selectedProvinceValue}
          onValueChange={(itemValue) => setSelectedProvinceValue(itemValue)}
          style={{ height: 50, width: 200 }}
        >
          {laptopDatas.map((item, index) => (
            <Picker.Item key={index} label={item.model} value={item.id} />
          ))}
        </Picker>
        <Text>Selected: {selectedProvinceValue}</Text>
        <Text>Choose city :</Text>
        <Picker
          selectedValue={selectedCityValue}
          onValueChange={(itemValue) => setSelectedCityValue(itemValue)}
          style={{ height: 50, width: 200 }}
        >
          {laptopDatas.map((item, index) => (
            <Picker.Item key={index} label={item.model} value={item.id} />
          ))}
        </Picker>
        <Text>Selected: {selectedCityValue}</Text>
        <TextInput onChangeText={setAddress} value={address} />
        <Text>{address}</Text>
        <Button title="Submit" onPress={handleSubmit}></Button>
      </View>
    </View>
  );
};
export default Address;
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
});
