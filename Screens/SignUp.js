import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import Header from "../Components/Home/Header";
import DatePicker from "@react-native-community/datetimepicker";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      date: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      date: Yup.date().required("Date of birth is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form_container}>
        <View style={styles.form}>
          <Text>SIGNUP</Text>

          <TextInput
            placeholder="First Name"
            style={styles.input_text}
            onChangeText={formik.handleChange("firstName")}
            onBlur={formik.handleBlur("firstName")}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <Text style={{ color: "red" }}>{formik.errors.firstName}</Text>
          )}

          <TextInput
            placeholder="Last Name"
            style={styles.input_text}
            onChangeText={formik.handleChange("lastName")}
            onBlur={formik.handleBlur("lastName")}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <Text style={{ color: "red" }}>{formik.errors.lastName}</Text>
          )}

          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />

          {showDatePicker && (
            <DatePicker
              value={
                formik.values.date ? new Date(formik.values.date) : new Date()
              }
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false); // Close the picker after selection
                if (selectedDate) {
                  formik.setFieldValue("date", selectedDate);
                }
              }}
            />
          )}

          {formik.errors.date && formik.touched.date && (
            <Text style={{ color: "red" }}>{formik.errors.date}</Text>
          )}

          <TextInput
            style={styles.input_text}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            placeholder="Email"
            keyboardType="email-address"
          />
          {formik.errors.email && formik.touched.email && (
            <Text style={{ color: "red" }}>{formik.errors.email}</Text>
          )}

          <TextInput
            placeholder="Password"
            style={styles.input_text}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
            secureTextEntry
          />
          {formik.errors.password && formik.touched.password && (
            <Text style={{ color: "red" }}>{formik.errors.password}</Text>
          )}

          <Pressable
            style={[styles.input_text, styles.login_button]}
            onPress={formik.handleSubmit}
          >
            <Text style={styles.login_button_text}>Sign Up</Text>
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
