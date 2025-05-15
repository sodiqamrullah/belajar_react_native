import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Tombol = ({title, color, teksColor, onClick}) => {
    return (    
        <TouchableOpacity onPress={onClick} style ={[style.container, {backgroundColor: color}]} >
            <Text style={{ color : teksColor }}>{title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create ({
    container: {
        padding: 20,
        margin: 50,
        borderRadius: 10,
        alignItems: "center",
        elevation: 10,
        fontSize: 60,
        fontWeight: "bold"
    }
})

export default Tombol