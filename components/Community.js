import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Community({ ratings, reviews, ena, setAdd, btn }) {
  const [community, setCommunity] = useState([]);
  let ind;
  let ar = [];

  useEffect(() => {
    ratings.map(
      (r, key) => (
        (ind = reviews
          .map((e) => {
            return e.user_id;
          })
          .indexOf(r.user_id)),
        ar.push({
          id: key,
          userid: r.user_id,
          name: r.user.name,
          rating: r.rating,
          review: ind >= 0 ? reviews[ind].review : "",
        })
      )
    );

    reviews.forEach((rev) => {
      ind = ar
        .map((e) => {
          return e.userid;
        })
        .indexOf(rev.user_id);
      if (ind == -1) {
        ar.push({
          id: ar.length,
          userid: rev.user_id,
          name: rev.user.name,
          rating: 0,
          review: rev.review,
        });
      }
    });

    setCommunity(ar);
  }, [ena]);

  // useEffect(() => {
  //   // console.log("com", community);
  //   // console.log("ratings", ratings);
  //   // console.log(community);
  //   // console.log("review", reviews);
  // }, [community]);

  return (
    <View style={styles.overview}>
      <View style={styles.titleDiv}>
        <Text style={styles.title}>Reviews</Text>
      </View>
      <ScrollView onTouchEnd={Keyboard.dismiss}>
        {community &&
          community.map((index, key) => (
            <View key={key}>
              <View style={styles.descBox}>
                <FontAwesome
                  name="user-circle"
                  size={15}
                  color="#002F67"
                  style={styles.symbols}
                />
                <Text style={styles.owner}>{index.name}</Text>
                <View style={styles.rating}>
                  {[...Array(index.rating)].map((s, key) => (
                    <Ionicons
                      key={key}
                      name="star"
                      size={15}
                      color="gold"
                      style={styles.empty}
                    />
                  ))}
                  {index.rating > 0 &&
                    [...Array(5 - index.rating)].map((s, key) => (
                      <Ionicons
                        key={key}
                        name="star-outline"
                        size={15}
                        color="gold"
                        style={styles.empty}
                      />
                    ))}
                </View>
              </View>
              <View>
                <Text style={styles.rev}>{index.review}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
      {ena && (
        <TouchableOpacity
          style={[
            styles.review,
            { backgroundColor: btn >= 0 ? "#6b7785" : "#002F67" },
          ]}
          disabled={btn == -1 ? false : true}
          onPress={() => setAdd(true)}
        >
          <Text style={styles.addRev}>Add review</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overview: { flex: 1, paddingHorizontal: "5%" },
  titleDiv: { paddingVertical: "3%" },
  owner: { fontSize: 16, color: "#002F67" },
  title: { fontWeight: "bold" },
  descBox: {
    flexDirection: "row",
    marginTop: "5%",
    alignItems: "center",
  },
  symbols: { marginRight: "1%" },
  rev: { fontSize: 15 },
  rating: {
    position: "absolute",
    bottom: "10%",
    top: "10%",
    right: 0,
    flexDirection: "row",
  },
  empty: { paddingHorizontal: 1 },
  review: {
    marginBottom: "5%",
    padding: "5%",
    borderWidth: 1,
    borderRadius: 5,
  },
  addRev: {
    color: "white",
    textAlign: "center",
  },
});
