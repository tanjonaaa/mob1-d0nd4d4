import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {typeColors} from "@/components/pokemon/types";

export const TypeTag = ({type}: { type: string }) => {
    const color = typeColors[type as keyof typeof typeColors];

    return (
        <View style={[styles.typeTag, {backgroundColor: color}]}>
            <Text style={styles.typeText}>{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    typeTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 20,
    },
    typeText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})