import { CREATE_BLOG, DELETE_BLOG, EDIT_BLOG, GET_BLOG } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      const { title, content } = action.payload;
      return {
        ...state,
        blogs: [
          ...state.blogs,
          { title, content, id: Math.floor(Math.random() * 99999) },
        ],
      };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((item) => item.id !== action.payload),
      };

    case EDIT_BLOG:
      const stateCopy = { ...state };

      const index = stateCopy.blogs.findIndex(
        (item) => item.id === action.payload.id
      );

      stateCopy.blogs[index] = action.payload;

      return stateCopy;

    default:
      return state;
  }
};

export default reducer;
