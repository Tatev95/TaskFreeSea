import '../App.css';

export const Circle = ({ text }) => {
  return (
    <div className="circle-container">
      <div className="circle"></div>
      <p className="circle-text">{text}</p>
    </div>
  );
};
