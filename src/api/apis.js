import apis from "./index";

export const getBlogPosts = () => apis.get('blogposts');

export const createBlogPosts = ({ title, content }) =>
  apis.post("blogposts", { title, content });

export const editBlogPosts = ({id, title, content}) => apis.put((`blogposts/${id}`, {title, content}))

export const deleteBlogPosts = (id) => apis.delete(`blogposts/${id}`)