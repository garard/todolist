import {
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
  ToastAndroid,
} from "react-native";
import Styles from "../components/Styles";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadData, saveData } from "../datamodel/mydata";

export default function NewTodo({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const navToHome = () => {
    navigation.navigate("Home");
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

  useEffect(() => {
    saveData(tasks);
    console.log(tasks);
  }, [tasks]);

  const successAlert = () =>
    ToastAndroid.show("Todo Added!", ToastAndroid.SHORT);

  const addNewTask = () => {
    if (!title && !description) failureAlert("Title and Description");
    else if (!title) failureAlert("Title");
    else if (!description) failureAlert("Description");
    else {
      successAlert();
      const addTask = [title, description, "0", "0"];

      const updatedTasks = [addTask, ...tasks];
      setTasks(updatedTasks);

      // Reset input fields
      setTitle("");
      setDescription("");
    }
  };

  const failureAlert = (failedField) => {
    Alert.alert("Todo not Added", `${failedField} must not be empty`, [
      { text: "OK" },
    ]);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.text}>Add New ToDo</Text>
      </View>

      <View style={Styles.middle}>
        <View style={Styles.body}>
          <Text
            style={Styles.titleBar}
          >
            Title
          </Text>
          <TextInput
            style={[Styles.textBox]}
            placeholder="Enter a Title..."
            onChangeText={(text) => setTitle(text)}
            value={title}
          />

          <Text
            style={Styles.titleBar}
          >
            Description
          </Text>
          <TextInput
            style={[
              Styles.textBox,
              {
                height: "50%",
              },
            ]}
            multiline={true}
            placeholder="Enter a Description..."
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>
      </View>

      <View style={Styles.navFooter}>
        <Pressable
          style={[Styles.box, { height: 40, width: 100, borderRadius: 15 }]}
          onPress={navToHome}
        >
          <Ionicons name={"arrow-back-outline"} color={"red"} size={20} />
          <Text
            style={[
              Styles.text,
              { fontSize: 20, fontWeight: "bold", marginLeft: 3 },
            ]}
          >
            Back
          </Text>
        </Pressable>

        <Pressable
          style={[Styles.box, { height: 40, width: 100, borderRadius: 15 }]}
          onPress={addNewTask}
        >
          <Ionicons name={"save-outline"} color={"green"} size={20} />
          <Text
            style={[
              Styles.text,
              { fontSize: 20, fontWeight: "bold", marginLeft: 3 },
            ]}
          >
            Save
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
