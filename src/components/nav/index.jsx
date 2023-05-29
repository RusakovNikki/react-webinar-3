import React from "react";
import "./style.css";
import { translate } from "../../utils";
import { cn as bem } from "@bem-react/classname";

const Nav = ({ onClickLink, lang, children }) => {
  const cn = bem("Nav");

  function onClickRef() {
    onClickLink("/");
  }

  return (
    <div className={cn()}>
      <a className={cn("link")} onClick={onClickRef}>
        {translate(lang, "main")}
      </a>
      {children}
    </div>
  );
};

export default Nav;
