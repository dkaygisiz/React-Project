import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import "./App.css";
function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  function fetchUsers() {
    axios.get("http://localhost:8000/posts").then((res) => setPosts(res.data));
  }

  useEffect(() => fetchUsers(), []);

  //get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const cards = currentPosts.map((post) => (
    <React.Fragment key={post.id}>
      <Card
        id={post.id}
        body={post.body}
        imageId={post.imageId}
        title={post.title}
        userId={post.userId}
      />
    </React.Fragment>
  ));
  return (
    <>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
      <div className="pagination">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
