import { StyleSheet, View, Alert, ListView, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Button } from "react-native-paper";
import React, { useEffect, useState } from 'react';
import NoTaskPage from './notaskpage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, Portal, Provider } from 'react-native-paper';

interface TaskDetails {
  title: string,
  desc: string,
  completed: boolean,
  id: number
}


class TaskPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showNoTaskView: true,
      isDeleteModalVisible: false,
    }
  }


  static getDerivedStateFromProps(props: any, state: any) {
    return state;
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      AsyncStorage.getItem('rntodo').then((result:any) => {
        console.log("localstorage data",result)
      })
    });
  }

  getLocalStorageData = async() => {
    return await AsyncStorage.getItem('keyz')
  }

  onHideDeleteModal = () => {
    this.setState({ isDeleteModalVisible: false })
  }

  onAddTaskButtonClick = () => {
    this.props.navigation.navigate("AddTask")
    // this.setState({ isDeleteModalVisible: true })
  }

  render(): React.ReactNode {
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    return (
      <Provider>
        <Portal>
            <Modal visible={this.state.isDeleteModalVisible} onDismiss={() => this.onHideDeleteModal()} contentContainerStyle={containerStyle}>
              <Text style={styles.deleteTaskTitle}>Delete Task</Text>
            </Modal>
        </Portal>
        <SafeAreaView>
          <View style={{ margin: 10 }}>
            <View>
              <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>My</Text>
              <Text style={{ fontSize: 40, color: 'black', fontFamily: 'Nunito-Regular' }}>Tasks</Text>
            </View>
            {/* <View>
            <View style={styles.infoView}>
              <Text style={styles.infoContent}>Swipe right to delete your task or swipe left to edit</Text>
            </View>
          </View> */}
            <View>
              <ScrollView style={{ height: "83%" }}>
                {
                  this.state.showNoTaskView && <NoTaskPage />
                }
              </ScrollView>
              <Button labelStyle={{ fontFamily: "Nunito-Regular" }} buttonColor='#D3D3D3' textColor='black' mode="contained" onPress={() => this.onAddTaskButtonClick()} style={styles.TouchableOpacityStyle} >
                <Text style={{ fontFamily: "Nunito-Regular", fontSize: 20 }}>+ </Text>Create Task
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
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
  },
  infoContent: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: "black",
    margin: 10,
    textAlign: 'center'
  },
  infoView: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#DCDCDC"
  },
  deleteTaskTitle:{
    fontFamily: 'Nunito-Regular',
    fontSize: 17,
    color: "black"
  }
});

export default TaskPage;