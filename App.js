import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { BlogProvider } from "./src/context/BlogContext";
import { paths, pathsComponent } from "./src/utils/paths";

const navigator = createStackNavigator(pathsComponent, {
  initialRouteName: paths.Index,
  defaultNavigationOptions: {
    title: "Blog",
  },
});

const App = createAppContainer(navigator);

const Provider = () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

export default Provider;
