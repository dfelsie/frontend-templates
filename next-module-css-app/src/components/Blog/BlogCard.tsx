import React, { useEffect, useState } from "react";
import localStyles from "./Blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Blog } from "../../types/Blog";
type Props = {
  blog: Blog;
};
export default function BlogCard({ blog }: Props) {
  return (
    <div className={localStyles.blogCard}>
      {" "}
      <h4>{blog.title}</h4>
      <div>
        <p className={localStyles.cardTitle}>{blog.content}</p>
        <p className={localStyles.cardDate}>Created on: {blog.createdAt}</p>
      </div>
    </div>
  );
}
