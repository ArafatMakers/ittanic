import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const NotFoundPage = () => {
  return (
    <>
      <div className="body">
        <div className="notFound">
          <h1 className="page">404 NICE TRY</h1>
        </div>
        <Link to="/">
          <button className="btn_not">
            <ArrowCircleRightIcon />
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
