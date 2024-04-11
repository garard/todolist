import { useEffect, useState } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";
import Styles from "../components/Styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadData, saveData } from "../datamodel/mydata";
import { useFocusEffect } from "@react-navigation/core";

export default function Home({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const taskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][3] = "1";
    setTasks(updatedTasks);
    ToastAndroid.show("Task Complete 🎉", ToastAndroid.SHORT);
  };

  const taskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    ToastAndroid.show("Task Deleted 🗑️", ToastAndroid.SHORT);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style= {Styles.taskDisplay}
        >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: item[3] == "1" ? "green" : "black",
              fontWeight: "bold",
            }}
          >
            {item[0]}
          </Text>
          <Pressable
            onPress={() => {
              const updatedTasks = [...tasks];
              updatedTasks[index][2] =
                updatedTasks[index][2] === "0" ? "1" : "0";
              setTasks(updatedTasks);
            }}
          >
            <Ionicons
              name={item[2] === "1" ? "caret-up-outline" : "caret-down-outline"}
              color={"green"}
              size={20}
            />
          </Pressable>
        </View>
        {item[2] === "1" && (
          <View>
            <Text>{item[1]}</Text>
            <View
              style={Styles.buttonPosition}
            >
              <Pressable onPress={() => taskDelete(index)}>
                <Ionicons name={"trash-bin-outline"} color={"red"} size={20} />
              </Pressable>
              {item[3] === "0" && (
                <Pressable onPress={() => taskComplete(index)}>
                  <Ionicons
                    name={"checkmark-sharp"}
                    color={"green"}
                    size={20}
                  />
                </Pressable>
              )}
            </View>
          </View>
        )}
      </View>
    );
  };

  useEffect(() => {
    const firstLoad = async () => {
      const myData = await loadData();
      console.log(myData);
      console.log("my data");
      setTasks(myData);
    };
    firstLoad();
  }, []);
  const loadTasks = async () => {
    const myData = await loadData();
    setTasks(myData);
  };
  useFocusEffect(
    React.useCallback(() => {
      loadTasks();
    }, [])
  );
  useEffect(() => {
    saveData(tasks);
    console.log(tasks);
  }, [tasks]);

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
        <Pressable
          style={[Styles.newTask, { height: 40 }]}
          onPress={() => navigation.navigate("NewTodo")}
        >
          <Ionicons name={"add-circle"} color={"green"} size={20} />
          <Text style={Styles.taskText}>New Todo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}