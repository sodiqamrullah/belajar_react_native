import { StyleSheet, Text, TouchableOpacity, useState} from "react-native";
import React from "react";


const Tombol = ({title, color, teksColor, onClick, ukuranFont,  }) => {
    return (    
        <TouchableOpacity onPress={onClick} style ={[style.container, {backgroundColor: color}]} >
            <Text style={{ color : teksColor , fontSize:ukuranFont }}>{title}</Text>
            
        </TouchableOpacity>
    )
}

const style = StyleSheet.create ({
    container: {
        padding: 5,
        paddingHorizontal:10,
        margin: 50,
        borderRadius: 100,
        alignItems: "center",
        elevation:20,
        fontSize: 60,
        fontWeight: "bold"
    }
})

export default Tombol