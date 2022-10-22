import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';
import SyncStorage from 'sync-storage';
import { useSelector, useDispatch } from "react-redux"
import { TodoState } from "./../../../todoclient/reducers/index";
import { addTodo } from '../../../todoclient/actions';

function AddTaskPage(props: any) {
  const store : any = useSelector((state: TodoState) => state);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle]: any = useState("");
  const [taskDescription, setTaskDescription]: any = useState("");
  const [showErrorView, setShowErrorView]: any = useState(false);

  const onBackClick = () => {
    props.navigation.navigate("HomePage");
  }

  const onAddTask = async () => {
    if (taskTitle.length === 0 || taskDescription.length === 0) {
      setShowErrorView(true)
    } else {
      let varKey: any = []
      let tempVar: any = {
        task_title: taskTitle,
        task_description: taskDescription,
        task_done: false,
        task_id: Date.now()
      }
      varKey.push(tempVar);
      dispatch(addTodo(varKey))
      props.navigation.navigate("HomePage");
      Toast.show('Task created successfully');
    }
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
        showErrorView &&
        <View style={styles.errorView}>
          <Text style={styles.errorContent}>Please provide the title and description</Text>
        </View>
      }
      <View style={{ marginTop: 15, justifyContent: "flex-end" }}>
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
  errorView: {
    // height:30,
    marginTop: 10,
    backgroundColor: "#FFCCCB"
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
  },
  errorContent: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: "red",
    margin: 10,
    textAlign: 'center'
  }
})

export default AddTaskPage;