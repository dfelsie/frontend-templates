import React, { useEffect, useState } from "react";
import localStyles from "./BlogView.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Blog } from "../../types/Blog";
type Props = {
  blog: Blog;
};
export default function BlogView({ blog }: Props) {
  return (
    <div className={localStyles.blogCont}>
      <div className={localStyles.blogHeadCont}>
        <h3>{blog.title}</h3>
        <h5>{blog.createdAt}</h5>
      </div>
      <div className={localStyles.bodyCont}>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
