import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { LoadingSpinner } from "./LoadingSpinner";

export const PostList = () => {
  const { postList, add_InitialAPI_Post } = useContext(PostListData);
  const [fetching, setFetching] = useState(false)
  
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        add_InitialAPI_Post(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage/>
      )}
      <div className="post">
        {!fetching && postList.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
};
