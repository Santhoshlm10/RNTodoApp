import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesPage from '../notespage';
import TaskPage from '../taskpage';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

function HomePage(props:any) {
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' }
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
  );
}

export default HomePage;