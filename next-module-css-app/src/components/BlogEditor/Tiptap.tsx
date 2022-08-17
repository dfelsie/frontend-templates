import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import localStyles from "./BlogEditor.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { useState } from "react";
import makeFetch from "../../utils/makeFetch";
import { backendRoute } from "../../consts/consts";
import { useRouter } from "next/router";

const validateTitleAndBody = (bodyText: string, titleText: string) => {
  if (titleText.length < 2) {
    return false;
  }
  return true;
};

const Tiptap = () => {
  const router = useRouter();
  const [titleError, setTitleError] = useState("");
  const contentEditor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });
  const titleEditor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <div>
        <EditorContent editor={titleEditor} />
      </div>
      <h4 className={localStyles.errTxt}>{titleError}</h4>
      <div>
        <EditorContent editor={contentEditor} />
      </div>
      <button
        className={sharedStyles.actionButton}
        onClick={async () => {
          const titleText = titleEditor.getText();
          const bodyText = contentEditor.getText();
          if (!validateTitleAndBody(titleText, bodyText)) {
            setTitleError("Title too short");
            return;
          }
          makeFetch(
            backendRoute + "/data/addblog",
            { title: titleText, body: bodyText },
            "POST"
          )().then((res) => {
            if (!res.success) {
              return;
            }
            router.push("/");
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Tiptap;
