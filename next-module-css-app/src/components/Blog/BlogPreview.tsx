import React, { useEffect, useState } from "react";
import localStyles from "./Blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import BlogGrid from "./BlogGrid";
import { Blog } from "../../types/Blog";
import BlogSec from "./BlogSec";

type Props = {
  blogs: Blog[];
};
export default function BlogPreviewList({ blogs }: Props) {
  return (
    <div>
      {" "}
      {blogs.map((val, i) => (
        <BlogSec blog={val} key={`blogSec${i}`} />
      ))}
      {/*       <BlogGrid blogList={blogs} />{" "} */}
    </div>
  );
}
