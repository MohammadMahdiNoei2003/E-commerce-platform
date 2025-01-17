import React from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { SafeAreaView } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuth } from "../../Contexts/ AuthContext";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { isAuthenticated, user } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.menu_button_Container}>
        <Pressable
          style={styles.MenuButton}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          <Icon name="bars" size={30} color="#000" />
        </Pressable>
        {isAuthenticated ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Icon2 name="account" size={30} color="#000" />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            <Icon2 name="login" size={30} color="#000" />
          </Pressable>
        )}
      </View>

      <View style={styles.text_container}>
        <Text>
          fashion<Text style>Store </Text>
        </Text>
      </View>
      <View style={styles.search_shop_container}>
        <Icon
          style={(styles.search, styles.search_shop)}
          name="search"
          size={30}
          color="#000"
        />
        <Icon2
          style={(styles.shop, styles.search_shop)}
          name="shopping-outline"
          size={30}
          color="#000"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: "#595959",
    // backgroundColor: "white",
    minHeight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10",
    paddingTop: "15",
    alignItems: "center",
  },
  menu_button_Container: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  MenuButton: {
    // backgroundColor: "blue",
    width: 30,
    // padding: 4,
  },
  search: {},
  search_shop_container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  search_shop: {
    padding: 4,
  },
  text_container: {
    flexDirection: "row",
    width: "60%",
    // backgroundColor: "red",
    justifyContent: "space-around",
  },
});
export default Header;
