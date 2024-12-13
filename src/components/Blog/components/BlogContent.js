import "../blog.css";
import { BlogPageConstants } from "../../../constants/BlogPageConstants";
import BlogImage from '../images/blogImage.svg'

export const BlogContent = () => {
  return (
    <div className="blog-content">
        <img src={BlogImage} alt="" className="blog-image"/>
      {BlogPageConstants?.blogInfo?.map((blog) => (
        <div className="role-date">
          <div key={blog.id}>
            <p className="marketing-role">{blog.role} &nbsp;|&nbsp;<span className="marketing-date">{blog.date}</span></p>
          </div>
          <p className="marketing-text">{blog.text}</p>
        </div>
      ))}
    </div>
  );
};
