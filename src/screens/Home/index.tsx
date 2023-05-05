import { FlatList, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputField } from "../../components/InputField";
import { Contador } from "../../components/Contador";
import { TodoList } from "../../components/TodoList";
import { Tasks } from "../../components/Tasks";

export function Home() {
  const tasks = ["1", "2", "3", "4", "5", "6"];
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
          <Contador count={0} text="Criadas" wordColor="#4EA8DE" />
          <Contador count={0} text="Concluídas" wordColor="#8284FA" />
        </View>
        <View style={styles.emptyList}>
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Tasks taskName={item} onRemove={handleParticipantRemove} />
            )}
            ListEmptyComponent={() => (
              <>
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
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
}
