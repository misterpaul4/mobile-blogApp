import { useCallback, useContext, useEffect } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import globalStyles from "../style/global";
import { paths } from "../utils/paths";
import { FontAwesome5 as TrahsIcon, AntDesign } from "@expo/vector-icons";
import { DELETE_BLOG } from "../store/actions";

const IndexScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(BlogContext);
  const navigate = navigation.navigate;

  // navigation.addListener("didFocus", () => getData());

  return (
    <View>
      <Text style={globalStyles.header}>Blog List</Text>

      <FlatList
        style={{ marginTop: 20 }}
        data={state.blogs}
        keyExtractor={(item) => `${item.title}${item.id}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigate(paths.Show, { blog: item })}
          >
            <View style={styles.container}>
              <Text style={styles.text}>
                {index + 1}. {item.title}
              </Text>

              <View style={styles.flexed}>
                <TouchableOpacity
                  onPress={() => navigate(paths.Edit, { blog: item })}
                >
                  <AntDesign
                    style={{ marginRight: 20 }}
                    name="edit"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    dispatch({ type: DELETE_BLOG, payload: item.id })
                  }
                >
                  <TrahsIcon name="trash-alt" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate(paths.New)}
      >
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  flexed: {
    display: "flex",
    flexDirection: "row",
  },
});

export default IndexScreen;
