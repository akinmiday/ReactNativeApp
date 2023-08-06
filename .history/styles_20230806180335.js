import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "pink",
    marginTop: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "red",
    fontSize: 20,
    fontFamily: "Arial",
    fontStyle: "italic",
    fontWeight: "normal",
    letterSpacing: 1,
    textAlign: "auto",
    textDecorationLine: "underline",
    textDecorationColor: "green",
    textTransform: "lowercase",
  },
  button: {
    backgroundColor: "yellow",
    padding: 15,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    borderWidth: 5,
    borderColor: "green",
    marginTop: 20,
  },
  item: {
    backgroundColor: "yellow",
    padding: 20,
    marginVertical: 5,
  },
  header: {
    fontSize: 15,
  },
  title: {
    fontSize: 10,
  },
  value: {
    fontWeight: "bold",
    padding: 5,
    marginBottom: 10,
  },
});

export default styles;
