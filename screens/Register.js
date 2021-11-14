import React, { useState } from "react";
import LOGO from "../assets/a4ae5c3b15fa791bb4a5b4e91544fdea.png";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import { AppStyles } from "../AppStyles";
import Arrow from "../components/Arrow";

const Register = ({ props, navigation }) => {
  const [fullname, setName] = useState("");
  const [confirm_password, setCpass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = useWindowDimensions();
  const h = height / 5;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Arrow onPress={handleBack} />

      <Image style={[styles.img, { width, maxHeight: h }]} source={LOGO} />
      <Text style={[styles.title, styles.leftTitle]}>Sign Up</Text>
      <View style={styles.container2}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Full Name"
            value={fullname}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirm_password}
            onChangeText={(text) => setCpass(text)}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 0.5,
  },
  img: {
    // flex: 2,
    resizeMode: "contain",
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: "#004E96",
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  button: {
    backgroundColor: "#002F67",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
