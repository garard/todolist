import { Text, View, Pressable, TextInput, ScrollView } from "react-native";
import Styles from "../components/Styles";
import React from "react";
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";

export default NewTodo = function ({ navigation }) {
  const navToHome = () => navigation.popToTop();

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.text}>Add New ToDo</Text>
      </View>

      <View style={Styles.middle}>
        <View style={Styles.body}>
            <Text
              style={{ fontSize: 20, textAlign: "left", marginVertical: 10, width: "100%"}}
              onPress={navToHome}
            >
              Title
            </Text>
          

          <TextInput
            style={[
              Styles.box,
              { width: "100%", height: 40, padding: 5, fontSize: 20 , textAlign: "center", marginBottom: 15},
            ]}
            placeholder="Enter a Title..."
          />

          <Text
            style={{ fontSize: 20, textAlign: "left", marginVertical: 10, width: "100%"}}
            onPress={navToHome}
          >
            Description
          </Text>

          <TextInput
            style={[
              Styles.box,
              {
                width: "100%",
                height: "50%",
                padding: 5,
                fontSize: 20,
                textAlign: "center",
              },
            ]}
            multiline={true}
            placeholder="Enter a Description..."
          />
        </View>
      </View>

    <View style={Styles.navFooter}>
        <Pressable style={[Styles.box, {height: '100%', width: 100, borderRadius: 15}]} onPress={navToHome}>
            <Ionicons name = {'trash-outline'} color={"red"} size={20} />
            <Text style={[Styles.text, {fontSize: 20, fontWeight: 'bold', marginLeft: 3}]}>Cancel</Text>
        </Pressable>
            
        <Pressable style={[Styles.box, {height: '100%', width: 100, borderRadius: 15}]} onPress={navToHome}>
            <Ionicons name = {'save-outline'} color={"green"} size={20} />
            <Text style={[Styles.text, {fontSize: 20, fontWeight: 'bold', marginLeft: 3}]}>Save</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
};
