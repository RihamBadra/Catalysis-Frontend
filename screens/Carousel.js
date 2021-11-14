import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import CarouselItem from "../components/CarouselItem";
import data from "../slides";
import Button from "../components/Button";
import Arrow from "../components/Arrow";
import LOGO from "../assets/a4ae5c3b15fa791bb4a5b4e91544fdea.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Carousel = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width, height } = useWindowDimensions();
  const h = height / 5;
  let position = Animated.divide(scrollX, width);

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch("http://192.168.31.92:8000/api/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    // if (result.status == 200) navigation.navigate("Home");
  }, []);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const goToNextSlide = () => {
    if (currentIndex == data.length - 1) return;
    dataRef.current.scrollToIndex({
      index: currentIndex + 1,
    });
  };

  const handleBack = () => {
    if (currentIndex == 0) return;
    dataRef.current.scrollToIndex({
      index: currentIndex - 1,
    });
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      {currentIndex == 0 ? (
        <Arrow onPress={handleBack} opacity={0} />
      ) : (
        <Arrow onPress={handleBack} opacity={1} />
      )}

      <Image style={[styles.image, { width, maxHeight: h }]} source={LOGO} />
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        // bounces={false}
        scrollEnabled={false}
        data={data}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => <CarouselItem item={item} />}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={dataRef}
      />
      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.2, 1, 0.2],
            extrapolate: "clamp",
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>
      <Button
        text={currentIndex == data.length - 1 ? "Sign Up" : "Next"}
        onPress={
          currentIndex == data.length - 1
            ? () => navigation.navigate("Register")
            : goToNextSlide
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // flex: 0.4,
    resizeMode: "contain",
  },
  dotView: {
    flexDirection: "row",
    flex: 0.1,
    alignItems: "center",
  },
  dot: {
    height: 7,
    width: 7,
    backgroundColor: "#595959",
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 5,
  },
});
