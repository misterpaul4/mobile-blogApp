import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../style/global";
import { paths } from "../utils/paths";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const blog = state.blogs.find(
    (blog) => blog.id === navigation.getParam("blog").id
  );

  return (
    <View>
      <View>
        <Text style={globalStyles.header}>{blog.title}</Text>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          {blog.content}
        </Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const blog = navigation.getParam("blog");

  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate(paths.Edit, { blog })}
      >
        <AntDesign name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
