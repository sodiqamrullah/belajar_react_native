import React from "react";
import { View, Image, StyleSheet } from "react-native";

const imageCustom = ({ uri}) => {
    return (

        <Image style={styles.poto} source={{uri}}/>
    )
}

const styles = StyleSheet.create({
    poto: {
        width: 100,
        height: 100,
        alignSelf:"flex-start"
    }
})
export default imageCustom