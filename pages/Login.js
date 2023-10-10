import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.152.160:8081/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Save the token to AsyncStorage
        await AsyncStorage.setItem("token", token);

        const token2 = await AsyncStorage.getItem("token");
        // console.log(token);
        // console.log(token2);

        // Navigate to the dashboard with the username
        navigation.navigate("Menu", { uid: data.uid });
      } else {
        // Handle login error, e.g., show an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default LoginScreen;
