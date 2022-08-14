import React, { useEffect, useState } from "react";
import localStyles from "./BlogEditor.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import Tiptap from "./Tiptap";
type Props = {};
export default function BlogEditor({}: Props) {
  return (
    <div>
      {" "}
      BlogEditor
      <Tiptap />{" "}
    </div>
  );
}
