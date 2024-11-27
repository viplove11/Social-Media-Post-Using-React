import React, { useContext, useState } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

export const Post = ({ post }) => {
  const [deleteVisible, setDeleteVisible] = useState(false);

  // context use
  const { deletePost } = useContext(PostList);
  // Function to handle mouse over event
  const handleMouseOver = () => {
    setDeleteVisible(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setDeleteVisible(false);
  };

  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      <div
        className="card-body"
        onMouseOver={handleMouseOver} // Correctly invoking the function
        onMouseLeave={handleMouseLeave} // Hide delete icon when mouse leaves
      >
        <h5 className="card-title">
          {post.title}
          {deleteVisible ? (
            <span
              onClick={() => deletePost(post.id)}
              className="position-absolute top-0 start-100 translate-middle badge myBadge bg-danger rounded-pill"
            >
              <MdDelete />
            </span>
          ) : null}
        </h5>
        <p className="card-text">{post.body}</p>
        <p className="reactionIcon position-relative">
          {post.reactions > 0 ? (
            <>
              <FaThumbsUp />{" "}
              <span className="position-absolute top-0 end-1000 translate-middle badge myBadge bg-secondary rounded-pill">
                {post.reactions}
              </span>
            </>
          ) : null}
        </p>
        <hr />
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-warning me-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
