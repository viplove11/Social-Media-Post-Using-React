import { createContext, useReducer } from "react";
import { BiCurrentLocation } from "react-icons/bi";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  add_InitialAPI_Post: () => {},
});

const postListReducer = (currPostList, action) => {
  let new_post_list = currPostList;
  if (action.type === "delete") {
    new_post_list = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "addPost") {
    new_post_list = [action.payload, ...currPostList];
  }
  else if(action.type === "add_InitialAPI_Post")
  {
    new_post_list = [...currPostList,...action.payload.posts];
  }
  return new_post_list;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, title, description, tags, reactions) => {
    
    dispatchPostList({
      type: "addPost",
      payload: {
        id: Date.now(),
        title: title,
        body: description,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const add_InitialAPI_Post = (posts) => {
    
    dispatchPostList({
      type: "add_InitialAPI_Post",
      payload: {
        posts
      },
    });
  };
  
  const deletePost = (postId) => {
    dispatchPostList({ type: "delete", payload: { postId: postId } });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost, add_InitialAPI_Post: add_InitialAPI_Post }}
    >
      {children}
    </PostList.Provider>
  );
};

// data to show on post
// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "I am going to Mumbai.",
//     body: "Hi friends, I am going to Mumbai for my winter vacations.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "mumbai", "beachVibes"],
//   },
//   {
//     id: "2",
//     title: "Exploring the Himalayas!",
//     body: "Can't wait to trek through the majestic Himalayas this summer.",
//     reactions: 5,
//     userId: "user-1",
//     tags: ["adventure", "himalayas", "trekking"],
//   },
//   {
//     id: "3",
//     title: "Cooking Experiment!",
//     body: "Tried making a chocolate lava cake today, turned out amazing!",
//     reactions: 2,
//     userId: "user-3",
//     tags: ["cooking", "baking", "foodie"],
//   },
//   {
//     id: "4",
//     title: "Movie Night Plans",
//     body: "Watching 'Inception' tonight. A masterpiece by Nolan!",
//     reactions: 8,
//     userId: "user-4",
//     tags: ["movies", "nolan", "thriller"],
//   },
//   {
//     id: "5",
//     title: "Beach Time in Goa!",
//     body: "Enjoying the sunsets and waves in Goa. Loving the beach vibes.",
//     reactions: 3,
//     userId: "user-2",
//     tags: ["goa", "sunset", "beach"],
//   },
//   {
//     id: "6",
//     title: "Fitness Journey",
//     body: "Just hit a new PR on my bench press! Feeling strong.",
//     reactions: 1,
//     userId: "user-6",
//     tags: ["fitness", "gym", "motivation"],
//   },
//   {
//     id: "7",
//     title: "Photography Day",
//     body: "Captured some amazing wildlife photos in the forest today.",
//     reactions: 2,
//     userId: "user-5",
//     tags: ["photography", "wildlife", "nature"],
//   },
//   {
//     id: "8",
//     title: "DIY Home Decor",
//     body: "Created a beautiful wall hanging with recycled materials.",
//     reactions: 2,
//     userId: "user-7",
//     tags: ["DIY", "crafts", "homeDecor"],
//   },
//   {
//     id: "9",
//     title: "Coding Marathon",
//     body: "Built a new to-do list app with ReactJS. Productivity unlocked!",
//     reactions: 7,
//     userId: "user-8",
//     tags: ["coding", "ReactJS", "productivity"],
//   },
//   {
//     id: "10",
//     title: "Road Trip to Ladakh",
//     body: "On the way to Ladakh with friends. Roads, bikes, and fun!",
//     reactions: 3,
//     userId: "user-10",
//     tags: ["roadTrip", "ladakh", "adventure"],
//   },
//   {
//     id: "11",
//     title: "Gaming Night",
//     body: "Played hours of Call of Duty with the squad. Ultimate fun!",
//     reactions: 8,
//     userId: "user-11",
//     tags: ["gaming", "CallOfDuty", "fun"],
//   },
// ];

export default PostListProvider;
