import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import Styles from "../components/Styles";
import {React, useState} from "react";
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";

export default NewTodo = function ({ navigation }) {
  const navToHome = () => navigation.popToTop();
  const resetTask = () => {};
  const addNewTask = () => {};
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');



  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.text}>Add New ToDo</Text>
      </View>

      <View style={Styles.middle}>
        <View style={Styles.body}>
            <Text
              style={{ fontSize: 20, textAlign: "left", marginVertical: 10, width: "90%"}}
              onPress={navToHome}
            >
              Title
            </Text>
          

          <TextInput
            style={[
              Styles.box,
              { width: "90%", height: 40, padding: 5, fontSize: 20 , textAlign: "center", marginBottom: 15},
            ]}
            placeholder="Enter a Title..."
          />

          <Text
            style={{ fontSize: 20, textAlign: "left", marginVertical: 10, width: "90%"}}
            onPress={navToHome}
          >
            Description
          </Text>

          <TextInput
            style={[
              Styles.box,
              {
                width: "90%",
                height: "50%",
                padding: 5,
                fontSize: 20,
                textAlign: "center",
              },
            ]}
            multiline={true}
            value={description}
            placeholder="Enter a Description..."
            
          />
        </View>
      </View>

    <View style={Styles.navFooter}>
        <Pressable style={[Styles.box, {height: 40, width: 100, borderRadius: 15}]} onPress={navToHome}>
            <Ionicons name = {'arrow-back-outline'} color={"red"} size={20} />
            <Text style={[Styles.text, {fontSize: 20, fontWeight: 'bold', marginLeft: 3}]}>Back</Text>
        </Pressable>
            
        <Pressable style={[Styles.box, {height: 40, width: 100, borderRadius: 15}]} onPress={addNewTask}>
            <Ionicons name = {'save-outline'} color={"green"} size={20} />
            <Text style={[Styles.text, {fontSize: 20, fontWeight: 'bold', marginLeft: 3}]}>Save</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
};
