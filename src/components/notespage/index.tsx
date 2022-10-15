import { StyleSheet, View, Alert, ListView, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Button } from "react-native-paper";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const NotesPage = () => {
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View>
        <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>My</Text>
        <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>Notes</Text>
      </View>
      <View>

        <ScrollView style={{ height: "83%" }}>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>
          <Text>sdds</Text>

          <Text>sdds</Text>

        </ScrollView>


        <Button labelStyle={{fontFamily:"Nunito-Regular"}} buttonColor='#D3D3D3' textColor='black' mode="contained" onPress={() => console.log('Pressed')} style={styles.TouchableOpacityStyle} >
          <Text style={{fontFamily: "Nunito-Regular",fontSize:20}}>+</Text> Add a Note
        </Button>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 150,
    height: 50,
    fontFamily: "Nunito-Regular",
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 30,
  }
});

export default NotesPage;