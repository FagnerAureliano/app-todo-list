import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string;
  count: number;
  wordColor: string;
};
export function Counters({ text, count, wordColor }: Props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 14, color: wordColor }}>{text}</Text>
        <Text style={styles.counters}>{count}</Text>
      </View>
    </>
  );
}
