import React from "react";
import "./_QuickView.scss";
import CancelIcon from "@mui/icons-material/Cancel";

export default function QuickView({ handleClickPopup, bannerStyle, movie }) {
  return (
    <div className="quickView">
      <div className="quickView__banner">
        <div className="quickView__content">
          <h3 className="quickView__title">titre</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non
            ipsa tempora doloremque qui a voluptas sed libero voluptatem eaque!
            Animi molestiae, ipsam quas vel doloribus quia culpa, iusto facere
            temporibus natus facilis, dolores sequi ab. Ad obcaecati repudiandae
            accusantium quisquam, deleniti totam quas architecto recusandae
            eligendi eum, itaque nesciunt!
          </p>
        </div>
        <button className="quickView__close" OnClick={handleClickPopup}>
          <CancelIcon />
        </button>
      </div>
    </div>
  );
}
