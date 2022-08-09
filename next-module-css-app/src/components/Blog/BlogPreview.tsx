import React, { useEffect, useState } from "react";
import localStyles from "./Blog.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import BlogGrid from "./BlogGrid";
import { Blog } from "../../types/Blog";

type Props = {
  blogs: Blog[];
};
export default function BlogPreview({ blogs }: Props) {
  return (
    <div>
      {" "}
      <BlogGrid blogList={blogs} />{" "}
    </div>
  );
}
