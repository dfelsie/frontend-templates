import React, { useEffect, useState } from "react";
import localStyles from "./BlogList.module.css";
import sharedStyles from "../../sharedStyles.module.css";
type Props = {
  blogListData: any[];
};
export default function BlogList({ blogListData }: Props) {
  if (blogListData.length === 0) {
    return (
      <div>
        <h1>No data </h1>
      </div>
    );
  }
  return (
    <div>
      {blogListData.map((blogListData) => {
        return (
          <BlogListItem
            title={(blogListData?.title as string) ?? ""}
            content={blogListData?.content ?? ""}
          ></BlogListItem>
        );
      })}
    </div>
  );
}

type itemProps = { title: string; content: string };
function BlogListItem({ title, content }: itemProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
