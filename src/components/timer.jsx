import { View, Text, StyleSheet } from "react-native";

export default function Timer({ clock }) {
  const formatedTime = `${Math.floor(clock / 60)
    .toString()
    .padStart(2, "0")}:${(clock % 60)
      .toString()
      .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.6,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
