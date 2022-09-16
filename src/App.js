import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);

  function getFetchUsers() {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(() => data));
  }

  useEffect(() => getFetchUsers(), []);

  const kartlar = posts.map((post) => (
    <Card
      id={post.id}
      body={post.body}
      imageId={post.imageId}
      title={post.title}
      userId={post.userId}
    />
  ));
  return (
    <>
      <div className="container">
        <div className="row">{kartlar}</div>
      </div>
    </>
  );
}

export default App;
