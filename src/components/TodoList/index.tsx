import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

type Props = {
  text?: string;
  count?: number;
  wordColor?: string;
};
export function TodoList({ text, count, wordColor }: Props) {
  return (
    <>
      <View style={styles.container}>
     
        
      </View>
    </>
  );
}
