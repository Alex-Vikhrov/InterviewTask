import React, { useState, useEffect, useRef } from "react";
import MyLoader from "../components/UI/loader/MyLoader";
import PostTable from "../components/PostTable";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";

function TablePostsPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  let pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, isPostsLoading, () => {
    setPage(page + 1)
  });

  useEffect(() => {
      fetchPosts(limit, page);
  }, [page]);

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = page => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton style={{ width: 200 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "10px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <aside
          style={{
            marginTop: "50px",
            textAlign: "center",
            color: "brown",
            textTransform: "uppercase",
            fontSize: "36px"
          }}
        >
          {" "}An error has occurred ${postError}{" "}
        </aside>}
      <PostTable
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Table Posts"
      />
      <div ref={lastElement} style={{ height: 10 }} />
      {isPostsLoading && <MyLoader />}
    </div>
  );
}

export default TablePostsPage;
