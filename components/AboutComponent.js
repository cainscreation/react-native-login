import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
// import { Button } from 'react-native-elements';




function About() {

  return (
      
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff'}}>
    <Text style={styles.layer}>Sign Up</Text>
    <TextInput style={styles.inputBox}
    placeholder="Full Name"
    placeholderTextColor = "#000"
            selectionColor="#fff"
            underlineColorAndroid="#000"

    />
        <TextInput style={styles.inputBox}
    placeholder="Contact Number"
    placeholderTextColor = "#000"
            selectionColor="#fff"
            underlineColorAndroid="#000"
            keyboardType="phone-pad"
    />
    <TextInput style={styles.inputBox}
    placeholder="Email"
    placeholderTextColor = "#000"
            selectionColor="#fff"
            keyboardType="email-address"
            underlineColorAndroid="#000"
    />

<TextInput style={styles.inputBox}
placeholder="Password"
secureTextEntry={true}
placeholderTextColor = "#000"
    selectionColor="white"
    underlineColorAndroid="#000"
/>
<TextInput style={styles.inputBox}
placeholder="Confirm Password"
secureTextEntry={true}
placeholderTextColor = "#000"
    selectionColor="white"
    underlineColorAndroid="#000"
/>
<Button
  title="Sign Up"
  raised={true}
  color= "black" 

/>


    </SafeAreaView>
  
);
}

const styles = StyleSheet.create({
inputBox: {
  width: 250,
  backgroundColor: '#fff', 
  paddingHorizontal: 10,
  fontSize: 16,
  marginVertical: 5,
  borderColor:'#fff'
},
layer:{
      fontSize:22,
      margin:20,
      fontWeight:"bold",
      color:'#EE801E',
},
button:{

},

});


export default About;