import React from "react";
import {View, Text, Image, TextInput, ScrollView, StyleSheet} from "react-native"

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

     <Text>Namaku Sodiq Amrullah</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>
     <Text>Orang Kaya dari Magelang</Text>

     <Image source={{ uri: 'https://i.pinimg.com/originals/ce/e7/04/cee704a903bd1371e0da7975d9e10583.jpg'}}
     style={styles.image}
     />

     <Image source={require("./src/assets/images/image.jpg")}
     style={styles.image}
     />

     <TextInput
     placeholder="Enter Your Name"
     secureTextEntry
     />

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  image:{width:200, height:200}
})
export default App;