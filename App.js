import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

//Components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [couseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onAddGoalHandler = (enteredGoal) => {
    setCourseGoals((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentState) => {
      return currentState.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelIsAddMode = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={onAddGoalHandler}
        onCancel={cancelIsAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={couseGoals}
        renderItem={({ item }) => (
          <GoalItem
            id={item.id}
            onDelete={removeGoalHandler}
            title={item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
