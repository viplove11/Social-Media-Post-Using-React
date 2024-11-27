import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

export const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const descriptionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle Submit called")
    // value's aa rhi hai
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const description = descriptionElement.current.value;
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());
    const reactions = Math.floor(Math.random() * 11); 
    addPost(userId, title, description, tags, reactions);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    descriptionElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <div className="createPostDiv container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User-Id
          </label>
          <input required
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
            placeholder="Who are you? (Enter your User ID)"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input required
            type="text"
            className="form-control"
            id="title"
            ref={titleElement}
            placeholder="What's your post about? (e.g., Trip to Goa)"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control form-group"
            rows={4}
            type="text"
            ref={descriptionElement}
            id="description"
            placeholder="Share your story... we’re all ears!"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags{" "}
            <span style={{ color: "grey", fontWeight: "bold" }}>
              (separated by ",")
            </span>
          </label>
          <input required
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Add hashtags (e.g., #travel #food)"
          />
        </div>

        <button type="submit" className="btn btn-primary" onSubmit={(event) => {
          handleSubmit(event);
        }}>
          Create Post
        </button>
      </form>
    </div>
  );
};
