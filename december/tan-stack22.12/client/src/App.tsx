import { Routes, Route } from "react-router-dom";
import EditPostPage from "./pages/EditPostPage";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";
import NavBar from "./components/PageLayout/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="mt-1">
        dcdd
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/postlist" element={<PostListPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/posts/edit/:id" element={<EditPostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
