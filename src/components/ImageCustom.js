import React from "react";
import { View, Image, StyleSheet } from "react-native";

const imageCustom = ({ uri}) => {
    return (
        <Image style={styles.poto} source={{uri}}/>


    )
}

const styles = StyleSheet.create({
    poto: {
        width: 50,
        height: 50
    }
})
export default imageCustom