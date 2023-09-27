import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { navigation } from "../constants/navigation";
import { setCurrentLink } from "../store/curentLinkSlice";

const Navigation = ({ useImg }) => {
  const currentLink = useSelector((state) => state.currentLink.value);
  const dispatch = useDispatch();

  return (
    <>
      {navigation.map((item, index) => (
        <div
          className={`app__nav-item ${
            currentLink === item.key ? "app__active-nav-item" : ""
          }`}
          key={item.key}
        >
          <a
            href={`#${item.key}`}
            onClick={() => dispatch(setCurrentLink(item.key))}
            className={currentLink === item.key ? "app_active-link" : ""}
          >
            {useImg ? item.image : item.key}
          </a>
        </div>
      ))}
    </>
  );
};

export default Navigation;
