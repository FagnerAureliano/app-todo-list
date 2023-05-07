import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

type Props = {
  submitText(value: string): void;
};
export function InputField({ submitText }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  function handleSubmit() {
    submitText(text);
    setText("");
  }

  return (
    <>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setText}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          value={text}
          style={[
            styles.input,
            {
              borderColor: isFocused ? "#5E60CE" : "#0D0D0D",
            },
          ]}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            <Ionicons name="add-circle-outline" size={16} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
