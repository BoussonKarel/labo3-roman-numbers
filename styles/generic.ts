import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({});

export const app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingVertical: 32,
    paddingHorizontal: 32
  },

  results: {
    marginTop: 32,
  },

  resultText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export const headers = StyleSheet.create({
  large: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.dark,
    opacity: 0.2,
    marginBottom: 8,
  },

  medium: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export const forms = StyleSheet.create({
  input: {
    fontSize: 40,
    color: colors.dark,
    fontWeight: "bold",

    marginVertical: 8,
    borderRadius: 4,

    // borderWidth: 1,
    // borderColor: colors.dark,
  },
});
