import { View, Text, StyleSheet, Pressable } from "react-native";
import Header from "../Components/Home/Header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../Contexts/ AuthContext";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.profile_section}>
        <Icon name="account" size={100} color="#000" />
        {isAuthenticated ? <Text>{user.email}</Text> : null}
      </View>
      <View style={styles.logOut_section}>
        <Pressable
          onPress={() => {
            logout();
            navigation.navigate("Home");
          }}
        >
          <Icon name="logout" size={40} color="#000" />
        </Pressable>
        <Text style={{ fontSize: 14, marginBottom: 16 }}>LogOut</Text>
      </View>
      {/* <Text>ss</Text> */}
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A9A9A9",
    flex: 1,
  },
  profile_section: {
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  logOut_section: {
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
  },
});
