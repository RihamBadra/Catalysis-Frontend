import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Cat from "../components/Cat";

function Categories({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt1}>
          Select three areas you are passionate about{" "}
        </Text>
        <Text style={styles.txt2}>
          We'll use them in order to build your home feed
        </Text>
      </View>
      <View style={styles.cat}>
        <Cat navigation={navigation} />
      </View>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  txtContainer: { flex: 1, justifyContent: "flex-end" },
  txt1: {
    fontWeight: "bold",
    paddingBottom: "8%",
    color: "#002F67",
    fontSize: 17,
    textAlign: "center",
  },
  txt2: {
    // fontWeight: "bold",
    paddingBottom: "5%",
    color: "#3B77AE",
    fontSize: 15,
    textAlign: "center",
  },
  cat: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
  },
});
