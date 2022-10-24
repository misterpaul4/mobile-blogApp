import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { EDIT_BLOG } from "../store/actions";
import globalStyles from "../style/global";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const blog = state.blogs.find(
    (blog) => blog.id === navigation.getParam("blog").id
  );

  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.content);
  const { dispatch } = useContext(BlogContext);

  const handleSubmit = async () => {
    dispatch({
      type: EDIT_BLOG,
      payload: { ...blog, title, content: description },
    });
    navigation.goBack();
  };

  return (
    <View>
      <Text style={globalStyles.header}>Edit Blog</Text>

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

      <Button title="Submit" onPress={handleSubmit} />
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

export default EditScreen;
