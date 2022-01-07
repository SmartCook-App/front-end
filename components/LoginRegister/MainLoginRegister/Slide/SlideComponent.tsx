import React from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Slide from "./SlideData";
import SlideComponentItem from "./SlideItemComponent";

export default function SlideComponent(any: any, item: any): any {
  const scrollX = new Animated.Value(250);
  const { width } = useWindowDimensions();
  let position = Animated.divide(scrollX, width);

  return (
    <View>
      <FlatList
        data={Slide}
        renderItem={({ item }) => <SlideComponentItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.dotView}>
        {Slide.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#595959",
                margin: 8,
                borderRadius: 5,
                marginTop: 270,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
