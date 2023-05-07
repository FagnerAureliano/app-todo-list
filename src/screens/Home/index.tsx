import { FlatList, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputField } from "../../components/InputField";
import { Counters } from "../../components/Counters";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([
    // "1",
    // "2",
    // "3",
    // "4",
    // "5",
    // "6",
    // "7",
    // "8",
    // "9",
    // "10",
    // "11",
    // "12",
  ]);
  function handleParticipantRemove(test: any) {
    console.log("test", test);
  }

  return (
    <View style={styles.containerTop}>
      <View style={styles.containerTop}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/Logo.png")}
        />
      </View>
      <View style={styles.containerBotton}>
        <InputField submitText={handleParticipantRemove} />
        <View style={styles.contadores}>
          <Counters count={tasks.length} text="Criadas" wordColor="#4EA8DE" />
          <Counters count={0} text="Concluídas" wordColor="#8284FA" />
        </View>
        <View style={styles.emptyList}>
          <FlatList
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Tasks taskName={item} onRemove={handleParticipantRemove} />
            )}
            ListEmptyComponent={() => (
              <View style={styles.viewEmpty}>
                <MaterialCommunityIcons
                  name="clipboard-edit-outline"
                  size={56}
                  color="#808080"
                />

                <Text style={styles.emptyListTextOne}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyListTextTwo}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
