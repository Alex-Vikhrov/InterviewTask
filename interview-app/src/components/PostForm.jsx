import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    price: ""
  });

  const addNewPost = e => {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    };
    create(newPost);
    setPost({
      title:'',
      description:'',
      price:''
    });
  };

  return (
    <form action="#">
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="name"
      />
      <MyInput
        value={post.description}
        onChange={e => setPost({ ...post, description: e.target.value })}
        type="text"
        placeholder="description"
      />
      <MyInput
        value={post.price}
        onChange={e => setPost({ ...post, price: e.target.value })}
        type="number"
        placeholder="1000"
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;
