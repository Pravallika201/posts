import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import "./PostsDisplay.css";

const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <PostItem key={index} post={post} index={index} />
        ))}
      </ul>
      <Link to="/create">
        <button className="create-post-button">Create Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
