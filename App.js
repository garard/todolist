// Requirements
//   Title: 
//     At the top of the main page, prominently display the title "My Todo List."

//   Todo List Display: 
//     The central part of the screen should feature a list of to-dos. For the purpose of
//     this milestone, you may hardcode a few to-do items to simulate how they will appear. This does not
//     require dynamic loading or manipulation of data yet.

//   Add New Todo Button: 
//     Include an "Add New Todo" button at the bottom of the screen. This button
//     will be made functional in subsequent milestones, so it does not need to perform any actions at this
//     stage.


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
  
      <View style={[styles.top, {backgroundColor: 'pink'}]} >
        <Text style={styles.text}>My Todo List</Text>
      </View>

      <View style={[styles.middle, {backgroundColor: 'lightyellow'}]} >
        <Text style={styles.text}>Current Tasks</Text>

        <View style={styles.sampleTodo}>
          <View style={styles.checkBox}/>
          <Text style={styles.taskText}>touch grass</Text>

        </View>
        <View style={styles.sampleTodo}/>
        <View style={styles.sampleTodo}/>

      </View>

      <View style={[styles.bottom, {backgroundColor: 'powderblue'}]} >
        <View style={[styles.newTask, {height: '50%'}, {width: '90%'}]} >
          <Text style={styles.text}>ADD NEW TODO</Text>
        </View>
      </View>

    </View>

  );
}



const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  taskText: {
    fontSize: 20,
    marginLeft: 10,
  },
  sampleTodo: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
    marginVertical: 5,
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    width: '10%',
    height: '60%',
        alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTask: {
    borderRadius: 10,
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
    marginVertical: 5,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    borderTopWidth: 20,
    borderTopColor: 'white',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }, 

  top: {
    width: '100%',
    height: '8%',
    borderwWidth: 12,
    backgroundColor: '#ADD8E6',

    flexDirection: 'column',
    alignItems: "center",
  },

  middle: {
    width: '90%',
    height: '80%',
    backgroundColor: '#ADD8E6',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'top',
    alignItems: 'center',
  },

  bottom: {
    width: '100%',
    height: '10%',
    backgroundColor: '#ADD8E6',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'top',
    alignItems: 'center',
  },

})
;
