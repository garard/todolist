import { Text, View, Pressable, ScrollView, FlatList } from "react-native";
import Styles from "../components/Styles";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";




export default Home = function ({ navigation }) {
  const navToNewTodo = () => navigation.navigate("NewTodo");

  const [tasks, setTasks] = useState([
    // title, description, description/buttons, completed
    ['Task 1', 'Task 1 description', '0', '0'],
    ['Task 2', 'Task 2 description', '0', '0'],
    ['Task 3', 'Task 3 description', '0', '0'],
    ['Task 4', 'Task 4 description', '0', '0'],
    ['Task 5', 'Task 5 description', '0', '0'],
    ['Task 6', 'Task 6 description', '0', '0'],
    ['Task 7', 'Task 7 description', '0', '0'],
    ['Task 8', 'Task 8 description', '0', '0'],
    ['Task 9', 'Task 9 description', '0', '0'],
    ['Task 10', 'Task 10 description', '0', '0'],
  ]);


// do later
  const taskComplete = () => {
    const completedTask = tasks
    const updatedHistory = history.slice(0, -1);
    setHistory(updatedHistory);
    const updatedBoard = [...board];
    updatedBoard[lastTurn[0]][lastTurn[1]] = "";
    setBoard(updatedBoard);
  };
//do later
  const taskDelete = () => {
    const completedTask = tasks
    const updatedHistory = history.slice(0, -1);
    setHistory(updatedHistory);
    const updatedBoard = [...board];
    updatedBoard[lastTurn[0]][lastTurn[1]] = "";
    setBoard(updatedBoard);
  };



  const renderItem = ({ item, index }) => {
    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'black', width: 350}}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>{item[0]}</Text>
          <Pressable style={{ marginRight: 90 }} onPress={() => {
            const updatedTasks = [...tasks];
            updatedTasks[index][2] = updatedTasks[index][2] === '0' ? '1' : '0'; // Toggle task display state
            setTasks(updatedTasks);
          }}>
            <Ionicons
              name={item[2] === '1' ? 'caret-up-outline' : 'caret-down-outline'}
              color={'green'}
              size={20}
            />
          </Pressable>
        </View>
  
        {item[2] === '1' && ( // Render description if item[2] is '1'
          <View>
            <Text>{item[1]}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Pressable style={{ marginRight: 90 }} onPress={taskComplete}>
                <Ionicons name={'checkmark-outline'} color={'green'} size={20} />
              </Pressable>
              <Pressable style={{ marginLeft: 90 }} onPress={taskDelete}>
                <Ionicons name={'trash-bin-outline'} color={'red'} size={20} />
              </Pressable>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={[Styles.header]}>
        <Text style={Styles.text}>My Todo List</Text>
      </View>
      <View style={Styles.middle}>
        <View style={Styles.body}>
          <Text style={[Styles.text, { marginBottom: 5 }, { marginTop: 5 }]}>
            Current Tasks
          </Text>
          

          <View style={{ flex: 1 }}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

      </View>
      </View>

      <View style={[Styles.footer]}>
        <Pressable style={[Styles.newTask, {height: 40}]} onPress={navToNewTodo}>
          <Ionicons name = {'add-circle'} color={"green"} size={20} />
          <Text style={Styles.taskText}>New Todo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};