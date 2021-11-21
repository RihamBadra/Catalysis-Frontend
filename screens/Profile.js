import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

export default function Profile({navigation}) {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[
          styles.header,
          {
            height: width / 4,
          },
        ]}
      >
        <Text style={{ fontSize: 20 }}>Profile</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: width / 3 }}>
        <Image
          style={{ width: width / 2, height: width / 2 ,borderRadius:width,borderColor:"green",borderWidth:1}}
          source={require("../assets/profile-icon-9.png")}
        />
        <View style={{marginTop: width /20,alignItems:"center"}}>
        <Text>Bassam</Text>
        <Text>Bassam@gmail.com</Text>
        </View>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditProfile')}>
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={styles.save}
          
        />
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} >
          <Ionicons
            name="settings"
            size={24}
            color="black"
            style={styles.save}
          />

          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome
            name="language"
            size={24}
            color="black"
            style={styles.save}
          />

          <Text>Languages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
        <MaterialIcons
            name="save-alt"
            size={24}
            color="black"
            style={styles.save}
          />
        <Text>Saved</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fddeaf",
    position: "absolute",
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "5%",
  },
  btn: {
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: "5%",
  },
  save: {
    marginRight: "2%",
  },
  btns: {
    marginTop: "5%",
  },
});
