import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import slide from './Slide';
import SlideComponentItem from './SlideComponentItem';

export default function SlideComponent() {
    return (
        <View style={styles.container}>
            <FlatList
                data={slide}
                renderItem={({ item }) => < SlideComponentItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={true}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})