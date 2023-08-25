import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostView from "./components/PostView";
import Unknown from "./components/Unknown";
import SearchView from "./components/SearchView";
import { fetchPosts, fetchUsers } from "./utils/api";
import Nav from "./components/Nav";

function App() {
  const [postsMap, setPostList] = useState({});
  const [userMap, setUserMap] = useState<{ [userId: number]: string }>({});

  useEffect(() => {
    async function init_api() {
      const postsMapData = await fetchPosts(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const userMapData = await fetchUsers(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPostList(postsMapData);
      setUserMap(userMapData);
    }
    init_api();
  }, []); // End of INIT_API

  return (
    <div className="w-75 mx-auto">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Posts posts={postsMap} users={userMap} />}
        ></Route>
        <Route
          path="/posts"
          element={<Posts posts={postsMap} users={userMap} />}
        ></Route>
        <Route
          path="/posts/:id"
          element={<PostView posts={postsMap} users={userMap} />}
        ></Route>
        <Route path="/search" element={<SearchView />}></Route>
        <Route path="/*" element={<Unknown />}></Route>
      </Routes>
    </div>
  );
}

export default App;
