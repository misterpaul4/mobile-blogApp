import { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { createBlogPosts } from "../api/apis";
import { BlogContext } from "../context/BlogContext";
import { CREATE_BLOG } from "../store/actions";
import globalStyles from "../style/global";
import { paths } from "../utils/paths";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(BlogContext);
  const navigate = navigation.navigate;

  const handleSubmit = () => {
    dispatch({ type: CREATE_BLOG, payload: { title, content: description } });
    navigate(paths.Index);
  };

  return (
    <View>
      <Text style={globalStyles.header}>Create Blog</Text>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.textInput}
      />

      <Text style={{ ...styles.label, marginTop: 30 }}>Description:</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={styles.textInput}
      />

      {title && <Button title="Submit" onPress={handleSubmit} />}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default CreateScreen;
