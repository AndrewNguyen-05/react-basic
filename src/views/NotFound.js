import React from "react";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  let history = useHistory();
  const handleClickBtn = () => {
    history.push("/");
  };
  return (
    <>
      <h3>This page is not available</h3>
      <h5>
        The link may be broken, or the page may have been removed. Check to see
        if the link you're trying open is correct
      </h5>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go to homepage
      </button>
    </>
  );
};
