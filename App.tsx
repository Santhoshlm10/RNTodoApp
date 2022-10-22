import { Text, View, StatusBar } from "react-native";
import HomePage from "./src/components/homepage";
import SplashSreen from "./src/components/splashscreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTaskPage from "./src/components/taskpage/addtask";
import AddNotesPage from "./src/components/notespage/addnote";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput } from "react-native-paper";

const Stack = createNativeStackNavigator();

function App() {

  const [showSplash, setShowSplash]: any = useState(true);
  const [inputValue,setInputValue] : any = useState("");
  const [takeTime,setTakeTime] : any = useState("");


  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 2000);
  })

  if (showSplash) {
    return (
      <SplashSreen />
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AddTask" component={AddTaskPage} />
          <Stack.Screen name="AddNotes" component={AddNotesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}



export default App;