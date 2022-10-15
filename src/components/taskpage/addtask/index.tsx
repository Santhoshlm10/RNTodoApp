import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';




function AddTaskPage(props: any) {

  const [taskTitle, setTaskTitle]: any = useState("");
  const [taskDescription, setTaskDescription]: any = useState("");

  const [showTitleError, setTitleError]: any = useState(true);
  const [showDescriptionError, setDescriptionError]: any = useState(true);

  const onBackClick = () => {
    props.navigation.navigate("HomePage");
  }

  const onAddTask = async () => {
    console.log("Task", taskTitle.length, taskDescription.length);
    if (taskTitle.length === 0 && taskDescription.length === 0) {
      setTitleError(false);
      setDescriptionError(false);
    } else if (taskTitle.length === 0) {
      setTitleError(true);
    } else if (taskDescription.length === 0) {
      setDescriptionError(true);
    } else {
      props.navigation.navigate("HomePage");
      Toast.show('Task created successfully');
    }
    // await AsyncStorage.setItem(
    //   'myStoreKey',
    //   taskTitle
    // );

  }

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        onPress={() => onBackClick()}>
        <Icon name="arrow-back" size={30} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Create a Task</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.tasktitle}>Task title</Text>
        <TextInput
          style={styles.inputStyle}
          value={taskTitle}
          onChangeText={text => setTaskTitle(text)}
        />
      </View>
      {
        !showTitleError && <Text style={styles.errortitle}>Title required!</Text>
      }
      <View style={{ marginTop: 15 }}>
        <Text style={styles.tasktitle}>Task description</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.descriptionInput}
          value={taskDescription}
          onChangeText={text => setTaskDescription(text)}
        />
      </View>
      {
        !showDescriptionError && <Text style={styles.errortitle}>Description required!</Text>
      }
      <View style={{ marginTop: 15 }}>
        <Button labelStyle={{ fontFamily: "Nunito-Regular" }} style={styles.submitButton} mode='elevated' onPress={() => onAddTask()}>ADD TASK</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 30,
    color: 'black',
    fontFamily: 'Nunito-Regular'
  },
  tasktitle: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Nunito-Regular'
  },
  errortitle: {
    fontSize: 15,
    color: 'red',
    fontFamily: 'Nunito-Regular'
  },
  inputStyle: {
    fontFamily: 'Nunito-Regular'
  },
  descriptionInput: {
    fontFamily: 'Nunito-Regular',
    textAlignVertical: 'top'
  },
  submitButton: {
    fontFamily: 'Nunito-Regular',
    borderRadius: 0
  }
})

export default AddTaskPage;