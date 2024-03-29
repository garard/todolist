import { Text, View, Pressable } from "react-native";
import Styles from "../components/Styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";

export default Home = function ({ navigation }) {
  const navToNewTodo = () => navigation.navigate("NewTodo");
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

          <View style={Styles.sampleTodo}>
            <View style={Styles.checkBox} />
            <Text style={Styles.taskText}>Learn react-native</Text>
          </View>
          <View style={Styles.sampleTodo}>
            <View style={Styles.checkBox} />
            <Text style={Styles.taskText}>Do a little python</Text>
          </View>
          <View style={Styles.sampleTodo}>
            <View style={Styles.checkBox} />
            <Text style={Styles.taskText}>Forget js</Text>
          </View>
        </View>
      </View>

      <View style={[Styles.footer]}>
        <Pressable style={[Styles.newTask]} onPress={navToNewTodo}>
          <Ionicons name = {'add-circle'} color={"green"} size={20} />
          <Text style={Styles.taskText}>New Todo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};