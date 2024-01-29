import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const contmode = ["Work Time", "Short Break", "Long Break"];

export default function Header({ setClock, currentTime, setCurrentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setClock(newTime * 60);
  }

  return (
    <View style={styles.headStyle}>
      {contmode.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{fontWeight: "bold"}}>{item} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headStyle: {
    flexDirection: "row",
  },
  itemStyle: {
    padding: 5,
    borderWidth: 2,
    width: "33%",
    borderColor: "white",
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
