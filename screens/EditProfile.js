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
import { Picker } from "@react-native-picker/picker";
// import { useFormik } from "formik";

const EditProfileScreen = ({ navigation, route }) => {
  const { width, height } = useWindowDimensions();
  const [openIm, setOpenIm] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items, setItems] = useState([]);
  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [cat3, setCat3] = useState([]);
  const [prof, setProf] = useState(route.params.prof);
  const [photo, setPhoto] = useState("");
  let ar = [];
  let ar1 = [];
  let ind1, ind2, ind3;

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
          value: item.id,
        })
      );
    setItems(ar);
    const resC = await fetch(Url + "api/userCategory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const resultC = await resC.json();
    resultC.cat &&
      resultC.cat.map((item, key) =>
        ar1.push({
          key: key,
          label: item.category.name,
          value: item.category_id,
        })
      );
    // setCat1(ar1.slice(0, 1));
    // setCat2(ar1.slice(1, 2));
    // setCat3(ar1.slice(2));
    // console.log(value);
  }, []);

  // useEffect(() => {
  //   if (cat1.length > 0 && cat2.length > 0 && cat3.length > 0) {
  //     ind1 = items
  //       .map((e) => {
  //         return e.value;
  //       })
  //       .indexOf(cat1[0].value);
  //     ind2 = items
  //       .map((e) => {
  //         return e.value;
  //       })
  //       .indexOf(cat2[0].value);
  //     ind3 = items
  //       .map((e) => {
  //         return e.value;
  //       })
  //       .indexOf(cat3[0].value);
  //     console.log(ind1);
  //     items.splice(ind1, 1);
  //     items.splice(ind2, 1);
  //     items.splice(ind3, 1);
  //   }
  //   console.log(value);
  // }, [cat1]);

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

  // useEffect(() => {
  //   console.log("value", value);
  //   console.log("value1", value1);
  //   console.log("value2", value2);
  // }, [value, value1, value2]);

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
      {/* <ScrollView bounces={false}> */}
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

      {/* <DropDownPicker
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
      />*/}

      {/* <Picker
          prompt="Categories"
          style={{ height: 150 }}
          selectedValue={value}
          onValueChange={(itemValue) => {
            console.log(value);
            setValue(itemValue);
          }}
        > */}
      {/* {cat1.length > 0 && (
            <Picker.Item label={cat1[0].label} value={cat1[0].value} />
          )} */}
      {/* {ar.length > 0 && (
            <Picker.Item label={ar[0].label} value={ar[0].value} />
          )} */}
      {/* {items &&
            items.map((i, key) => (
              <Picker.Item key={key} label={i.label} value={i.value} />
            ))}
        </Picker>
        <Picker
          style={{ height: 150 }}
          prompt="Categories"
          selectedValue={value1}
          onValueChange={(itemValue) => setValue1(itemValue)}
        > */}
      {/* {cat2.length > 0 && (
            <Picker.Item label={cat2[0].label} value={cat2[0].value} />
          )} */}
      {/* {items &&
            items.map((i, key) => (
              <Picker.Item key={key} label={i.label} value={i.value} />
            ))}
        </Picker>
        <Picker
          style={{ height: 150 }}
          prompt="Categories"
          selectedValue={value2}
          onValueChange={(itemValue) => setValue2(itemValue)}
        > */}
      {/* {cat3.length > 0 && (
            <Picker.Item label={cat3[0].label} value={cat3[0].value} />
          )} */}
      {/* {items &&
            items.map((i, key) => (
              <Picker.Item key={key} label={i.label} value={i.value} />
            ))}
        </Picker>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: "5%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 5,
  },
  btn: {
    marginBottom: "6%",
    marginTop: "3%",
    alignSelf: "center",
    padding: 15,
    width: 100,
    borderRadius: 5,
    backgroundColor: "blue",
  },
  pic: { borderRadius: 200, borderColor: "#05336a", borderWidth: 2 },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  contain: { marginTop: "5%", alignItems: "center" },
  drop: { alignSelf: "center", marginTop: "20%" },
  headerC: {
    backgroundColor: "#fddeaf",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: "5%",
  },
});
