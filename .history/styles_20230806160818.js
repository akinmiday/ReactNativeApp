import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    padding: 20,
    margin: 50,
    borderBottomWidth: 20,
    borderTopWidth: 15,
    borderLeftWidth: 20,
    borderRightWidth: 15,
    borderBottomColor: "yellow",
    borderTopColor: "blue",
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
});

export default styles;
