import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import Header from "../Components/Home/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("values : " + values);
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form_container}>
        <View style={styles.form}>
          <Text>SIGNUP</Text>
          <TextInput
            style={styles.input_text}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            textContentType="email"
            placeholder="Email"
          ></TextInput>
          {formik.errors.email && formik.touched.email ? (
            <View>
              <Text style={{ color: "red" }}>{formik.errors.email}</Text>
            </View>
          ) : null}
          <TextInput
            placeholder="Password"
            style={styles.input_text}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
            textContentType="Password"
          ></TextInput>
          {formik.errors.password && formik.touched.password ? (
            <View>
              <Text style={{ color: "red" }}>{formik.errors.password}</Text>
            </View>
          ) : null}
          <Pressable
            style={[styles.input_text, styles.login_button]}
            onPress={formik.handleSubmit}
          >
            <Text style={styles.login_button_text}>SignUp</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
    alignItems: "center",
  },
  form: {
    width: "60%",
    alignItems: "center",
  },
  input_text: {
    backgroundColor: "white",
    borderWidth: 1,
    width: "80%",
    margin: 8,
    borderRadius: 4,
    padding: 8,
  },
  login_button: { backgroundColor: "blue" },
  login_button_text: {
    textAlign: "center",
    color: "white",
  },
});

export default SignUp;
