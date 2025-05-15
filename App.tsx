// import React, { useState } from "react";
// import { View, Text, Image, TextInput, ScrollView, StyleSheet, Button, Switch, StatusBar } from "react-native"
// import { isEnabled } from "react-native/Libraries/Performance/Systrace";

// const App = () => {
//   const [isChecked , setChecked] = useState(false)
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <StatusBar backgroundColor={"#38D67"} barStyle={"light-content"} />

//       <Text>Namaku Sodiq Amrullah</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>
//       <Text>Orang Kaya dari Magelang</Text>

//       <Image source={{ uri: 'https://i.pinimg.com/originals/ce/e7/04/cee704a903bd1371e0da7975d9e10583.jpg' }}
//         style={styles.image}
//       />



//       <Image source={require("./src/assets/images/image.jpg")}
//         style={styles.image}
//       />

//       <TextInput
//         placeholder="Enter Your Name"
//         secureTextEntry
//       />

//       <Button
//         title="Learn More"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />

//       <Switch onValueChange={()=> setChecked(!isChecked)}  value={isChecked} trackColor={{true: "#fbb13c" , false:"red"}}/>
// {}
//     </ScrollView>
//   )
// }


// const styles = StyleSheet.create({
//   image: { width: 200, height: 200 }
// })
// export default App;


import { View, Text, Alert } from 'react-native'
import React from 'react'
import Tombol from './src/components/Tombol'


const App = () => {
  return (
    <View>
      <Text style={{color: "black"}}>Assalamu'alaikum Wahai Saudara Sekalian</Text>

      <Tombol title='test' color='red' teksColor={"white"} onClick={() => {console.log("testing diterima")}}/>   
      <Tombol title='testing' color='black' teksColor={"yellow"} onClick={() => Alert.alert("testing")}/>   
      <Tombol title='hello' color='silver'teksColor={"salmon"}onClick={() => Alert.alert("Warning", "kamu terlalu berharap")}/>   


    </View>
  )
}
export default App
