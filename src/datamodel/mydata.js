// mydata.js
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "to-do-list";
const dummyData = [];

// loadData function
export async function loadData() {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : dummyData;
  } catch (e) {
    console.error("Failed to load data", e);
    return dummyData; // Return dummy data in case of error
  }
}

// saveData function
export async function saveData(data) {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Failed to save data", e);
  }
}
