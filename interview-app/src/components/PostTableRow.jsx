import React from "react";
import MyButton from "./UI/button/MyButton";

const PostTableRow = props => {
  return (
    <tr>
      <td>
        {props.number}
      </td>
      <td>
        {props.post.title}
      </td>
      <td>
        {props.post.price}
      </td>
      <td>
        {props.post.description}
      </td>
      <td>
        <MyButton onClick={() => props.remove(props.post)}>
          Delete
        </MyButton>
      </td>
    </tr>
  );
};

export default PostTableRow;
