import React, { useEffect, useState } from "react";
import localStyles from "./Blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Blog } from "../../types/Blog";
type Props = {
  blog: Blog;
};
export default function BlogSec({ blog }: Props) {
  return (
    <>
      <div className={localStyles.blogSec}>
        <p>{blog.createdAt}</p>
        <h5>{blog.title}</h5>
        <p>Click to read</p>
      </div>
      <hr />{" "}
    </>
  );
}
