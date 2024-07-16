import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { defaultPizzaImage } from "../../components/ProductListItem";
import Colors from "../../constants/Colors";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const resetField = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    if (!name) {
      setError("Name is required");
    }
    if (!price) {
      setError("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setError("Price is not a number");
      return false;
    }
    return true;
  };
  const create = () => {
    setError("");
    if (!validateInput()) {
      return;
    }

    resetField();
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Create Product" }} />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        keyboardType="default"
        placeholder="Enter new name "
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="Enter new price "
        style={styles.textInput}
      ></TextInput>
      <Text style={styles.error}>{error}</Text>
      <Button text="Create" onPress={() => create()} />
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
    marginTop: 5,
    marginBottom: 10,
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

export default CreateProductScreen;