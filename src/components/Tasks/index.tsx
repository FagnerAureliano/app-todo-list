import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export type TaskProps = {
  name: string;
  isDone: boolean;
};

type Props = {
  task: TaskProps;
  onRemove(task: TaskProps): void;
  onCheck(task: TaskProps): void;
};
export function Tasks({ task, onRemove, onCheck }: Props) {
  const [isChecked, setChecked] = useState(false);

  function setCheck(task: TaskProps) {
    task.isDone = !isChecked;
    onCheck(task);
  }

  return (
    <>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          onTouchStart={() => setCheck(task)}
          color={isChecked ? "#5E60CE" : "#4EA8DE"}
        />

        <Text
          style={[
            styles.name,
            {
              textDecorationLine: task.isDone ? "line-through" : "none",
            },
          ]}
        >
          {task.name}
        </Text>
        <TouchableOpacity onPress={() => onRemove(task)} style={styles.button}>
          <Feather name="trash-2" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </>
  );
}
