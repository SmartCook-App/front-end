import React from 'react';
import { Animated, View, Text, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import slide from './Slide';
import SlideComponentItem from './SlideComponentItem';


export default function SlideComponent() {
    const { width } = useWindowDimensions();
    const scrollX = new Animated.Value(250)
    let position = Animated.divide(scrollX, width)

    return (
        <View style={styles.container}>
            <FlatList
                data={slide}
                renderItem={({ item }) => < SlideComponentItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                scrollEnabled
                snapToAlignment = 'center'
                scrollEventThrottle = {16}
                decelerationRate = {"fast"}
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll = {Animated.event(
                    [null, { nativeEvent: { contentOffset: { x: scrollX } } }]
                )}
            />
            <View style={styles.dotView}>
                {slide.map((_, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i-1, i, i+1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    return(
                        <Animated.View
                            key = {i}
                            style = {{opacity, height: 10, width:10, backgroundColor:'#595959', }}
                        />
                    )
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})