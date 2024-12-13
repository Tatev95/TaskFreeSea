import "./blog.css";
import { BlogContent } from "./components/BlogContent";
import { BlogHeader } from "./components/BlogHeader";

export const Blog = () => {
  return (
    <div className="blog-container">
      <BlogHeader />
      <BlogContent />
    </div>
  );
};
