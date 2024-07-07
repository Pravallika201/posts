/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./PostItem.css";

const PostItem = ({ post, index }) => (
  <li className="post-item">
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <Link to={`/edit/${index}`} className="edit-button">
      Edit
    </Link>
  </li>
);

export default PostItem;
