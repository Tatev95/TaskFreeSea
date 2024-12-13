import "../footer.css";
export const Copyright = () => {
  return (
    <div>
      <hr className="copyright-line" />
      <div className="copyright-content">
        <p>Copyright © 2022 BISNEXT. All Rights Reserved</p>
        <div className="terms">
          <p className="term">Terms of Use </p>
          <p> Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
