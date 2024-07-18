import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Colors from "../constants/Colors";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {};
  const onCreateAccount = () => {};
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign In" }}></Stack.Screen>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter email "
        style={styles.textInput}
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="password"
        style={styles.textInput}
      ></TextInput>
      <Button text="Sign In" onPress={() => onSubmit()} />

      <Link href={"/sign-up"} asChild>
        <Text style={styles.textButton}>Create an account</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  label: {
    marginTop: 10,
    marginBottom: 10,
  },
  error: {
    marginTop: 10,
    marginBottom: 10,
    color: "red",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
export default SignInScreen;
