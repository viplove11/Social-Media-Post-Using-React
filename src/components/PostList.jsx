import React, { useContext } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";

export const PostList = () => {
  const { postList, add_InitialAPI_Post } = useContext(PostListData);
  const handleFetchPost = () => {
    console.log("fetch post clicked");

    // fetch posts from API and update postList state

    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        add_InitialAPI_Post(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage handleFetchPost={handleFetchPost} />
      )}
      <div className="post">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
