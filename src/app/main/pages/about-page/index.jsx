import React from "react";
import { cn as bem } from "@bem-react/classname";
import { Link } from "react-router-dom";
import "./style.css";

const AboutPage = () => {
  const cn = bem("AboutPage");

  return (
    <div className={cn()}>
      <Link to="/">Главная</Link>
    </div>
  );
};

export default AboutPage;
