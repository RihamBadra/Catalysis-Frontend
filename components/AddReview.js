import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  Text,
  TextInput,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Url from "./Url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddReview({ setAdd, id, setEdit }) {
  const [review, setReview] = useState("");
  const { width } = useWindowDimensions();
  const [rating, setRating] = useState(-1);

  const addReview = async () => {
    const formData = new FormData();
    const formData2 = new FormData();
    const token = await AsyncStorage.getItem("token");
    formData.append("card_id", id);
    formData.append("review", review);
    formData2.append("card_id", id);
    formData2.append("rating", rating + 1);
    if (review) {
      const rev = await fetch(Url + "api/review", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
    }
    if (rating >= 0) {
      const rat = await fetch(Url + "api/rating", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData2,
      });
    }
    setAdd(false);
  };

  return (
    <View
      style={[
        styles.fields,
        { width: width - (10 * width) / 100, height: width },
      ]}
    >
      <Ionicons
        name="ios-close-sharp"
        size={24}
        color="black"
        style={styles.close}
        onPress={() => setAdd(false)}
      />
      <View
        style={[styles.descBox, { height: width / 2 }]}
        onTouchEnd={Keyboard.dismiss}
      >
        {[...Array(5)].map((s, key) => (
          <Ionicons
            onPress={() => {
              if (rating == key) {
                setRating(-1);
              } else {
                setRating(key);
              }
            }}
            key={key}
            name={rating >= key ? "star" : "star-outline"}
            size={25}
            color="gold"
            style={styles.empty}
          />
        ))}
      </View>
      <TextInput
        multiline
        numberOfLines={3}
        style={styles.input}
        placeholder="Add Review"
        value={review}
        onChangeText={(text) => setReview(text)}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity
        style={styles.submit}
        onPress={async () => {
          await addReview();
          setEdit((prev) => {
            return prev + 1;
          });
        }}
      >
        <Text style={styles.txt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  fields: {
    position: "absolute",
    backgroundColor: "white",
    top: "25%",
    padding: "5%",
    justifyContent: "flex-end",
    alignSelf: "center",
    borderWidth: 2,
  },
  close: { alignSelf: "flex-end" },
  input: {
    borderWidth: 1,
    padding: "5%",
    fontSize: 17,
    marginBottom: "5%",
  },
  submit: {
    padding: "5%",
    borderWidth: 1,
    backgroundColor: "#002F67",
  },
  txt: {
    textAlign: "center",
    color: "white",
  },
  descBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: "5%",
  },
  empty: { paddingHorizontal: 1 },
});
