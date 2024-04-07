import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },

  taskText: {
    fontSize: 20,
    marginLeft: 10,
  },

  sampleTodo: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "green",
    width: "100%",
    height: "10%",
    marginVertical: 5,
    alignItems: "center",
  },

  circleButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 40,
    top: -9.5,
    left: -21.5,
  },

  checkBox: {
    borderWidth: 1,
    backgroundColor: "white",
    marginLeft: 10,
    width: "10%",
    height: "60%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  newTask: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    width: "90%",
    height: "50%",
    marginVertical: 5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  header: {
    width: "100%",
    height: "8%",
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
  },

  middle: {
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "82%",
  },

  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ADD8E6",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "top",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopColor: "black",
    borderTopWidth: 2,
  },
  navFooter: {
    width: "100%",
    height: "10%",
    backgroundColor: "darkgrey",
    flexWrap: "wrap",
    flexDirection: 'row',
    padding: 20,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    height: "10%",
    backgroundColor: "darkgrey",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "white",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Styles;
