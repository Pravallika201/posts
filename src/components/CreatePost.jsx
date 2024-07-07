import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { index } = useParams();
  const posts = useSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (index !== undefined) {
      const post = posts[index];
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [index, posts]);

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    if (index !== undefined) {
      dispatch({
        type: "EDIT_POST",
        payload: { index: Number(index), post: { title, content } },
      });
    } else {
      dispatch({ type: "ADD_POST", payload: { title, content } });
    }
    navigate("/");
  };

  return (
    <div className="create-post-container">
      <h1>{index !== undefined ? "Edit Post" : "Create Post"}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>
        {index !== undefined ? "Save Changes" : "Add Post"}
      </button>
    </div>
  );
};

export default CreatePost;
