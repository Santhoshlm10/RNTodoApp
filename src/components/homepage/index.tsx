import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesPage from '../notespage';
import TaskPage from '../taskpage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const Tab = createBottomTabNavigator();
class HomePage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  static getDerivedStateFromProps(props:any,state:any){
    return state;
  }

  componentDidMount(): void {
    console.log("Home page mounted")
  }

  render() {

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { position: 'absolute' },
          tabBarActiveTintColor: "#6200ee",
          tabBarLabelStyle: {
            fontSize: 12,
          }
        }}>
        <Tab.Screen
          name="Task"
          component={TaskPage}
          options={{
            tabBarLabel: 'Task',
            tabBarIcon: () => (
              <Icon name="edit" size={30} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesPage}
          options={{
            tabBarLabel: 'Notes',
            tabBarIcon: () => (
              <Icon name="note" size={30} />
            ),
            headerShown: false
          }} />
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (state:any) => {
  return state;
}
export default HomePage;