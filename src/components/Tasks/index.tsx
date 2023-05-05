import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { InputField } from "../InputField";
import Checkbox from "expo-checkbox";
import { useState } from "react";

type Props = {
  taskName: string;
  onRemove(name: string): void;
};
export function Tasks({ taskName, onRemove }: Props) {
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#5E60CE" : "#4EA8DE"}
        />

        <Text style={styles.name}>{taskName}</Text>
        <TouchableOpacity
          onPress={() => onRemove(taskName)}
          style={styles.button}
        >
          <Feather name="trash-2" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </>
  );
}
