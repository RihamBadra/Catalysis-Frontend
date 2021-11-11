import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import data from "../imgs";
import Popup from "../components/Popup";

export default function Feed({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pop, setPop] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [scrollImage, setScrollImage] = useState(true);
  const dataRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    setScroll(!pop);
    setScrollImage(!pop);
  }, [pop]);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const goToNextSlide = () => {
    if (pop == true || currentIndex == data.length - 1) return;
    dataRef.current.scrollToIndex({
      index: currentIndex + 1,
    });
  };

  const handleBack = () => {
    if (pop == true || currentIndex == 0) return;
    dataRef.current.scrollToIndex({
      index: currentIndex - 1,
    });
  };

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View
      style={{ width, flex: 1 }}
      onTouchEndCapture={() => {
        if (pop == true) setPop(false);
      }}
    >
      <View
        style={{
          width,
          height: width / 4,
          backgroundColor: "#fddeaf",
          position: "relative",
        }}
      >
        <Ionicons
          name="notifications"
          size={24}
          color="black"
          style={{ position: "absolute", bottom: "20%", right: "25%" }}
        />
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={{ position: "absolute", bottom: "20%", right: "10%" }}
        />
      </View>
      <ScrollView scrollEnabled={scroll} style={{ backgroundColor: "white" }}>
        <View style={{ marginBottom: "5%" }}>
          <View style={{ padding: "2%", position: "relative" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "#002F67",
              }}
            >
              Becoming Focused and Happy
            </Text>
            <MaterialCommunityIcons
              name="settings-helper"
              size={45}
              color="black"
              style={{
                position: "absolute",
                bottom: "60%",
                right: 0,
                justifyContent: "center",
              }}
              onPress={() => {
                setPop(!pop);
              }}
            />
          </View>
          <View
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <Animated.FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              data={data}
              scrollEnabled={scrollImage}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item }) => (
                <Image style={{ width, height: width }} source={item.img} />
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={dataRef}
            />
            {currentIndex < data.length - 1 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", right: 0 }}
                onPress={goToNextSlide}
              />
            )}
            {currentIndex > 0 && (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", left: 0 }}
                onPress={handleBack}
              />
            )}
          </View>

          <View style={{ position: "relative", padding: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Happiness</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <AntDesign
                name="user"
                size={15}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 15 }}>Dana</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <FontAwesome5
                name="users"
                size={10}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 10 }}>260 enrolled</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="star-rate"
                size={17}
                color="gold"
                style={{}}
              />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: "5%" }}>
          <View style={{ padding: "2%", position: "relative" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "#002F67",
              }}
            >
              Becoming Focused and Happy
            </Text>
            <MaterialCommunityIcons
              name="settings-helper"
              size={45}
              color="black"
              style={{
                position: "absolute",
                bottom: "60%",
                right: 0,
                justifyContent: "center",
              }}
              onPress={() => {
                setPop(!pop);
              }}
            />
          </View>
          <View
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <Animated.FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              data={data}
              scrollEnabled={scrollImage}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item }) => (
                <Image style={{ width, height: width }} source={item.img} />
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={dataRef}
            />
            {currentIndex < data.length - 1 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", right: 0 }}
                onPress={goToNextSlide}
              />
            )}
            {currentIndex > 0 && (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", left: 0 }}
                onPress={handleBack}
              />
            )}
          </View>

          <View style={{ position: "relative", padding: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Happiness</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <AntDesign
                name="user"
                size={15}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 15 }}>Dana</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <FontAwesome5
                name="users"
                size={10}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 10 }}>260 enrolled</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="star-rate"
                size={17}
                color="gold"
                style={{}}
              />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: "5%" }}>
          <View style={{ padding: "2%", position: "relative" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "#002F67",
              }}
            >
              Becoming Focused and Happy
            </Text>
            <MaterialCommunityIcons
              name="settings-helper"
              size={45}
              color="black"
              style={{
                position: "absolute",
                bottom: "60%",
                right: 0,
                justifyContent: "center",
              }}
              onPress={() => {
                setPop(!pop);
              }}
            />
          </View>
          <View
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <Animated.FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              data={data}
              scrollEnabled={scrollImage}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item }) => (
                <Image style={{ width, height: width }} source={item.img} />
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={dataRef}
            />
            {currentIndex < data.length - 1 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", right: 0 }}
                onPress={goToNextSlide}
              />
            )}
            {currentIndex > 0 && (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", left: 0 }}
                onPress={handleBack}
              />
            )}
          </View>

          <View style={{ position: "relative", padding: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Happiness</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <AntDesign
                name="user"
                size={15}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 15 }}>Dana</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <FontAwesome5
                name="users"
                size={10}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 10 }}>260 enrolled</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="star-rate"
                size={17}
                color="gold"
                style={{}}
              />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: "5%" }}>
          <View style={{ padding: "2%", position: "relative" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "#002F67",
              }}
            >
              Becoming Focused and Happy
            </Text>
            <MaterialCommunityIcons
              name="settings-helper"
              size={45}
              color="black"
              style={{
                position: "absolute",
                bottom: "60%",
                right: 0,
                justifyContent: "center",
              }}
              onPress={() => {
                setPop(!pop);
              }}
            />
          </View>
          <View
            style={{
              width,
              height: width,
              position: "relative",
            }}
          >
            <Animated.FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              data={data}
              scrollEnabled={scrollImage}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              renderItem={({ item }) => (
                <Image style={{ width, height: width }} source={item.img} />
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={dataRef}
            />
            {currentIndex < data.length - 1 && (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", right: 0 }}
                onPress={goToNextSlide}
              />
            )}
            {currentIndex > 0 && (
              <MaterialIcons
                name="keyboard-arrow-left"
                size={35}
                color="black"
                style={{ position: "absolute", top: "50%", left: 0 }}
                onPress={handleBack}
              />
            )}
          </View>

          <View style={{ position: "relative", padding: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Happiness</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <AntDesign
                name="user"
                size={15}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 15 }}>Dana</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <FontAwesome5
                name="users"
                size={10}
                color="black"
                style={{ marginRight: "1%" }}
              />
              <Text style={{ fontSize: 10 }}>260 enrolled</Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 15,
                right: 15,
                flexDirection: "row",
              }}
            >
              <MaterialIcons
                name="star-rate"
                size={17}
                color="gold"
                style={{}}
              />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <MaterialIcons name="star-rate" size={17} color="gold" />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
              <Ionicons
                name="star-outline"
                size={15}
                color="gold"
                style={{ paddingHorizontal: 1 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {pop && <Popup setPop={setPop} />}
    </View>
  );
}
