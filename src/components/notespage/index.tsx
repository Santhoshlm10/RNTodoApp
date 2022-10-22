import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Button } from "react-native-paper";
import NoNotesPage from './nonotespage';


const NotesPage = (props:any) => {
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View>
        <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>My</Text>
        <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>Notes</Text>
      </View>
      <View>
        <ScrollView style={{ height: "83%" }}>
          <NoNotesPage />
        </ScrollView>
        <Button labelStyle={{ fontFamily: "Nunito-Regular" }} buttonColor='#D3D3D3' textColor='black' mode="contained" onPress={() => props.navigation.navigate("AddNotes")} style={styles.TouchableOpacityStyle} >
          <Text style={{ fontFamily: "Nunito-Regular", fontSize: 20 }}>+</Text> Add a Note
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