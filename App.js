import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Course goal"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "80%",
          }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});