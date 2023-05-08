import { Alert, FlatList, Text, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { InputField } from "../../components/InputField";
import { Counters } from "../../components/Counters";
import { TaskProps, Tasks } from "../../components/Tasks";
import { useEffect, useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [countTasksDone, setCountTasksDone] = useState<number>(0);

  function handleAddTask(newTask: TaskProps) {
    const { name } = newTask;
    const existingTask = tasks.some((task) => task.name === name);
    if (existingTask) {
      return Alert.alert(
        `Tarefa: ${name}`,
        "Já existe uma tarefa na lista com este nome."
      );
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleTaskRemove(task: TaskProps) {
    const { name } = task;
    const removeConfirmationMessage = `Remover a tarefa: ${name}?`;
    return Alert.alert("Remover", removeConfirmationMessage, [
      {
        text: "OK",
        onPress: () => {
          setTasks((prevTasks) =>
            prevTasks.filter((item) => item.name !== name)
          );
        },
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }
  function updateTasks(prevTasks: TaskProps) {
    const taskFound = tasks.findIndex((t) => t.name === prevTasks.name);
    tasks[taskFound] = prevTasks;
    const isDone = tasks.filter((t) => t.isDone === true);
    setTasks(tasks);
    setCountTasksDone(isDone.length);
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
        <InputField submitTask={handleAddTask} />
        <View style={styles.contadores}>
          <Counters count={tasks.length} text="Criadas" wordColor="#4EA8DE" />
          <Counters
            count={countTasksDone}
            text="Concluídas"
            wordColor="#8284FA"
          />
        </View>
        <View style={styles.emptyList}>
          <FlatList
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Tasks
                task={item}
                onCheck={updateTasks}
                onRemove={handleTaskRemove}
              />
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
