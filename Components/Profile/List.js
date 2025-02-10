import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
const ProfileList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.list_container}>
      <Pressable onPress={() => navigation.navigate("Address")}>
        <Text style={styles.input_list_items}>ADDRESS</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.input_list_items}>ADDRESS</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.input_list_items}>ADDRESS</Text>
      </Pressable>
    </View>
  );
};
export default ProfileList;

const styles = StyleSheet.create({
  list_container: {
    margin: 10,
  },
  input_list_items: {
    padding: 10,
    borderBottomWidth: 1,
    // alignItems: "center",
    // backgroundColor: "red",
    textAlign: "center",
  },
});
