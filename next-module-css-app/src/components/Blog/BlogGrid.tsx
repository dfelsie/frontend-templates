import React, { useEffect, useState } from "react";
import localStyles from "./Blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import BlogCard from "./BlogCard";
import { Blog } from "../../types/Blog";
type Props = {
  blogList: Blog[];
};
export default function BlogGrid({ blogList }: Props) {
  return (
    <div className={localStyles.blogGrid}>
      {" "}
      {blogList.map((val, i) => (
        <BlogCard blog={val} key={`blogCard${i}`} />
      ))}{" "}
    </div>
  );
}
