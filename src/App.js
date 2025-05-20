// HARI RABU

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


// import { View, Text, Alert } from 'react-native'
// import React from 'react'
// import Tombol from './src/components/Tombol'


// const App = () => {
//   return (
//     <View>
//       <Text style={{color: "black"}}>Assalamu'alaikum Wahai Saudara Sekalian</Text>

//       <Tombol title='test' color='red' teksColor={"black"} ukuranFont={100} onClick={() => {console.log("testing diterima")}}/>   
//       <Tombol title='testing' color='black' teksColor={"white"} ukuranFont={100} onClick={() => Alert.alert("testing")}/>   
//       <Tombol title='hello' color='yellow'teksColor={"black"} ukuranFont={100} onClick={() => Alert.alert("Warning", "kamu terlalu berharap")}/>   


//     </View>
//   )
// }
// export default App





// HARI KAMIS

// import { View, Text, Alert } from 'react-native'
// import React from 'react'
// import Tombol from './src/components/Tombol'
// import { useState } from 'react'


// const App = () => {
//   return (
//     <View>
//       <Text style={{color: "black"}}>Assalamu'alaikum Wahai Saudara Sekalian</Text>

//       <Tombol title='+' color='red' teksColor={"white"} ukuranFont={150} onClick={() => console.log("+1")}/>   
//       <Tombol title='-' color='black' teksColor={"white"} ukuranFont={150} onClick={() => console.log("testing")} />   
//       {/* <Tombol title='hello' color='yellow'teksColor={"black"} ukuranFont={60} onClick={() => Alert.alert("Warning", "kamu terlalu berharap")}/>    */}


//     </View>
//   )
// }
// export default App





// HARI JUM'AT
// rnfe

// import { View, Text, TouchableOpacity, StyleSheet, Switch, TextInput, StatusBar } from 'react-native'
// import React from 'react'

// const App = () => {
//   const [count, setCount] = React.useState(0)
//   const [isEnabled, setIsEnabled] = React.useState(false)
//   const [password, setPassword] = React.useState("")
  
//   return (
//     <View style={{backgroundColor: isEnabled? "#5FCEE8" : "white", flex:1}}  >
//       <StatusBar animated={true}
//           backgroundColor="#5FCEE8"
//           />
//       <TouchableOpacity onPress = { () => setCount(count +1)} style={styles.btn}>
//       <Text style={{color: "black"}}>TAMBAH</Text>
//       </TouchableOpacity>

//       <Text style={styles.text}>{count}</Text>

//       <TouchableOpacity onPress={ () => (count <= 0 ? setCount(count -0) : setCount(count -1))} style={styles.btn}>
//         <Text style={{color: "black"}}>KURANG</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={ () => setCount(0)} style={styles.btn}>
//         <Text style={{color: "black"}}>RESET</Text>
//       </TouchableOpacity>
      

//       <Switch
//       value={isEnabled}
//       onValueChange={() => setIsEnabled(!isEnabled)}
//       thumbColor={isEnabled? "dark" : "red"}
//       />



//       <TextInput
//       placeholder='Enter Your Password' 
//       placeholderTextColor={"#0F0F0F"} 
//       secureTextEntry={!isEnabled}
//       selectionColor={'black'}
//       onChangeText={e => setPassword(e)}
//       value={password}
//       />
//     </View>
//   )
// }


// const styles = StyleSheet.create ({
//     btn: {
//         padding: 5,
//         paddingHorizontal:10,
//         margin: 50,
//         borderRadius: 100,
//         alignItems: "center",
//         elevation:20,
//         fontSize: 60,
//         fontWeight: "bold"
//     },
//     text: {
//       color: "black",
//       fontWeight: "700",
//       textAlign: "center",
//       fontSize: 60
//     }
// })

// export default App





// Coba-coba

// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, Switch } from "react-native";


// const App = () => {

//   const [isEnabled, setIsEnabled] = React.useState(false)
  
//   return(

// <View>
//   <TouchableOpacity >
//     <Text style={{color : "black", textAlign: "center"}}>PROFIL</Text>
//   </TouchableOpacity>

//   <TouchableOpacity>
//     <Text style={{color : "black"}}>Foto Profil</Text>
//     <Image source={require("./src/assets/images/image.jpg")}
//      style={styles.poto}/>
//   </TouchableOpacity>

//   <TouchableOpacity>
//     <Text style={{color : "black"}}>Ikon</Text>
//   </TouchableOpacity>

//   <Switch
//   value={isEnabled}
//   onValueChange={() => setIsEnabled(isEnabled)}
//   />


// </View>
//   )
// }


// const styles = StyleSheet.create({
//   poto:{
//      width: 60, 
//      height: 60,
//      alignSelf: "flex-end"
//     }
  
// })

// export default App


// HARI SENIN 19 MEI 2025

// import React from "react"
// import { Text, View, StyleSheet, Dimensions} from "react-native"
// import HeaderCustom from "./components/HeaderCustom"



// const App = () => {

//     console.log(Dimensions.get("window").width)
//         console.log(Dimensions.get("window").height)


//   return (
//     <View style={styles.continer}>

//       {/* Header
//       <View style={{height: 50, width: Dimensions.get("window").width, backgroundColor:"green"}}> */}

//             <View>
//               <HeaderCustom title="to do list" colorCustom="black"/>
//            </View>

//         <Text>Hallo React Native</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
// continer: {
// 	flex: 1, 
// 	backgroundColor:'red'
//    }
// })

// export default App


// tugas Selasa 20 Mei 2025

import React from "react";
import { Text, View} from "react-native";
import ImageCustom from "./components/ImageCustom";

const App = () => {
  return(
    <View>
      <ImageCustom uri={'https://3.bp.blogspot.com/-rN867EUYKbU/WyYqrkJxRyI/AAAAAAAAASI/R6OOwN6BSd8gZr7W8pfTdEdAI5MFxdZlwCEwYBhgL/s1600/Desain-rumah-minimalis-modern-terbaru..jpg'}/>
    </View>
    
  )
}

export default App