import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsDisplay from "./components/PostsDisplay";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsDisplay />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:index" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
