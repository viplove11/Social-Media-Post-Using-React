import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CreatePost } from "./components/CreatePost";
import { PostList } from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="mainContainer">
        <div className="sideBarComponent">
          <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}></Sidebar>
        </div>
        <div className="content w-100">
          <Header></Header>
          {selectTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
