import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Arrow from "../components/Arrow";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import Url from "../components/Url";
// import { useFormik } from "formik";

const EditProfileScreen = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const [openIm, setOpenIm] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([]);
  const [prof, setProf] = useState(route.params.prof);
  const [photo, setPhoto] = useState("");
  let ar = [];

  const handleBack = () => {
    route.params.setBk((prev) => {
      return prev + 1;
    });
    navigation.navigate("Profile");
  };

  useEffect(async () => {
    setProf(route.params.prof);
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    result.categories &&
      result.categories.map((item, key) =>
        ar.push({
          key: key,
          label: item.name,
          value: item.name,
        })
      );
    setItems(ar);
  }, []);

  const setProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    const formData = new FormData();
    formData.append("profile", {
      name: "SampleFile.jpg", // Whatever your filename is
      uri: photo.uri,
      type: "image/jpg", // video/mp4 for videos..or image/png etc...
    });
    const res = await fetch(Url + "api/setProf", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const d = await res.json();
    setOpenIm(false);
    alert(d.message);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    setOpenIm(true);
    setPhoto(pickerResult);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.headerC,
          {
            height: width / 4,
          },
        ]}
      >
        <Arrow onPress={handleBack} color="#002F67" />
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>
      <View style={styles.contain}>
        <Image
          source={
            selectedImage == null
              ? prof
                ? { uri: Url + prof }
                : require("../assets/profile-icon-9.png")
              : { uri: selectedImage.localUri }
          }
          style={[
            styles.pic,
            {
              width: width / 2,
              height: width / 2,
            },
          ]}
        />
        <MaterialIcons
          name="edit"
          onPress={openImagePickerAsync}
          size={25}
          color="black"
          style={{ position: "absolute", top: 0, right: width / 3 }}
        />
      </View>

      <TouchableOpacity
        onPress={() => setProfile()}
        disabled={openIm ? false : true}
        style={[styles.button, { backgroundColor: openIm ? "blue" : "gray" }]}
      >
        <Text style={styles.buttonText}>Update profile</Text>
      </TouchableOpacity>

      <DropDownPicker
        containerStyle={[
          styles.drop,
          {
            width: width / 1.5,
          },
        ]}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <DropDownPicker
        containerStyle={[
          styles.drop,
          {
            width: width / 1.5,
          },
        ]}
        open={open1}
        value={value1}
        items={items}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems}
      />

      <DropDownPicker
        containerStyle={[
          styles.drop,
          {
            width: width / 1.5,
          },
        ]}
        open={open2}
        value={value2}
        items={items}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems}
      />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 305,
    height: 159,
    alignSelf: "center",
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    marginTop: "5%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 5,
  },
  pic: { borderRadius: 200, borderColor: "#05336a", borderWidth: 2 },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  contain: { marginTop: "5%", alignItems: "center" },
  drop: { alignSelf: "center", marginTop: "20%" },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerC: {
    backgroundColor: "#fddeaf",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: "5%",
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
