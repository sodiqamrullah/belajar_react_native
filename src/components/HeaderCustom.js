import React from "react";
import { View, Text } from "react-native";

const HeaderCustom = ({ title = "Title", colorCustom= "green"}) => {

    return (
         
        
            //   {/* Header */}
            //   {/* <View style={{height: 50, width: Dimensions.get("window").width, backgroundColor:"green"}}> */}

                    <View style={{height: 50, width:'100%', backgroundColor: colorCustom, alignItems:"center", justifyContent:"center"}}>
                       <Text style={{fontSize: 16, fontWeight: "bold", color:"white" }}>{title}</Text>
                       
                    </View>

    )
}

export default HeaderCustom