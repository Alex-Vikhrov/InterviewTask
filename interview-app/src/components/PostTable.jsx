import React from "react";
import PostTableRow from "./PostTableRow";

const PostTable = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h3 style={{ textAlign: "center", color: "teal" }}>
        Sorry, posts is not found.
      </h3>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: "center"}}>
        {title}
      </h2>
      <table className="table table-bordered table-hover table-responsive myTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {posts.map((post, index) =>
                <PostTableRow
                  remove={remove}
                  number={index + 1}
                  post={post}
                  key={post.id}
                />
            )}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
