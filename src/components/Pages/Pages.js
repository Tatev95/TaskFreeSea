import "./pages.css";
import { PagesConstants } from "../../constants/PagesConstants";

export const Pages = () => {
  return (
    <div className="pages">
      <div className="pages-container">
        {PagesConstants.pageInfo?.map((page) => (
          <div key={page.id} className="page-sections">
            <img src={page.icon} alt="" className="page-icon" />
            <p className="page-title">{page.title}</p>
            <div className="line-title">
              <div className="page-line"></div>
              <p className="page-pageTitle">{page.pageTitle}</p>
            </div>
            <p className="page-lorem">{page.lorem}</p>
            <ul className="page-ul">
              {page.menu?.map((nav) => (
                <li className="page-list" key={nav?.id}>{nav}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
