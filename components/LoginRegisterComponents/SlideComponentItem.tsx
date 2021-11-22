import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SlideComponentItem(any: any, item: any): any {
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      ></Image>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "red",
    width: width - 30,
    height: height / 4,
    backgroundColor: "red",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  textView: {
    flex: 0.3,
    position: "absolute",
    bottom: 10,
    backgroundColor: "red",
    color: "red",
    margin: 10,
    left: 5,
  },
  title: {
    backgroundColor: "red",
    color: "red",
    fontWeight: "bold",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
