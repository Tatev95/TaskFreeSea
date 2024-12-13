import { Circle } from "../../Circle";
import "../blog.css";

export const BlogHeader = () => {
  return (
    <div className="blog-header">
      <div className="updates">
        <p className="update">LATEST UPDATES</p>
        <p className="check">Check Some of Our Latest Update Blog </p>
      </div>
      <div>
        <p className="blog-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore .
        </p>
        <Circle text="VIEW ALL BLOG" />
      </div>
    </div>
  );
};
