import EditScreen from "../screens/Edit";
import IndexScreen from "../screens/Index";
import CreateScreen from "../screens/New";
import ShowScreen from "../screens/Show";

export const paths = {
  Index: "Index",
  New: "New",
  Show: "Show",
  Edit: "Edit",
};

export const pathsComponent = {
  Index: IndexScreen,
  New: CreateScreen,
  Show: ShowScreen,
  Edit: EditScreen,
};
