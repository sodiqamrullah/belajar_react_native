import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCostom = ({color, teksColor, onClick, ukuranFont, title}) => {
    return(
        <View>

            <TouchableOpacity onPress={onClick} style={[style.container, {backgroundColor:color}]}>
                <Text style= {{color:teksColor, fontSize:ukuranFont}}>{title}</Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: { 
       padding: 5,
        paddingHorizontal:10,
        margin: 50,
        borderRadius: 50,
        alignItems: "center",
        elevation:20,
        fontSize: 60,
        fontWeight: "bold"

    }
})

export default ButtonCostom