// Requirements
//   Title: 
//     At the top of the main page, prominently display the title "My Todo List."
//
//   Todo List Display: 
//     The central part of the screen should feature a list of to-dos. For the purpose of
//     this milestone, you may hardcode a few to-do items to simulate how they will appear. This does not
//     require dynamic loading or manipulation of data yet.
//
//   Add New Todo Button: 
//     Include an "Add New Todo" button at the bottom of the screen. This button
//     will be made functional in subsequent milestones, so it does not need to perform any actions at this
//     stage.


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
  
      <View style={[styles.header, {backgroundColor: '#2196F3'}]} >
        <Text style={styles.text}>My Todo List</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.body} >
          <Text style={[styles.text, {marginBottom: 5}, {marginTop: 5}]}>Current Tasks</Text>

          <View style={styles.sampleTodo}>
            <View style={styles.checkBox}/>
            <Text style={styles.taskText}>Go outside</Text>

          </View>
          <View style={styles.sampleTodo}>
            <View style={styles.checkBox}/>
            <Text style={styles.taskText}>Touch grass</Text>

          </View>
          <View style={styles.sampleTodo}>
            <View style={styles.checkBox}/>
            <Text style={styles.taskText}>Return to monke</Text>

          </View>

        </View>
      </View>

      <View style={[styles.footer, {backgroundColor: 'darkgrey'}]} >
        <View style={[styles.newTask, {height: '50%'}, {width: '90%'}]} >
        <View style={styles.circleButton}>

        </View>
        <Text style={styles.buttonText}>+</Text>
          <Text style={styles.taskText}>ADD NEW TODO</Text>
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
    backgroundColor: 'green',
    width: '100%',
    height: '10%',
    marginVertical: 5,
    alignItems: 'center',
  },

  circleButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'black',
    fontSize: 40,
    top: -9.5,
    left: -21.5,
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
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'teal',
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

  header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#ADD8E6',
    justifyContent: "center",
    alignItems: "center",
  },

  middle:{
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    width: '100%',
    height: '82%'
  },

  body: {
    width: '90%',
    height: '100%',
    backgroundColor: '#ADD8E6',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'top',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderTopColor: 'black',
    borderTopWidth: 2,
  },

  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#ADD8E6',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

})
;
